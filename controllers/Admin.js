'use strict';

var url = require('url');


var Admin = require('./AdminService');


module.exports.getApiV1Institutions = function getApiV1Institutions (req, res, next) {
  Admin.getApiV1Institutions(req.swagger.params, res, next);
};

module.exports.getApiV1Users = function getApiV1Users (req, res, next) {
  Admin.getApiV1Users(req.swagger.params, res, next);
};
