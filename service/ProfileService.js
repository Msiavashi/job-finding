'use strict';


/**
 * Get Profile Image
 *
 * responseType String 
 * returns String
 **/
exports.getProfileProfileimage = function(responseType) {
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
 * Upload Profile Image
 *
 * data File Select a file to upload
 * returns String
 **/
exports.postProfileProfileimage = function(data) {
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
 * Store Recruiter Profile Data
 *
 * body Model 13  (optional)
 * returns String
 **/
exports.postProfileRecruiterdata = function(body) {
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
 * Store Primary Profile Data
 *
 * body Model 14  (optional)
 * returns String
 **/
exports.postProfileUserdata = function(body) {
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
 * Set Profile Type (Recruiter / Recruitee)
 *
 * profile_type String 
 * returns String
 **/
exports.putProfileProfiletypeProfile_type = function(profile_type) {
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

