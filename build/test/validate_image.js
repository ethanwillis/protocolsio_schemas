'use strict';

var _ProtocolsIOValidator = require('./ProtocolsIOValidator');

var _Image = require('../schemas/Image');

var assert = require('chai').assert;

var i = {
    "image": {
        "source": "https://www.protocols.io/img/default_protocol.png",
        "placeholder": "https://www.protocols.io/img/default_protocol.png"
    }
};

describe('Image validator', function () {
    describe('#validate()', function () {
        it('should return no errors when a valid object is passed in', function () {
            assert.lengthOf(_ProtocolsIOValidator.ProtocolsIOValidator.validate(i, _Image.Image)['errors'], 0);
        });
    });
});