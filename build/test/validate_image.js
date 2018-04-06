'use strict';

var _ProtocolsIOValidator = require('./ProtocolsIOValidator');

var _Image = require('../schemas/Image');

var i = {
    "image": {
        "source": "https://www.protocols.io/img/default_protocol.png",
        "placeholder": "https://www.protocols.io/img/default_protocol.png"
    }
};

console.log(_ProtocolsIOValidator.ProtocolsIOValidator.validate(i, _Image.Image));