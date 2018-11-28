'use strict';

var utils = require('../utils/writer.js');
var Test = require('../service/TestService');

module.exports.getTestTestauthentication = function getTestTestauthentication (req, res, next) {
  Test.getTestTestauthentication()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postTestValidations = function postTestValidations (req, res, next) {
  var body = req.swagger.params['body'].value;
  Test.postTestValidations(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
