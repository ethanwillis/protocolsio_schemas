'use strict';

var _ProtocolsIOValidator = require('./ProtocolsIOValidator');

var _User = require('../schemas/User');

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

console.log(_ProtocolsIOValidator.ProtocolsIOValidator.validate(u, _User.User));