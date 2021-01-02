const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const sectionSchema = new Schema({
    title:  {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    format:{
        type: String,
        // required: true
    },
    videoUrl:{
        type: String,
        required: true
    },
    access:{
        type: Boolean,
        default:true  
    }
});
const moduleSchema = new Schema({
    title:  {
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    sessionsNumber:{
        type: String,
        required: true
    },
    sections:[sectionSchema],
});
var commentSchema = new Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        // required: true
    },
    sectionsNumber:{
        type: Number,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    creator:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments:[{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    modules:  [moduleSchema]
}, {
    timestamps: true
});

var Courses = mongoose.model('Course', courseSchema);

module.exports = Courses;