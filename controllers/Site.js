'use strict';

var url = require('url');


var Site = require('./SiteService');


module.exports.getApiV1Categories = function getApiV1Categories (req, res, next) {
  Site.getApiV1Categories(req.swagger.params, res, next);
};

module.exports.getApiV1CategoryCidSkills = function getApiV1CategoryCidSkills (req, res, next) {
  Site.getApiV1CategoryCidSkills(req.swagger.params, res, next);
};

module.exports.getApiV1Countries = function getApiV1Countries (req, res, next) {
  Site.getApiV1Countries(req.swagger.params, res, next);
};

module.exports.getApiV1CountryCidStateSidCities = function getApiV1CountryCidStateSidCities (req, res, next) {
  Site.getApiV1CountryCidStateSidCities(req.swagger.params, res, next);
};

module.exports.getApiV1CountryCidStates = function getApiV1CountryCidStates (req, res, next) {
  Site.getApiV1CountryCidStates(req.swagger.params, res, next);
};

module.exports.getApiV1EmployerEidJobs = function getApiV1EmployerEidJobs (req, res, next) {
  Site.getApiV1EmployerEidJobs(req.swagger.params, res, next);
};

module.exports.getApiV1InstitutionIidJobs = function getApiV1InstitutionIidJobs (req, res, next) {
  Site.getApiV1InstitutionIidJobs(req.swagger.params, res, next);
};

module.exports.getApiV1Languages = function getApiV1Languages (req, res, next) {
  Site.getApiV1Languages(req.swagger.params, res, next);
};

module.exports.postApiV1Login = function postApiV1Login (req, res, next) {
  Site.postApiV1Login(req.swagger.params, res, next);
};

module.exports.postApiV1Register = function postApiV1Register (req, res, next) {
  Site.postApiV1Register(req.swagger.params, res, next);
};

module.exports.postApiV1UserUidLogout = function postApiV1UserUidLogout (req, res, next) {
  Site.postApiV1UserUidLogout(req.swagger.params, res, next);
};
