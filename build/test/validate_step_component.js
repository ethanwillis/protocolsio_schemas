'use strict';

var _ProtocolsIOValidator = require('./ProtocolsIOValidator');

var _StepComponent = require('../schemas/StepComponent');

var assert = require('chai').assert;

/*
 Create all test input objects for both valid and invalid cases.
*/

// Valid Cases
var sc1_valid = {
  "id": 1023444,
  "guid": "A38362CBC954458FB069F821B6526B38",
  "previous_id": 1023443,
  "previous_guid": "1EBCBC24EFCF429F8F34D7099EF6211E",
  "type_id": 1,
  "title": "Description",
  "source": {
    "description": "<p>step to make smth</p>"
  }
};

var sc2_valid = {
  "id": 1023444,
  "guid": "A38362CBC954458FB069F821B6526B38",
  "previous_id": 1023443,
  "previous_guid": "1EBCBC24EFCF429F8F34D7099EF6211E",
  "type_id": 3,
  "title": "Amount",
  "source": {
    "amount": 11,
    "unit": "µl",
    "title": "of MGH"
  }
};

describe('Step Component validator', function () {
  describe('#validate', function () {
    it('should return no errors when a step component object with a source containing a description is passed in', function () {
      assert.lengthOf(_ProtocolsIOValidator.ProtocolsIOValidator.validate(sc1_valid, _StepComponent.StepComponent)['errors'], 0);
    });
    it('should return no errors when a step component object with a source containing other things is passed in', function () {
      assert.lengthOf(_ProtocolsIOValidator.ProtocolsIOValidator.validate(sc2_valid, _StepComponent.StepComponent)['errors'], 0);
    });
  });
});