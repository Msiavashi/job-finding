'use strict';

exports.getApiV1SearchJobs = function(args, res, next) {
  /**
   * parameters expected in the args:
  * query (String)
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

