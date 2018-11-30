'use strict';

exports.deleteApiV1ApplicantAidProfileImage = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aid (String)
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

exports.getApiV1ApplicantAidApplies = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aid (String)
  * pagenum (Double)
  * pagesize (Double)
  **/
    var examples = {};
  examples['application/json'] = [ { } ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getApiV1ApplicantAidProfile = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aid (String)
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

exports.getApiV1ApplicantAidProfileImage = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aid (String)
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

exports.patchApiV1ApplicantAidProfile = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aid (String)
  * body (AnonymousRepresentation)
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

exports.patchApiV1ApplicantAidProfileImage = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aid (String)
  * body (AnonymousRepresentation11)
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

exports.postApiV1ApplicantAidJobJidApply = function(args, res, next) {
  /**
   * parameters expected in the args:
  * aid (String)
  * jid (String)
  * body (AnonymousRepresentation14)
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

