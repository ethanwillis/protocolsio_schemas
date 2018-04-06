'use strict';

var _Image = require('../schemas/Image');

var Validator = require('jsonschema').Validator;
var v = new Validator();

var i = {
    "image": {
        "source": "https://www.protocols.io/img/default_protocol.png",
        "placeholder": "https://www.protocols.io/img/default_protocol.png"
    }
};

console.log(v.validate(i, _Image.Image));