// mongoose
const mongoose = require('mongoose');
// destructure schema from mongoose
const Schema = mongoose.Schema;

const jobsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    recruiterName: String,
    jobTitle: String,
    jobDescription: String,
    jobResponsibilities: String,
    minimumRequirements: String,
    requiredSkills: [{
        type: Schema.Types.ObjectId,
        ref: 'skills'
    }],
    agreeableSalary: Boolean,
    salaryMin: Number,
    salaryMax: Number,
    ageRange: Boolean,
    ageMin: Number,
    ageMax: Number,
    experience: Boolean,
    experienceMin: Number,
    experienceMax: Number,
    cooperationTypeImportance: Boolean,
    cooperationType: [{
        fullTime: Boolean,
        partTime: Boolean,
        remote: Boolean,
        trainee: Boolean,
        projectBased: Boolean,
    }],
    militaryServiceImportance: Boolean,
    militaryService: [{
        finished: Boolean,
        exempted: Boolean,
        inProgress: Boolean,
        incomplete: Boolean,
    }],
    degreeImportance: Boolean,
    degree: [{
        diploma: Boolean,
        associateDegree: Boolean,
        bachelors: Boolean,
        masters: Boolean,
        phd: Boolean,
    }],
    state: {
        type: Schema.Types.ObjectId,
        ref: 'states',
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'cities',
    },
    neighbourhood: String,
}, {
    timestamps: true,
});

module.exports = {
    jobsSchema = mongoose.model('jobs', jobsSchema),
};