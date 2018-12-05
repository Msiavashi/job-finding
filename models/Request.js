// Mongoose
const mongoose = require('mongoose');

// Destructure Schema From Mongoose
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },

    jobPosition: [{
        type: Schema.Types.ObjectId,
        ref: 'job-position',
    }],




});


module.exports = {
    RequestSchema = mongoose.model('request', RequestSchema),
};