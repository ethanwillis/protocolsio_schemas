import { ProtocolsIOValidator } from './ProtocolsIOValidator'
import { Reagent } from '../schemas/Reagent';
var assert = require('chai').assert;

let r = {
  "id": 19751,
  "mol_weight": 0,
  "name": "2 mg Gastrin I, human",
  "linfor": "C130H204N38O31S",
  "url": "https://www.biorbyt.com/gastrin-i-human-orb321073",
  "sku": "orb321073",
  "vendor": {
    "name": "biorbyt",
    "affiliation": null,
    "username": null,
    "link": "https://www.biorbyt.com/",
    "image": {
      "source": "http://je-protocols/img/vendors/208.png",
      "placeholder": "http://je-protocols/img/vendors/208.png"
    }
  }
}

describe('Reagent validator', function() {
    describe('#validate()', function() {
	it('should return no errors when a valid reagent object is passed in', function() {
	    assert.lengthOf((ProtocolsIOValidator.validate(r, Reagent))['errors'], 0);
	});
    });
});
