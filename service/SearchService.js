'use strict';


/**
 * Return A List Of Jobs Based On Query [Complex Search]
 *
 * q String 
 * contractTypes String  (optional)
 * returns String
 **/
exports.getSearchComplexJobs = function(q,contractTypes) {
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
 * Return A List Of Jobs Based On Query [Simple Search]
 *
 * q String 
 * returns String
 **/
exports.getSearchSimpleJobs = function(q) {
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

