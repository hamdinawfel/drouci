const express = require('express');
const bodyParser = require('body-parser');
var User = require('../models/user');
var passport = require('passport');
var authenticate = require('../authenticate');

var router = express.Router();
router.use(bodyParser.json());

router.post('/signup', (req, res, next) => {
    User.register(new User({email: req.body.username}), 
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      if (req.body.firstname)
        user.firstname = req.body.firstname;
      if (req.body.lastname)
        user.lastname = req.body.lastname;
      if (req.body.level)
        user.level = req.body.level;
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({err: err});
          return ;
        }
        passport.authenticate('local')(req, res, () => {
          var token = authenticate.getToken({_id: req.user._id});
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, token: token, status: 'Registration Successful!'});
        });
      });
    }
  });
  });
  
  router.post('/login', passport.authenticate('local'), (req, res) => {

    var token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: 'You are successfully logged in!'});
  });
    
 router.get('/',authenticate.verifyUser, authenticate.verifyAdmin, (req,res,next) => {
    User.find({})
    .then((users) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
    }, (err) => next(err))
    .catch((err) => next(err));
})
 router.put('/',authenticate.verifyUser, (req,res,next) => {
  User.findById(req.user._id).then((user) => {
    if (user != null && req.body.level) {
      user.level = req.body.level;
        user.save().then((user) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(user);
        }, (err) => next(err)).catch((err) => next(err));
    } 
}, (err) => next(err)).catch((err) => next(err));
    
})
 router.get('/:userId',authenticate.verifyUser, (req,res,next) => {//FIXME: autorizeb the admin to get user info 
  User.findById(req.params.userId).then((user) => {
    if (user != null) {
        if (req.params.userId.toString() != req.user._id.toString()) {
            err = new Error('You are not authorized to get this profile');
            err.status = 403;
            return next(err);
        }
        else{
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(user);
        }
    } 
     else {
      err = new Error('User ' + req.params.userId + ' not found');
      err.status = 404;
      return next(err);
    }
}, (err) => next(err)).catch((err) => next(err));

    
})
  module.exports = router;