'use strict';

var url = require('url');


var Web = require('./WebService');


module.exports.getAppRoot = function getAppRoot (req, res, next) {
  Web.getAppRoot(req.swagger.params, res, next);
};
