const express = require('express');
const bodyParser = require('body-parser');
const Wishlists = require('../models/wishlists');
const Courses = require('../models/courses');
var authenticate = require('../authenticate');

const wishlistRouter = express.Router();

wishlistRouter.use(bodyParser.json());

wishlistRouter.route('/')
.get(authenticate.verifyUser, (req,res,next) => {
    Wishlists.find({ studentId : req.user._id})
    .then((wishlists) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(wishlists);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser, (req, res, next) => {
    Wishlists.findOne({studentId : req.user._id, courseId : req.body.courseId })
     .then((wishlist)=>{
    if( wishlist != null ){
        err = new Error('Course ' + req.body.courseId + ' is already exist in your wishlist');
        err.status = 404;
        return next(err);
    }else{
        console.log('not exist')
        Courses.findById(req.body.courseId)
           .then((course)=>{
            const newWishlist = new Wishlists({
                studentId: req.user._id,
                courseId: req.body.courseId,
                courseTitle : course.title,
                category: course.category,
                imageUrl : course.imageUrl,
                sectionsNumber : course.sectionsNumber,
            });
            newWishlist.save()
             .then((wishlist) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(wishlist);
             }, (err) => next(err))
           })
    }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /wishlist/');
})
.delete(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /wishlist/'); //TODO: user can delete all the wishlist courses 
});

wishlistRouter.route('/:wishlistId')
.get(authenticate.verifyUser, (req,res,next) => {
   Wishlists.findById(req.params.wishlistId)
     .populate('courseId')
     .then((wishlist)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(wishlist);   
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /wishlist/'+ req.params.wishlistId );
})
.put(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /wishlist/'+ req.params.wishlistId );
})
.delete(authenticate.verifyUser, (req, res, next) => {
    Wishlists.findOneAndDelete({student: req.user._id})
    .then((wishlist) =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(wishlist);
    }, (err) => next(err))
   .catch((err) => next(err));
});

wishlistRouter.route('/:wishlistId/complete')
.post(authenticate.verifyUser, (req, res, next) => {
    Wishlists.findByIdAndUpdate(req.params.wishlistId)
        .then((wishlist)=>{
            wishlist.completedSections.push(req.body.sectionId)
            wishlist.save()
              .then((wishlist) =>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(wishlist);
              })
        }, (err) => next(err))
        .catch((err) => next(err));
});



module.exports = wishlistRouter;


















// const express = require('express');
// const bodyParser = require('body-parser');
// const Wishlists = require('../models/wishlists');
// const Courses = require('../models/courses');
// var authenticate = require('../authenticate');


// const wishlistRouter = express.Router();

// wishlistRouter.use(bodyParser.json());

// wishlistRouter.route('/')
// .get(authenticate.verifyUser, (req,res,next) => {
//     Wishlists.findOne({ student : req.user._id})
//     .populate('student')
//     // .populate('courses')
//     .then((wishlists) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(wishlists);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// })
// .post(authenticate.verifyUser,authenticate.verifyAdmin, (req, res, next) => {
//     res.statusCode = 403;
//     res.end('POST operation not supported on /wishlist/');
// })
// .put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
//     res.statusCode = 403;
//     res.end('Put operation not supported on /wishlist/');
// })
// .delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
//     res.statusCode = 403;
//     res.end('DELETE operation not supported on /wishlist/');
// });

