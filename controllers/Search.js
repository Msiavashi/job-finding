'use strict';

var url = require('url');


var Search = require('./SearchService');


module.exports.getApiV1SearchJobs = function getApiV1SearchJobs (req, res, next) {
  Search.getApiV1SearchJobs(req.swagger.params, res, next);
};
