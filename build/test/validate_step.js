'use strict';

var _ProtocolsIOValidator = require('./ProtocolsIOValidator');

var _Step = require('../schemas/Step');

var assert = require('chai').assert;

var s1_valid = {
  "id": 595209,
  "guid": "E70FDFE632504ADFB0ED519ABB5449B1",
  "previous_id": 0,
  "previous_guid": null,
  "modified_on": 1517933242,
  "components": [{
    "id": 1023444,
    "guid": "A38362CBC954458FB069F821B6526B38",
    "order_id": 1,
    "type_id": 1,
    "title": "Description",
    "source": {
      "description": "<p>step to make smth</p>"
    }
  }]
};

describe('Step validator', function () {
  describe('#validate()', function () {
    it('should return no errors when a valid step object is passed in', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(s1_valid, _Step.Step);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });
  });
});