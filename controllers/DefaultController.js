'use strict';

var utils = require('../utils/writer.js');
var DefaultController = require('../service/DefaultControllerService');

module.exports.get = function get (req, res, next) {
  DefaultController.get()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
