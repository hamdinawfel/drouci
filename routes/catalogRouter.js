const express = require('express');
const bodyParser = require('body-parser');
const Courses = require('../models/courses');
var authenticate = require('../authenticate');


const catalogRouter = express.Router();

catalogRouter.use(bodyParser.json());

catalogRouter.route('/:level')
.get((req,res,next) => {
    Courses.find({ level: req.params.level },{comments : 0 , modules: 0, createdAt:0, updatedAt:0, creator:0})
    .then((courses) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(courses);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /learn/'+ req.params.level);
})
.put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /learn/'+ req.params.level);
})
.delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /learn/'+ req.params.level);
});




module.exports = catalogRouter;