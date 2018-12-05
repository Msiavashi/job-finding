// mongoose
const mongoose = require('mongoose');

// destructure Schema from mongoose
const {
    Schema
} = mongoose;

// resume-details
const personalInformationSchema = new Schema({
    resume: {
        type: Schema.Types.ObjectId,
        ref: 'resume-details',
    },
});

module.exports = {
    personalInformationSchema = mongoose.model('personal-information', personalInformationSchema),
};
