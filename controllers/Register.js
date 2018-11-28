'use strict';

var utils = require('../utils/writer.js');
var Register = require('../service/RegisterService');

module.exports.postRegisterRegisternumber = function postRegisterRegisternumber (req, res, next) {
  var body = req.swagger.params['body'].value;
  Register.postRegisterRegisternumber(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postRegisterValidatenumber = function postRegisterValidatenumber (req, res, next) {
  var body = req.swagger.params['body'].value;
  Register.postRegisterValidatenumber(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postRegisterValidatenumbersetuser = function postRegisterValidatenumbersetuser (req, res, next) {
  var body = req.swagger.params['body'].value;
  Register.postRegisterValidatenumbersetuser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
