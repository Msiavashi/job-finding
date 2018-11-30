'use strict';

exports.deleteApiV1EmployerEidInstitutionEid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eid (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getApiV1EmployerEidInstitutionEid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eid (String)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.patchApiV1EmployerEidInstitutionEid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eid (String)
  * body (AnonymousRepresentation67)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postApiV1ApplicantAidInstitution = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aid (String)
  * body (AnonymousRepresentation73)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postApiV1EmployerEidInstitution = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eid (String)
  * body (AnonymousRepresentation61)
  **/
    var examples = {};
  examples['application/json'] = { };
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

