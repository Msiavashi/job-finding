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
    stepOne: {
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
    stepTwo: {
        skills: [{
            skillId: {
                type: Schema.Types.ObjectId,
                ref: 'skills'
            },
            skillName: String,
            skillNameFa: String,
        }],
    },
    stepThree: {
        vocationalBackground: [{
            jobTitle: String,
            companyName: String,
            startDate: String,
            endDate: String,
            currentJob: Boolean,
            jobDescription: String,
        }],
    },
    stepFour: {
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
    stepFive: {
        languages: [{
            languageId: {
                type: Schema.Types.ObjectId,
                ref: 'languages'
            },
            languageName: String,
            perfection: String,
        }],
        professionLevel: String,
        contractType: String,
        jobPerks: {
            promotions: Boolean,
            flexibleTimes: Boolean,
            insurance: Boolean,
            commutingServices: Boolean,
            learningCourses: Boolean,
            food: Boolean,
            overtime: Boolean,
            foreignTrips: Boolean,
            loans: Boolean,
        },
    }
});

module.exports = {
    resumeDetailsSchema = mongoose.model('resume-details', resumeDetailsSchema),
};
