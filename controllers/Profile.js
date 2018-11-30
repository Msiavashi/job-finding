'use strict';

var url = require('url');


var Profile = require('./ProfileService');


module.exports.deleteApiV1UserUidProfileImage = function deleteApiV1UserUidProfileImage (req, res, next) {
  Profile.deleteApiV1UserUidProfileImage(req.swagger.params, res, next);
};

module.exports.getApiV1UserUidProfile = function getApiV1UserUidProfile (req, res, next) {
  Profile.getApiV1UserUidProfile(req.swagger.params, res, next);
};

module.exports.getApiV1UserUidProfileImage = function getApiV1UserUidProfileImage (req, res, next) {
  Profile.getApiV1UserUidProfileImage(req.swagger.params, res, next);
};

module.exports.patchApiV1UserUidProfile = function patchApiV1UserUidProfile (req, res, next) {
  Profile.patchApiV1UserUidProfile(req.swagger.params, res, next);
};

module.exports.postApiV1UserUidProfileImage = function postApiV1UserUidProfileImage (req, res, next) {
  Profile.postApiV1UserUidProfileImage(req.swagger.params, res, next);
};
