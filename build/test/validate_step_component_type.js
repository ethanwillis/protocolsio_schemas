'use strict';

var _StepComponentType = require('../schemas/StepComponentType');

var Validator = require('jsonschema').Validator;
var v = new Validator();

var sct = {
  "description": "<p>step to make smth</p>"
};

console.log(v.validate(sct, _StepComponentType.StepComponentType));