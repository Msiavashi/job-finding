// mongoose
const mongoose = require('mongoose');

// destructure Schema from mongoose
const {
    Schema
} = mongoose;

// resume-details
const SpeakingLanguageSchema = new Schema({
    resume: [{
        type: Schema.Types.ObjectId,
        ref: 'resume-details',
    }],
    
    languageLevel: {
        type: Schema.Types.ObjectId,
        ref: 'language-level',

    }
});

module.exports = {
    SpeakingLanguageSchema = mongoose.model('speaking-language', SpeakingLanguageSchema),
};