'use strict';

var utils = require('../utils/writer.js');
var Api = require('../service/ApiService');

module.exports.getApiV1Paintings = function getApiV1Paintings (req, res, next) {
  Api.getApiV1Paintings()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postApiV1Paintings = function postApiV1Paintings (req, res, next) {
  Api.postApiV1Paintings()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
