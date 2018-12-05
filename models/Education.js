// mongoose
const mongoose = require('mongoose');

// destructure Schema from mongoose
const {
    Schema
} = mongoose;

// resume-details
const educationSchema = new Schema({
    resume: [{
        type: Schema.Types.ObjectId,
        ref: 'resume-details',
    }],

    institution: [{
        type: Schema.Types.ObjectId,
        ref: 'institution',
    }],

});

module.exports = {
    educationSchema = mongoose.model('education', educationSchema),
};