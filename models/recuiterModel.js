// mongoose
const mongoose = require('mongoose');

// destructure schema from mongoose
const Schema = mongoose.Schema;

const recruiterDataSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    recruiterType: String,
    // real person 👇
    fullName: String,
    nationalId: String,
    nationalCardPhoto: {
        name: String,
        mime: String,
        ext: String,
        path: String,
    },
    // legal person 👇
    companyName: String,
    registrationNumber: String,
    ceoName: String,
    numberOfEmployees: Number,
    website: String,
    newspaperPhoto: {
        name: String,
        mime: String,
        ext: String,
        path: String,
    },
    // common 👇
    address: String,
    landline: String,
    group: String,
});

module.exports = {
    recruiterDataSchema = mongoose.model('recruiter-data', recruiterDataSchema),
};
