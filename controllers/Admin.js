'use strict';

var utils = require('../utils/writer.js');
var Admin = require('../service/AdminService');

module.exports.deleteAdminDeletedocuments = function deleteAdminDeletedocuments (req, res, next) {
  var body = req.swagger.params['body'].value;
  Admin.deleteAdminDeletedocuments(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAdminDropdb = function deleteAdminDropdb (req, res, next) {
  Admin.deleteAdminDropdb()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAdminCompanies = function getAdminCompanies (req, res, next) {
  Admin.getAdminCompanies()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAdminUserresumeUserid = function getAdminUserresumeUserid (req, res, next) {
  Admin.getAdminUserresumeUserid()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAdminUsers = function getAdminUsers (req, res, next) {
  Admin.getAdminUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postAdminGetdocuments = function postAdminGetdocuments (req, res, next) {
  var body = req.swagger.params['body'].value;
  Admin.postAdminGetdocuments(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
