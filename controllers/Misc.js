'use strict';

var utils = require('../utils/writer.js');
var Misc = require('../service/MiscService');

module.exports.post5ab53032633d761b496bc34cGet2 = function post5ab53032633d761b496bc34cGet2 (req, res, next) {
  Misc.post5ab53032633d761b496bc34cGet2()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userGet = function userGet (req, res, next) {
  var username = req.swagger.params['username'].value;
  var location = req.swagger.params['location'].value;
  Misc.userGet(username,location)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
