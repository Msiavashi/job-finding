'use strict';

var utils = require('../utils/writer.js');
var Jobs = require('../service/JobsService');

module.exports.getJobsCompany = function getJobsCompany (req, res, next) {
  var company = req.swagger.params['company'].value;
  Jobs.getJobsCompany(company)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postJobsNewjob = function postJobsNewjob (req, res, next) {
  var body = req.swagger.params['body'].value;
  Jobs.postJobsNewjob(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
