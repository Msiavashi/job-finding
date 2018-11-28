'use strict';

var utils = require('../utils/writer.js');
var ResumeCreator = require('../service/ResumeCreatorService');

module.exports.getResumecreatorResume = function getResumecreatorResume (req, res, next) {
  ResumeCreator.getResumecreatorResume()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getResumecreatorStepfive = function getResumecreatorStepfive (req, res, next) {
  ResumeCreator.getResumecreatorStepfive()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getResumecreatorStepfour = function getResumecreatorStepfour (req, res, next) {
  ResumeCreator.getResumecreatorStepfour()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getResumecreatorStepone = function getResumecreatorStepone (req, res, next) {
  ResumeCreator.getResumecreatorStepone()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getResumecreatorStepthree = function getResumecreatorStepthree (req, res, next) {
  ResumeCreator.getResumecreatorStepthree()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getResumecreatorSteptwo = function getResumecreatorSteptwo (req, res, next) {
  ResumeCreator.getResumecreatorSteptwo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postResumecreatorStepfive = function postResumecreatorStepfive (req, res, next) {
  var body = req.swagger.params['body'].value;
  ResumeCreator.postResumecreatorStepfive(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postResumecreatorStepfour = function postResumecreatorStepfour (req, res, next) {
  var body = req.swagger.params['body'].value;
  ResumeCreator.postResumecreatorStepfour(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postResumecreatorStepone = function postResumecreatorStepone (req, res, next) {
  var body = req.swagger.params['body'].value;
  ResumeCreator.postResumecreatorStepone(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postResumecreatorStepthree = function postResumecreatorStepthree (req, res, next) {
  var body = req.swagger.params['body'].value;
  ResumeCreator.postResumecreatorStepthree(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postResumecreatorSteptwo = function postResumecreatorSteptwo (req, res, next) {
  var body = req.swagger.params['body'].value;
  ResumeCreator.postResumecreatorSteptwo(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
