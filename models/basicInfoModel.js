// mongoose
const mongoose = require('mongoose');

// destructure Schema from mongoose
const Schema = mongoose.Schema;

// languages
const languagesSchema = new Schema({
    languageName: String,
    languageNameFa: String,
}, {
    timestamps: true,
});

// resume-details
const skillCategoriesSchema = new Schema({
    categoryName: String,
    categoryNameFa: String,
}, {
    timestamps: true,
});

const skillsSchema = new Schema({
    skillCategoryId: {
        type: Schema.Types.ObjectId,
        ref: 'skill-categories',
    },
    skillName: String,
    skillNameFa: String,
}, {
    timestamps: true,
});

const countriesSchema = new Schema({
    countryName: String,
    countryNameFa: String,
    states: {
        type: Schema.Types.ObjectId,
        ref: 'states',
    }
}, {
    timestamps: true,
});

const statesSchema = new Schema({
    countryId: {
        type: Schema.Types.ObjectId,
        ref: 'countries',
    },
    stateName: String,
    stateNameFa: String,
}, {
    timestamps: true,
});

const citiesSchema = new Schema({
    stateId: {
        type: Schema.Types.ObjectId,
        ref: 'states',
    },
    cityName: String,
    cityNameFa: String,
}, {
    timestamps: true,
});


module.exports = {
    countriesSchema = mongoose.model('countries', countriesSchema),
    statesSchema = mongoose.model('states', statesSchema),
    citiesSchema = mongoose.model('cities', citiesSchema),
    skillsSchema = mongoose.model('skills', skillsSchema),
    skillCategoriesSchema = mongoose.model('skill-categories', skillCategoriesSchema),
    languagesSchema = mongoose.model('languages', languagesSchema)
};
