// Mongoose
const mongoose = require('mongoose');

// Destructure Schema From Mongoose
const Schema = mongoose.Schema;

// User Schema
const institutionSchema = new Schema({
    eperience: {
        type: Schema.Types.ObjectId,
        ref: 'experience',
    },

    education: [{
        type: Schema.Types.ObjectId,
        ref: 'education',
    }],

    jobPosition: [{
        type: Schema.Types.ObjectId,
        ref: 'job-position',
    }],

    institution: {
        type: Schema.Types.ObjectId,
        ref: 'institution',
    },

    

});


module.exports = {
    institutionSchema = mongoose.model('institution', institutionSchema),
};
