'use strict';

var _User = require('../schemas/User');

var Validator = require('jsonschema').Validator;
var v = new Validator();

var u = {
  "user": {
    "name": "Vladimir Frolov",
    "affiliation": null,
    "username": "vladimir-frolov10",
    "link": null,
    "image": {
      "source": "https://s3.amazonaws.com/pr-journal/djqbjf6.jpg",
      "placeholder": "https://s3.amazonaws.com/pr-journal/djqbjf6.jpg"
    }
  }
};

console.log(v.validate(u, _User.User));