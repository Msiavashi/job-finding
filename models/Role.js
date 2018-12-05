// Mongoose
const mongoose = require('mongoose');

// Destructure Schema From Mongoose
const Schema = mongoose.Schema;

// User Schema
const roleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    

});


module.exports = {
    roleSchema = mongoose.model('role', roleSchema),
};
