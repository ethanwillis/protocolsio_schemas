'use strict';

var _ProtocolsIOValidator = require('./ProtocolsIOValidator');

var _Comment = require('../schemas/Comment');

var assert = require('chai').assert;

var c1 = {
  "id": 16620,
  "parent_id": 0,
  "uri": "comment-on-step-1-of-untitled-protocol1",
  "title": "Comment on step 1 of untitled protocol",
  "body": "<p>Make if cool!</p>",
  "created_on": 1517933093,
  "changed_on": 0,
  "creator": {
    "name": "Lenny Teytelman",
    "affiliation": "protocols.io",
    "username": "lenny-teytelman",
    "link": null,
    "image": {
      "source": "/img/avatars/005.png",
      "placeholder": "/img/avatars/005.png"
    }
  }
};

var c2 = {
  "id": 16620,
  "parent_id": 0,
  "uri": "comment-on-step-1-of-untitled-protocol1",
  "title": "Comment on step 1 of untitled protocol",
  "body": "<p>Make if cool!</p>",
  "created_on": 1517933093,
  "changed_on": 0,
  "creator": {
    "name": "Lenny Teytelman",
    "affiliation": "protocols.io",
    "username": "lenny-teytelman",
    "link": null,
    "image": {
      "source": "/img/avatars/005.png",
      "placeholder": "/img/avatars/005.png"
    }
  },
  "comments": [{
    "id": 16621,
    "parent_id": 16620,
    "uri": "comment-on-step-1-of-untitled-protocol1",
    "title": "Comment on step 1 of untitled protocol",
    "body": "<p>Make if cool!</p>",
    "created_on": 1517933094,
    "changed_on": 0,
    "creator": {
      "name": "Lenny Teytelman",
      "affiliation": "protocols.io",
      "username": "lenny-teytelman",
      "link": null,
      "image": {
        "source": "/img/avatars/005.png",
        "placeholder": "/img/avatars/005.png"
      }
    }
  }]
};

describe('Comment validator', function () {
  describe('#validate()', function () {
    it('should return no errors when a valid object without threaded comments is passed in', function () {
      assert.lengthOf(_ProtocolsIOValidator.ProtocolsIOValidator.validate(c1, _Comment.Comment)['errors'], 0);
    });
    it('should return no errors when a valid object with threaded comments is passed in', function () {
      assert.lengthOf(_ProtocolsIOValidator.ProtocolsIOValidator.validate(c2, _Comment.Comment)['errors'], 0);
    });
  });
});