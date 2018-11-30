'use strict';

var url = require('url');


var Employer = require('./EmployerService');


module.exports.deleteApiV1EmployerEidProfileImage = function deleteApiV1EmployerEidProfileImage (req, res, next) {
  Employer.deleteApiV1EmployerEidProfileImage(req.swagger.params, res, next);
};

module.exports.getApiV1EmployerEidJobJid = function getApiV1EmployerEidJobJid (req, res, next) {
  Employer.getApiV1EmployerEidJobJid(req.swagger.params, res, next);
};

module.exports.getApiV1EmployerEidProfile = function getApiV1EmployerEidProfile (req, res, next) {
  Employer.getApiV1EmployerEidProfile(req.swagger.params, res, next);
};

module.exports.getApiV1EmployerEidProfileImage = function getApiV1EmployerEidProfileImage (req, res, next) {
  Employer.getApiV1EmployerEidProfileImage(req.swagger.params, res, next);
};

module.exports.patchApiV1EmployerEidJobJid = function patchApiV1EmployerEidJobJid (req, res, next) {
  Employer.patchApiV1EmployerEidJobJid(req.swagger.params, res, next);
};

module.exports.patchApiV1EmployerEidProfile = function patchApiV1EmployerEidProfile (req, res, next) {
  Employer.patchApiV1EmployerEidProfile(req.swagger.params, res, next);
};

module.exports.patchApiV1EmployerEidProfileImage = function patchApiV1EmployerEidProfileImage (req, res, next) {
  Employer.patchApiV1EmployerEidProfileImage(req.swagger.params, res, next);
};

module.exports.postApiV1EmployerEidJob = function postApiV1EmployerEidJob (req, res, next) {
  Employer.postApiV1EmployerEidJob(req.swagger.params, res, next);
};