// wishlistRouter.route('/:courseId')
// .get((req,res,next) => {
//     res.statusCode = 403;
//     res.end('Get operation not supported on /wishlist/'+ req.params.courseId );
// })
// .post(authenticate.verifyUser, (req, res, next) => {
//   Courses.findById(req.params.courseId)
//    .then((course) => {
//        if(course !== null){
//          Wishlists.findOne({student : req.user._id})
//           .then((wishlist) =>{
//              if(wishlist !== null){
//                 if(wishlist.courses.indexOf(req.params.courseId) !== -1){
//                    wishlist.courses.push(course)
//                    wishlist.save()
//                      .then((wishlist)=>{
//                         Wishlists.findById(wishlist._id)
//                         // .populate('student')
//                         // .populate('courses')
//                         .then((wishlist)=>{
//                            res.statusCode = 200;
//                            res.setHeader('Content-Type', 'application/json');
//                            res.json(wishlist);
//                         }, (err) => next(err))
//                      }, (err) => next(err))
//                 }else{
//                     err = new Error('Course ' + req.params.courseId + ' is already added!');
//                     err.status = 404;
//                     return next(err);
//                 }
//              }
//              else{
//               const newWishlist = new Wishlists({
//                   student: req.user._id,
//                   courses : [course]
//               });
//               newWishlist.save()
//                 .then((wishlist) => {
//                     Wishlists.findById(wishlist._id)
//                     // .populate('student')
//                     // .populate('courses')
//                     .then((wishlist) => {
//                         res.statusCode = 200;
//                         res.setHeader('Content-Type', 'application/json');
//                         res.json(wishlist);
//                     })            
//                 }, (err) => next(err));
//              }
//           }, (err) => next(err))
//        }
//        else{
//             err = new Error('Course ' + req.params.courseId + ' not found');
//             err.status = 404;
//             return next(err);
//        }
//    }, (err) => next(err))
//    .catch((err) => next(err));
// })
// .put(authenticate.verifyUser, (req, res, next) => {
//     res.statusCode = 403;
//     res.end('Put operation not supported on /wishlist/'+ req.params.courseId );
// })
// .delete(authenticate.verifyUser, (req, res, next) => {
    
// });

// wishlistRouter.route('/:courseId/complete')
// .get(authenticate.verifyUser, (req,res,next) => {
//     res.statusCode = 403;
//     res.end('GET operation not supported on /wishlist/'+ req.params.courseId + '/complete');
// })
// .post(authenticate.verifyUser,authenticate.verifyAdmin, (req, res, next) => {
//     res.statusCode = 403;
//     res.end('POST operation not supported on /wishlist/' + req.params.courseId + '/complete');
// })
// .put(authenticate.verifyUser, (req, res, next) => {
//     Wishlists.findOne({ student : req.user._id})
//     .then((wishlist) => {
//        if(wishlist !== null ){
//             let course = wishlist.courses.find(item => item._id.toString() === req.params.courseId.toString())
//             let index = wishlist.courses.findIndex(item => item._id.toString() === req.params.courseId.toString())
//             if( index !== -1 ){
//             //    wishlist.courses[index] = course.modules.find(item => item._id.toString() === req.body.moduleId.toString()).sections.find(item =>item._id.toString() === req.body.sectionId.toString()).iscompleted = true
//                wishlist.save()
//                 .then((wishlist) => {
//                     Wishlists.findByIdAndUpdate(req.params.promoId, {
//                         $set: course.modules.find(item => item._id.toString() === req.body.moduleId.toString()).sections.find(item =>item._id.toString() === req.body.sectionId.toString()).iscompleted=true
//                     }, { new: true })
//                       .then((wishlist)=>{
//                             res.statusCode = 200;
//                             res.setHeader('Content-Type', 'application/json');
//                             res.json(wishlist);
//                      }, (err) => next(err))
                      
//                 }, (err) => next(err)).catch((err) => next(err));
//             }else{
//                 // Courses.findById(req.params.courseId)
//                 // .then((course) => {
//                 // course.modules.find(item => item._id.toString() === req.body.moduleId.toString()).sections.find(item =>item._id.toString() === req.body.sectionId.toString()).iscompleted = true

//                 // }, (err) => next(err))
//                 // .catch((err) => next(err));

//                 // wishlist.courses.push(course)
//                 // wishlist.save()
//                 //   .then((wishlist)=>{
//                 //      Wishlists.findById(wishlist._id)
//                 //      .then((wishlist)=>{
//                 //         res.statusCode = 200;
//                 //         res.setHeader('Content-Type', 'application/json');
//                 //         res.json(wishlist);
//                 //      }, (err) => next(err))
//                 //   }, (err) => next(err))
//                 console.log('object')
//             }
     
       
//        }
//     }, (err) => next(err))
//     .catch((err) => next(err));
// })
// .delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
//     res.statusCode = 403;
//     res.end('DELETE operation not supported on /wishlist/' + req.params.courseId + '/complete');
// });

// module.exports = whliisstRouter;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const wishlistSchema = new Schema({
//    student:  {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     courses:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
// }, {
//     timestamps: true
// });

// var Wishlists = mongoose.model('Wishlist', wishlistSchema);

// module.exports = Wishlists;