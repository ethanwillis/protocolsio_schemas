'use strict';

var _ProtocolsIOValidator = require('./ProtocolsIOValidator');

var _Step = require('../schemas/Step');

var assert = require('chai').assert;

var s = {
  "id": 595209,
  "guid": "E70FDFE632504ADFB0ED519ABB5449B1",
  "previous_id": 0,
  "previous_guid": null,
  "modified_on": 1517933242,
  "components": [{
    "id": 1023444,
    "guid": "A38362CBC954458FB069F821B6526B38",
    "previous_id": 1023443,
    "previous_guid": "1EBCBC24EFCF429F8F34D7099EF6211E",
    "type_id": 3,
    "title": "Amount"
  }]
};

describe('Step validator', function () {
  describe('#validate()', function () {
    it('should return no errors when a valid step object is passed in', function () {
      assert.lengthOf(_ProtocolsIOValidator.ProtocolsIOValidator.validate(s, _Step.Step)['errors'], 0);
    });
  });
});