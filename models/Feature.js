// Mongoose
const mongoose = require('mongoose');

// Destructure Schema From Mongoose
const Schema = mongoose.Schema;

// User Schema
const featureSchema = new Schema({
    jobPosition: [{
        type: Schema.Types.ObjectId,
        ref: 'job-position',
    }],
    

});


module.exports = {
    featureSchema = mongoose.model('feature', featureSchema),
};
