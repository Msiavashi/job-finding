// Mongoose
const mongoose = require('mongoose');

// Destructure Schema From Mongoose
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
    registrationId: {
        type: Schema.Types.ObjectId,
        ref: 'Registrant'
    },
    phoneNumber: String,
    name: String,
    userRole: [String],
    password: String,
});

// User Details Schema
const userDetailsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    profileType: Array,
    currentProfileImage: {
        type: Schema.Types.ObjectId,
        ref: 'profile-images'
    },
    nameEnglish: String,
    surnameEnglish: String,
    nameFarsi: String,
    surnameFarsi: String,
    userName: String,
    nationalId: String,
    passportNumber: String,
});

// Register Users
const registrationSchema = new Schema({
    _id: Schema.Types.ObjectId,
    phoneNumber: String,
    verificationCode: String,
    registrationTime: Date,
    registrationStatus: Boolean,
});

// Uploaded Files
const fileSchema = new Schema({
    name: {
        type: String
    },
    mime: {
        type: String
    },
    ext: {
        type: String
    },
    path: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
}, {
    timestamps: true,
});

const accessLogSchema = new Schema({
    logDate: Date,
    path: String,
    userAgent: String,
    ipAddress: String,
    referrer: String,
});

module.exports = {
    registrationSchema = mongoose.model('Registrants', registrationSchema),
    userSchema = mongoose.model('Users', userSchema),
    accessLogSchema = mongoose.model('Access-Logs', accessLogSchema),
    fileSchema = mongoose.model('profile-images', fileSchema),
    userDetailsSchema = mongoose.model('user-details', userDetailsSchema),
};
