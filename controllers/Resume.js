'use strict';

var url = require('url');


var Resume = require('./ResumeService');


module.exports.deleteApiV1UserUidResume = function deleteApiV1UserUidResume (req, res, next) {
  Resume.deleteApiV1UserUidResume(req.swagger.params, res, next);
};

module.exports.getApiV1UserUidResume = function getApiV1UserUidResume (req, res, next) {
  Resume.getApiV1UserUidResume(req.swagger.params, res, next);
};

module.exports.patchApiV1UserUidResume = function patchApiV1UserUidResume (req, res, next) {
  Resume.patchApiV1UserUidResume(req.swagger.params, res, next);
};

module.exports.postApiV1UserUidResume = function postApiV1UserUidResume (req, res, next) {
  Resume.postApiV1UserUidResume(req.swagger.params, res, next);
};
