import { Step } from '../schemas/Step';

let Validator = require('jsonschema').Validator;
let v = new Validator();

let s = {
  "id": 595209,
  "guid": "E70FDFE632504ADFB0ED519ABB5449B1",
  "previous_id": 0,
  "previous_guid": null,
  "modified_on": 1517933242,
  "components": [{
    "id": 1023444,
    "guid": "A38362CBC954458FB069F821B6526B38",
    "previous_id": 1023443,
    "previous_guid": "1EBCBC24EFCF429F8F34D7099EF6211E",
    "type_id": 3,
    "title": "Amount"
  }]
}

console.log(v.validate(s, Step));
