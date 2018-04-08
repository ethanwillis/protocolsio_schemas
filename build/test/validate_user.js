'use strict';

var _ProtocolsIOValidator = require('./ProtocolsIOValidator');

var _User = require('../schemas/User');

var assert = require('chai').assert;

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

describe('User validator', function () {
  describe('#validate()', function () {
    it('should return no errors when a valid user object is passed in', function () {
      assert.lengthOf(_ProtocolsIOValidator.ProtocolsIOValidator.validate(u, _User.User)['errors'], 0);
    });
  });
});