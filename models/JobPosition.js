// mongoose
const mongoose = require('mongoose');

// destructure schema from mongoose
const Schema = mongoose.Schema;

const jobPositionSchema = new Schema({
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'user',
    }],

    request: {
        type: Schema.Types.ObjectId,
        ref: 'request',
    },

    institution: [{
        type: Schema.Types.ObjectId,
        ref: 'institution',
    }],

    skill: [{
        type: Schema.Types.ObjectId,
        ref: 'skill',
    }],

    feature: [{
        type: Schema.Types.ObjectId,
        ref: 'feature',
    }],
});

module.exports = {
    jobPositionSchema = mongoose.model('job-position', jobPositionSchema),
};
