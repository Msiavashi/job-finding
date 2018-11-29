// mongoose
const mongoose = require('mongoose');

// destructure Schema from mongoose
const Schema = mongoose.Schema;

// resume-details
const adminSchema = new Schema({
    username: String,
    password: String,
    email: String,
    name: String,
    surname: String,
    nameFa: String,
    surnameFa: String,
    isAdmin: Boolean,
}, {
    timestamps: true,
});

/**
 * We can Add Bcrypt for hashing password 
 */

module.exports = {
    adminSchema = mongoose.model('Admin', adminSchema)
};
