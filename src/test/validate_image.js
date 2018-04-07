import { ProtocolsIOValidator } from './ProtocolsIOValidator'
import { Image } from '../schemas/Image';
var assert = require('chai').assert;


let i = {
    "image": {
        "source": "https://www.protocols.io/img/default_protocol.png",
        "placeholder": "https://www.protocols.io/img/default_protocol.png"
    }
};

describe('Image validator', function() {
    describe('#validate()', function() {
	it('should return no errors when a valid object is passed in', function() {
	    assert.lengthOf((ProtocolsIOValidator.validate(i, Image))['errors'], 0);
	});
    });
});
