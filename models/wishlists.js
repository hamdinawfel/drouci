const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
   studentId:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    courseId:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    courseTitle:{ 
        type: String,
        required: true
    },
    sectionsNumber:{
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        // required: true
    },
    completedSections:[{type: mongoose.Schema.Types.ObjectId}],
}, {
    timestamps: true
});

var Wishlists = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlists;