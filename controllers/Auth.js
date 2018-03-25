'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.authLoginPost = function authLoginPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Auth.authLoginPost(body,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
