// mongoose
const mongoose = require('mongoose');

// destructure Schema from mongoose
const {
    Schema
} = mongoose;

// resume-details
const millitaryServiceSchema = new Schema({
    resume: [{
        type: Schema.Types.ObjectId,
        ref: 'resume-details',
    }],
});

module.exports = {
    millitaryServiceSchema = mongoose.model('military-service', millitaryServiceSchema),
};
