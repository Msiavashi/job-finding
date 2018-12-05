// mongoose
const mongoose = require('mongoose');

// destructure Schema from mongoose
const {
    Schema
} = mongoose;

// resume-details
const skillLevelSchema = new Schema({

    skill: [{
        type: Schema.Types.ObjectId,
        ref: 'skill',
    }],

});

module.exports = {
    skillLevelSchema = mongoose.model('skill-level', skillLevelSchema),
};