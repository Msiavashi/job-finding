'use strict';

var utils = require('../utils/writer.js');
var Profile = require('../service/ProfileService');

module.exports.getProfileProfileimage = function getProfileProfileimage (req, res, next) {
  var responseType = req.swagger.params['responseType'].value;
  Profile.getProfileProfileimage(responseType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postProfileProfileimage = function postProfileProfileimage (req, res, next) {
  var data = req.swagger.params['data'].value;
  Profile.postProfileProfileimage(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postProfileRecruiterdata = function postProfileRecruiterdata (req, res, next) {
  var body = req.swagger.params['body'].value;
  Profile.postProfileRecruiterdata(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postProfileUserdata = function postProfileUserdata (req, res, next) {
  var body = req.swagger.params['body'].value;
  Profile.postProfileUserdata(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putProfileProfiletypeProfile_type = function putProfileProfiletypeProfile_type (req, res, next) {
  var profile_type = req.swagger.params['profile_type'].value;
  Profile.putProfileProfiletypeProfile_type(profile_type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
