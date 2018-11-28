'use strict';

var utils = require('../utils/writer.js');
var Account = require('../service/AccountService');

module.exports.getAccountLogout = function getAccountLogout (req, res, next) {
  Account.getAccountLogout()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAccountUser = function getAccountUser (req, res, next) {
  Account.getAccountUser()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postAccountLogin = function postAccountLogin (req, res, next) {
  var body = req.swagger.params['body'].value;
  Account.postAccountLogin(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postAccountSignup = function postAccountSignup (req, res, next) {
  var body = req.swagger.params['body'].value;
  Account.postAccountSignup(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
