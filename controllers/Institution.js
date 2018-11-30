'use strict';

var url = require('url');


var Institution = require('./InstitutionService');


module.exports.deleteApiV1EmployerEidInstitutionEid = function deleteApiV1EmployerEidInstitutionEid (req, res, next) {
  Institution.deleteApiV1EmployerEidInstitutionEid(req.swagger.params, res, next);
};

module.exports.getApiV1EmployerEidInstitutionEid = function getApiV1EmployerEidInstitutionEid (req, res, next) {
  Institution.getApiV1EmployerEidInstitutionEid(req.swagger.params, res, next);
};

module.exports.patchApiV1EmployerEidInstitutionEid = function patchApiV1EmployerEidInstitutionEid (req, res, next) {
  Institution.patchApiV1EmployerEidInstitutionEid(req.swagger.params, res, next);
};

module.exports.postApiV1ApplicantAidInstitution = function postApiV1ApplicantAidInstitution (req, res, next) {
  Institution.postApiV1ApplicantAidInstitution(req.swagger.params, res, next);
};

module.exports.postApiV1EmployerEidInstitution = function postApiV1EmployerEidInstitution (req, res, next) {
  Institution.postApiV1EmployerEidInstitution(req.swagger.params, res, next);
};
