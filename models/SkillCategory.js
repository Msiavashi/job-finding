// mongoose
const mongoose = require('mongoose');

// destructure Schema from mongoose
const {
    Schema
} = mongoose;

// resume-details
const skillCategorySchema = new Schema({
    skill: [{
        type: Schema.Types.ObjectId,
        ref: 'skill',
    }],


});

module.exports = {
    skillCategorySchema = mongoose.model('skill-category', skillCategorySchema),
};