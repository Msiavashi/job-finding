// Mongoose
const mongoose = require('mongoose');

// Destructure Schema From Mongoose
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
    resume: {
        type: Schema.Types.ObjectId,
        ref: 'resume-details',
    },

    role: [{
        type: Schema.Types.ObjectId,
        ref: 'role',
    }],

    jobPosition: [{
        type: Schema.Types.ObjectId,
        ref: 'job-position',
    }],

    request: {
        type: Schema.Types.ObjectId,
        ref: 'request',
    },

    

});


module.exports = {
    userSchema = mongoose.model('user', userSchema),
};
