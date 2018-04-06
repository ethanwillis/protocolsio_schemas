import { StepComponent } from '../schemas/StepComponent';

let Validator = require('jsonschema').Validator;
let v = new Validator();

let sc1 = {
  "id": 1023444,
  "guid": "A38362CBC954458FB069F821B6526B38",
  "previous_id": 1023443,
  "previous_guid": "1EBCBC24EFCF429F8F34D7099EF6211E",
  "type_id": 3,
  "title": "Amount"
}

let sc2 = {
  "id": 1023444,
  "guid": "A38362CBC954458FB069F821B6526B38",
  "previous_id": 1023443,
  "previous_guid": "1EBCBC24EFCF429F8F34D7099EF6211E",
  "type_id": 3,
  "title": "Amount",
  "source": {
 	 "id": 1023445,
	  "guid": "A38362CBC954458FB069F821B6526B39",
	  "previous_id": 1023443,
	  "previous_guid": "1EBCBC24EFCF429F8F34D7099EF6211E",
	  "type_id": 3,
	  "title": "Amount"
  }
};

console.log(v.validate(sc1, StepComponent))
console.log(v.validate(sc2, StepComponent))
