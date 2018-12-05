// mongoose
const mongoose = require('mongoose');

// destructure Schema from mongoose
const {
    Schema
} = mongoose;

// resume-details
const skillSchema = new Schema({
    resume: [{
        type: Schema.Types.ObjectId,
        ref: 'resume-details',
    }],

    skillLevel: {
        type: Schema.Types.ObjectId,
        ref: 'skill-level',
    },

    skillCategory: [{
        type: Schema.Types.ObjectId,
        ref: 'skill-category',
    }],

});

module.exports = {
    skillSchema = mongoose.model('skill', skillSchema),
};