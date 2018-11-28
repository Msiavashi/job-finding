'use strict';

var utils = require('../utils/writer.js');
var Search = require('../service/SearchService');

module.exports.getSearchComplexJobs = function getSearchComplexJobs (req, res, next) {
  var q = req.swagger.params['q'].value;
  var contractTypes = req.swagger.params['contractTypes'].value;
  Search.getSearchComplexJobs(q,contractTypes)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSearchSimpleJobs = function getSearchSimpleJobs (req, res, next) {
  var q = req.swagger.params['q'].value;
  Search.getSearchSimpleJobs(q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
