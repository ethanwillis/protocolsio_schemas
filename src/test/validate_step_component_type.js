import { StepComponentType } from '../schemas/StepComponentType';

let Validator = require('jsonschema').Validator;
let v = new Validator();

let sct = {
  "description": "<p>step to make smth</p>"
}

console.log(v.validate(sct, StepComponentType));
