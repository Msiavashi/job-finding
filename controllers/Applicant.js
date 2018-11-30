'use strict';

var url = require('url');


var Applicant = require('./ApplicantService');


module.exports.deleteApiV1ApplicantAidProfileImage = function deleteApiV1ApplicantAidProfileImage (req, res, next) {
  Applicant.deleteApiV1ApplicantAidProfileImage(req.swagger.params, res, next);
};

module.exports.getApiV1ApplicantAidApplies = function getApiV1ApplicantAidApplies (req, res, next) {
  Applicant.getApiV1ApplicantAidApplies(req.swagger.params, res, next);
};

module.exports.getApiV1ApplicantAidProfile = function getApiV1ApplicantAidProfile (req, res, next) {
  Applicant.getApiV1ApplicantAidProfile(req.swagger.params, res, next);
};

module.exports.getApiV1ApplicantAidProfileImage = function getApiV1ApplicantAidProfileImage (req, res, next) {
  Applicant.getApiV1ApplicantAidProfileImage(req.swagger.params, res, next);
};

module.exports.patchApiV1ApplicantAidProfile = function patchApiV1ApplicantAidProfile (req, res, next) {
  Applicant.patchApiV1ApplicantAidProfile(req.swagger.params, res, next);
};

module.exports.patchApiV1ApplicantAidProfileImage = function patchApiV1ApplicantAidProfileImage (req, res, next) {
  Applicant.patchApiV1ApplicantAidProfileImage(req.swagger.params, res, next);
};

module.exports.postApiV1ApplicantAidJobJidApply = function postApiV1ApplicantAidJobJidApply (req, res, next) {
  Applicant.postApiV1ApplicantAidJobJidApply(req.swagger.params, res, next);
};
