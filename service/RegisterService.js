'use strict';


/**
 * Register Phone Number
 *
 * body Model 15  (optional)
 * returns String
 **/
exports.postRegisterRegisternumber = function(body) {
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
 * Validate Registered Number
 *
 * body Model 16  (optional)
 * returns String
 **/
exports.postRegisterValidatenumber = function(body) {
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
 * Validate Registered Number and set user 
 *
 * body Model 17  (optional)
 * returns String
 **/
exports.postRegisterValidatenumbersetuser = function(body) {
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

