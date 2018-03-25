'use strict';

var utils = require('../utils/writer.js');
var Posts = require('../service/PostsService');

module.exports.post5ab52232d28be4ca7d30a324TaggedUserGet = function post5ab52232d28be4ca7d30a324TaggedUserGet (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var skip = req.swagger.params['skip'].value;
  Posts.post5ab52232d28be4ca7d30a324TaggedUserGet(limit,skip)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post5ab53032633d761b496bc34cActivatePut = function post5ab53032633d761b496bc34cActivatePut (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Posts.post5ab53032633d761b496bc34cActivatePut(body,xAccessToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post5ab53032633d761b496bc34cDeactivatePut = function post5ab53032633d761b496bc34cDeactivatePut (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Posts.post5ab53032633d761b496bc34cDeactivatePut(body,xAccessToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post5ab53032633d761b496bc34cPut = function post5ab53032633d761b496bc34cPut (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Posts.post5ab53032633d761b496bc34cPut(body,xAccessToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postGet = function postGet (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var skip = req.swagger.params['skip'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Posts.postGet(limit,skip,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postPost = function postPost (req, res, next) {
  var body = req.swagger.params['Body'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var contentType = req.swagger.params['Content-Type'].value;
  Posts.postPost(body,xAccessToken,contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
