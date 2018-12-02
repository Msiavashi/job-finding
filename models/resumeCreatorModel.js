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
        name: String,
        surname: String,
        employmentStatus: Number,
        email: String,
        phoneNumber: String,
        maritalStatus: Number,
        country: String,
        state: String,
        city: String,
        aboutMe: String,
    },
    skill: {
        skills: [{
            skillId: {
                type: Schema.Types.ObjectId,
                ref: 'skills'
            },
            skillName: String,
            skillNameFa: String,
            skillLevel : String // We can use number too
        }],
    },
    exprience: {
        vocationalBackground: [{
            jobTitle: String,
            companyName: {
                type: Schema.Types.ObjectId,
                ref : 'recruiter-data'
            },
            startDate: String,
            endDate: String,
            currentJob: Boolean,
            jobDescription: String,
        }],
    },
    education: {
        educationalBackground: [{
            educationalLevel: String,
            fieldOfStudy: String,
            institutionName: String,
            startDate: String,
            endDate: String,
            currentlyStudying: Boolean,
        }],
        academicCertificates: [{
            certificateName: String,
            certificateID: String,
        }],
    },
    language: {
        languages: [{
            languageId: {
                type: Schema.Types.ObjectId,
                ref: 'languages'
            },
            languageName: String,
            perfection: String,
        }],
        professionLevel: String,
    },

    interested:{
        title : String,
        description: String
    },

    millitaryService :{
        type: Boolean,
    }


});

module.exports = {
    resumeDetailsSchema = mongoose.model('resume-details', resumeDetailsSchema),
};
