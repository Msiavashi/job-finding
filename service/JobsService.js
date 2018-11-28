'use strict';


/**
 * Find Jobs Of A Company
 *
 * company String 
 * returns String
 **/
exports.getJobsCompany = function(company) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Post A New Job
 *
 * body Model 12  (optional)
 * returns String
 **/
exports.postJobsNewjob = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

