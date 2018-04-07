import { ProtocolsIOValidator } from './ProtocolsIOValidator'
import { User } from '../schemas/User';
var assert = require('chai').assert;

let u = {
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
}

describe('User validator', function() {
    describe('#validate()', function() {
	it('should return no errors when a valid user object is passed in', function() {
	    assert.lengthOf((ProtocolsIOValidator.validate(u, User))['errors'], 0);
	});
    });
});
