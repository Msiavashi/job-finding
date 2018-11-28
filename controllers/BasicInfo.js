'use strict';

var utils = require('../utils/writer.js');
var BasicInfo = require('../service/BasicInfoService');

module.exports.deleteBasicinfoCitiesCityid = function deleteBasicinfoCitiesCityid (req, res, next) {
  var cityid = req.swagger.params['cityid'].value;
  BasicInfo.deleteBasicinfoCitiesCityid(cityid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBasicinfoCountriesCountryid = function deleteBasicinfoCountriesCountryid (req, res, next) {
  var countryid = req.swagger.params['countryid'].value;
  BasicInfo.deleteBasicinfoCountriesCountryid(countryid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBasicinfoLanguagesLanguageid = function deleteBasicinfoLanguagesLanguageid (req, res, next) {
  var languageid = req.swagger.params['languageid'].value;
  BasicInfo.deleteBasicinfoLanguagesLanguageid(languageid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBasicinfoSkillsSkillid = function deleteBasicinfoSkillsSkillid (req, res, next) {
  var skillid = req.swagger.params['skillid'].value;
  BasicInfo.deleteBasicinfoSkillsSkillid(skillid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBasicinfoSkillscategoryCategoryid = function deleteBasicinfoSkillscategoryCategoryid (req, res, next) {
  var categoryid = req.swagger.params['categoryid'].value;
  BasicInfo.deleteBasicinfoSkillscategoryCategoryid(categoryid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBasicinfoStatesStateid = function deleteBasicinfoStatesStateid (req, res, next) {
  var stateid = req.swagger.params['stateid'].value;
  BasicInfo.deleteBasicinfoStatesStateid(stateid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBasicinfoCitiesStateid = function getBasicinfoCitiesStateid (req, res, next) {
  var stateid = req.swagger.params['stateid'].value;
  BasicInfo.getBasicinfoCitiesStateid(stateid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBasicinfoCountries = function getBasicinfoCountries (req, res, next) {
  BasicInfo.getBasicinfoCountries()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBasicinfoCountriesandstates = function getBasicinfoCountriesandstates (req, res, next) {
  BasicInfo.getBasicinfoCountriesandstates()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBasicinfoCountriesandstatesandcities = function getBasicinfoCountriesandstatesandcities (req, res, next) {
  BasicInfo.getBasicinfoCountriesandstatesandcities()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBasicinfoLanguages = function getBasicinfoLanguages (req, res, next) {
  BasicInfo.getBasicinfoLanguages()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBasicinfoSkillsCategoryid = function getBasicinfoSkillsCategoryid (req, res, next) {
  var categoryid = req.swagger.params['categoryid'].value;
  BasicInfo.getBasicinfoSkillsCategoryid(categoryid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBasicinfoSkillsandcategories = function getBasicinfoSkillsandcategories (req, res, next) {
  BasicInfo.getBasicinfoSkillsandcategories()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBasicinfoSkillscategory = function getBasicinfoSkillscategory (req, res, next) {
  BasicInfo.getBasicinfoSkillscategory()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBasicinfoStatesCountryid = function getBasicinfoStatesCountryid (req, res, next) {
  var countryid = req.swagger.params['countryid'].value;
  BasicInfo.getBasicinfoStatesCountryid(countryid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBasicinfoStatesandcities = function getBasicinfoStatesandcities (req, res, next) {
  BasicInfo.getBasicinfoStatesandcities()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postBasicinfoCategorynameCategoryid = function postBasicinfoCategorynameCategoryid (req, res, next) {
  var categoryid = req.swagger.params['categoryid'].value;
  BasicInfo.postBasicinfoCategorynameCategoryid(categoryid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postBasicinfoCities = function postBasicinfoCities (req, res, next) {
  var body = req.swagger.params['body'].value;
  BasicInfo.postBasicinfoCities(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postBasicinfoCountries = function postBasicinfoCountries (req, res, next) {
  var body = req.swagger.params['body'].value;
  BasicInfo.postBasicinfoCountries(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postBasicinfoLanguages = function postBasicinfoLanguages (req, res, next) {
  var body = req.swagger.params['body'].value;
  BasicInfo.postBasicinfoLanguages(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postBasicinfoLocationnameId = function postBasicinfoLocationnameId (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  BasicInfo.postBasicinfoLocationnameId(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postBasicinfoSkills = function postBasicinfoSkills (req, res, next) {
  var body = req.swagger.params['body'].value;
  BasicInfo.postBasicinfoSkills(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postBasicinfoSkillscategory = function postBasicinfoSkillscategory (req, res, next) {
  var body = req.swagger.params['body'].value;
  BasicInfo.postBasicinfoSkillscategory(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postBasicinfoStates = function postBasicinfoStates (req, res, next) {
  var body = req.swagger.params['body'].value;
  BasicInfo.postBasicinfoStates(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
