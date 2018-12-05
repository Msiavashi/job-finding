// mongoose
const mongoose = require('mongoose');

// destructure Schema from mongoose
const {
    Schema
} = mongoose;

// resume-details
const resumeDetailsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    personalInformation: {
        type: Schema.Types.ObjectId,
        ref: 'personal-information',
    },
    skill: {
        type: Schema.Types.ObjectId,
        ref: 'skill'

    },
    experience: [{
        type: Schema.Types.ObjectId,
        ref: 'experience'
    }],

    education: {
        type: Schema.Types.ObjectId,
        ref: 'education'

    },

    speakingLanguage: [{
        type: Schema.Types.ObjectId,
        ref: 'speaking-language'

    }],

    interest: [{
        type: Schema.Types.ObjectId,
        ref: 'interest'
    }],

    millitaryService: {
        type: Schema.Types.ObjectId,
        ref: 'military-service'
    }


});

module.exports = {
    resumeDetailsSchema = mongoose.model('resume-details', resumeDetailsSchema),
};