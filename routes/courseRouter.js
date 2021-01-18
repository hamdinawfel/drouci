const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const Courses = require('../models/courses');
var authenticate = require('../authenticate');

const courseRouter = express.Router();

courseRouter.use(bodyParser.json());

courseRouter.route('/')
.get((req,res,next) => {
    Courses.find({})
    // .populate('comments.author')
    .populate('creator')
    .then((courses) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(courses);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser, authenticate.verifyAdmin,(req, res, next) => {
    // const newCourse = new Courses({
    //     title : req.body.title,
    //     description : req.body.description,
    //     // imageUrl : `/images/${req.file.filename}`,
    //     category : req.body.category,
    //     level : req.body.level,
    //     price : req.body.price,
    //     creator: req.user._id,
    //     duration:req.body.duration,
    //     sectionsNumber:req.body.sectionsNumber,
    //   });
    //   newCourse.save()
    //   .then((course) => {
    //     Courses.findById(course._id)
    //     .populate('creator')
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'application/json');
    //     res.json(course);
    // }, (err) => next(err))
    // .catch((err) => next(err));
    Courses.create(req.body)
    .then((course) => {
        console.log('course Created ', course);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(course);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /courses');
})
.delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Courses.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

courseRouter.route('/:courseId')
.get((req,res,next) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(course);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /course/'+ req.params.courseId);
})
.put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Courses.findByIdAndUpdate(req.params.courseId, {
        $set: req.body
    }, { new: true })
    .then((course) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(course);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Courses.findByIdAndRemove(req.params.dishId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

//  //comments
// courseRouter.route('/:courseId/comments')
// .get((req,res,next) => {
//     Courses.findById(req.params.courseId)
//     .populate('comments.author')
//     .then((course) => {
//         if (course != null) {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.json(course.comments);
//         }
//         else {
//             err = new Error('Course ' + req.params.courseId + ' not found');
//             err.status = 404;
//             return next(err);
//         }
//     }, (err) => next(err))
//     .catch((err) => next(err));
// })
// .post(authenticate.verifyUser,(req, res, next) => {
//     Courses.findById(req.params.courseId)
//     .then((course) => {
//         if (course != null) {
//             req.body.author = req.user._id;
//             course.comments.push(req.body);
//             course.save()
//             .then((course) => {
//                 Courses.findById(course._id)
//                 .populate('comments.author')
//                 .then((course) => {
//                     res.statusCode = 200;
//                     res.setHeader('Content-Type', 'application/json');
//                     res.json(course);
//                 })            
//             }, (err) => next(err));
//         }
//         else {
//             err = new Error('Course ' + req.params.courseId + ' not found');
//             err.status = 404;
//             return next(err);
//         }
//     }, (err) => next(err))
//     .catch((err) => next(err));
// })
// .put(authenticate.verifyUser,(req, res, next) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /courses/'
//         + req.params.courseId + '/comments');
// })
// .delete(authenticate.verifyUser, authenticate.verifyAdmin,(req, res, next) => {
//     Courses.findById(req.params.courseId)
//     .then((course) => {
//         if (course != null) {
//             for (var i = (course.comments.length -1); i >= 0; i--) {
//                 course.comments.id(course.comments[i]._id).remove();
//             }
//             course.save()
//             .then((course) => {
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.json(course);                
//             }, (err) => next(err));
//         }
//         else {
//             err = new Error('Course ' + req.params.courseId + ' not found');
//             err.status = 404;
//             return next(err);
//         }
//     }, (err) => next(err))
//     .catch((err) => next(err));    
// });

// courseRouter.route('/:courseId/comments/:commentId')
// .get((req,res,next) => {
//     Courses.findById(req.params.courseId)
//     .populate('comments.author')    
//     .then((course) => {
//         if (course != null && course.comments.id(req.params.commentId) != null) {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.json(course.comments.id(req.params.commentId));
//         }
//         else if (course == null) {
//             err = new Error('Course ' + req.params.courseId + ' not found');
//             err.status = 404;
//             return next(err);
//         }
//         else {
//             err = new Error('Comment ' + req.params.commentId + ' not found');
//             err.status = 404;
//             return next(err);            
//         }
//     }, (err) => next(err))
//     .catch((err) => next(err));
// })
// .post(authenticate.verifyUser,(req, res, next) => {
//     res.statusCode = 403;
//     res.end('POST operation not supported on /courses/'+ req.params.courseId
//         + '/comments/' + req.params.commentId);
// })
// .put(authenticate.verifyUser, (req, res, next) => {
//     Courses.findById(req.params.courseId).then((course) => {
//         if (course != null && course.comments.id(req.params.commentId)) {
//             if (course.comments.id(req.params.commentId).author.toString() != req.user._id.toString()) {
//                 err = new Error('You are not authorized to edit this comment');
//                 err.status = 403;
//                 return next(err);
//             }
//             if (req.body.rating) {
//                 course.comments.id(req.params.commentId).rating = req.body.rating;
//             }

//             if (req.body.comment) {
//                 course.comments.id(req.params.commentId).comment = req.body.comment;
//             }
//             course.save().then((course) => {
//                 res.statusCode = 200;
//                 res.setHeader("Content-Type", "application/json");
//                 res.json(course);
//             }, (err) => next(err)).catch((err) => next(err));
//         } else if (course == null) {
//             err = new Error('Course ' + req.params.courseId + ' not found');
//             err.status = 404;
//             return next(err);
//         } else {
//             err = new Error('Comment ' + req.params.commentId + ' not found');
//             err.status = 404;
//             return next(err);
//         }
//     }, (err) => next(err)).catch((err) => next(err));
// })
// .delete(authenticate.verifyUser,(req, res, next) => {
//     Courses.findById(req.params.courseId)
//     .then((course) => {
//         if (course != null && course.comments.id(req.params.commentId) != null) {
//            if(course.comments.id(req.params.commentId).author.equals(req.user._id)){
//                 course.comments.id(req.params.commentId).remove();
//                 course.save()
//                 .then((course) => {
//                     Courses.findById(course._id)
//                     .populate('comments.author')
//                     .then((course) => {
//                         res.statusCode = 200;
//                         res.setHeader('Content-Type', 'application/json');
//                         res.json(course);  
//                     })               
//                 }, (err) => next(err));
//            }
//            else{
//             err = new Error('You are not authorized to perform this operation!');
//             err.status = 403;
//             return next(err);   
//            }
//         }
//         else if (course == null) {
//             err = new Error('Course ' + req.params.courseId + ' not found');
//             err.status = 404;
//             return next(err);
//         }
//         else {
//             err = new Error('Comment ' + req.params.commentId + ' not found');
//             err.status = 404;
//             return next(err);            
//         }
//     }, (err) => next(err))
//     .catch((err) => next(err));
// });
//Modules
 courseRouter.route('/:courseId/modules')
 .get((req,res,next) => {
     Courses.findById(req.params.courseId)
     .then((course) => {
         if (course != null) {
             res.statusCode = 200;
             res.setHeader('Content-Type', 'application/json');
             res.json(course.modules);
         }
         else {
             err = new Error('Course ' + req.params.courseId + ' not found');
             err.status = 404;
             return next(err);
         }
     }, (err) => next(err))
     .catch((err) => next(err));
 })
 .post(authenticate.verifyUser, authenticate.verifyAdmin,(req, res, next) => {
     Courses.findById(req.params.courseId)
     .then((course) => {
         if (course != null) {
             course.modules.push(req.body);
             course.save()
             .then((course) => {
                 Courses.findById(course._id)
                 .then((course) => {
                     res.statusCode = 200;
                     res.setHeader('Content-Type', 'application/json');
                     res.json(course);
                 })            
             }, (err) => next(err));
         }
         else {
             err = new Error('Course ' + req.params.courseId + ' not found');
             err.status = 404;
             return next(err);
         }
     }, (err) => next(err))
     .catch((err) => next(err));
 })
 .put(authenticate.verifyUser,(req, res, next) => {
     res.statusCode = 403;
     res.end('PUT operation not supported on /courses/'
         + req.params.courseId + '/modules');
 })
 .delete(authenticate.verifyUser, authenticate.verifyAdmin,(req, res, next) => {
     Courses.findById(req.params.courseId)
     .then((course) => {
         if (course != null) {
             for (var i = (course.modules.length -1); i >= 0; i--) {
                 course.modules.id(course.modules[i]._id).remove();
             }
             course.save()
             .then((course) => {
                 res.statusCode = 200;
                 res.setHeader('Content-Type', 'application/json');
                 res.json(course);                
             }, (err) => next(err));
         }
         else {
             err = new Error('Course ' + req.params.courseId + ' not found');
             err.status = 404;
             return next(err);
         }
     }, (err) => next(err))
     .catch((err) => next(err));    
 });
//Specific Module
 courseRouter.route('/:courseId/modules/:moduleId')
.get((req,res,next) => {
    Courses.findById(req.params.courseId) 
    .then((course) => {
        if (course != null && course.modules.id(req.params.moduleId) != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(course.modules.id(req.params.moduleId));
        }
        else if (course == null) {
            err = new Error('Course ' + req.params.courseId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Modules ' + req.params.moduleId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser,(req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /courses/'+ req.params.courseId
        + '/modules/' + req.params.moduleId);
})
.put(authenticate.verifyUser, (req, res, next) => {
    Courses.findById(req.params.courseId).then((course) => {
        if (course != null && course.modules.id(req.params.moduleId)) {
            if (req.body.title) {
                course.modules.id(req.params.moduleId).title = req.body.title;
            }
            if (req.body.duration) {
                course.modules.id(req.params.moduleId).duration = req.body.duration;
            }
            if (req.body.sessionsNumber) {
                course.modules.id(req.params.moduleId).sessionsNumber = req.body.sessionsNumber;
            }
            course.save().then((course) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(course);
            }, (err) => next(err)).catch((err) => next(err));
        } else if (course == null) {
            err = new Error('Course ' + req.params.courseId + ' not found');
            err.status = 404;
            return next(err);
        } else {
            err = new Error('Module' + req.params.moduleId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err)).catch((err) => next(err));
})
.delete(authenticate.verifyUser,(req, res, next) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        if (course != null && course.modules.id(req.params.moduleId) != null) {
            course.modules.id(req.params.moduleId).remove();
                course.save()
                .then((course) => {
                    Courses.findById(course._id)
                    .then((course) => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(course);  
                    })               
                }, (err) => next(err));
        }
        else if (course == null) {
            err = new Error('Course ' + req.params.courseId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Module ' + req.params.commentId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
});
//sections
courseRouter.route('/:courseId/modules/:moduleId/sections')
.get((req,res,next) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        if (course != null && course.modules.id(req.params.moduleId) != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(course.modules.id(req.params.moduleId).sections);
        }
        else if (course == null) {
            err = new Error('Course ' + req.params.courseId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Modules ' + req.params.moduleId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        if (course != null  && course.modules.id(req.params.moduleId) != null) {
            const newSection = {
                title : req.body.title,
                description : req.body.description,
                videoUrl : req.body.videoUrl,
                duration : req.body.duration,
                format : req.body.format,
              };
            course.modules.id(req.params.moduleId).sections.push(newSection);
            course.save()
            .then((course) => {
                Courses.findById(course._id)
                .then((course) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(course.modules.id(req.params.moduleId).sections);
                })            
            }, (err) => next(err));
        }
        else if (course == null) {
            err = new Error('Course ' + req.params.courseId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Modules ' + req.params.moduleId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(authenticate.verifyUser,(req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /courses/'
        + req.params.courseId + '/modules/' + req.params.moduleId + '/sections');
})
.delete(authenticate.verifyUser, authenticate.verifyAdmin,(req, res, next) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        if (course != null && course.modules.id(req.params.moduleId) != null) {
            for (var i = (course.modules.id(req.params.moduleId).sections.length -1); i >= 0; i--) {
                // course.modules.id(course.modules[i]._id).remove();
                course.modules.id(req.params.moduleId).sections.id(course.modules.id(req.params.moduleId).sections[i]._id).remove();
            }
            console.log(course.modules.id(req.params.moduleId).sections.length)
            course.save()
            .then((course) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(course);                
            }, (err) => next(err));
        }
        else {
            err = new Error('Course ' + req.params.courseId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));    
});
module.exports = courseRouter;