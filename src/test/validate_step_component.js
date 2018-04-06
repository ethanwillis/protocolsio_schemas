import { ProtocolsIOValidator } from './ProtocolsIOValidator'
import { StepComponent } from '../schemas/StepComponent';

/*
 Create all test input objects for both valid and invalid cases.
*/

// Valid Cases
let sc1_valid = {
  "id": 1023444,
  "guid": "A38362CBC954458FB069F821B6526B38",
  "previous_id": 1023443,
  "previous_guid": "1EBCBC24EFCF429F8F34D7099EF6211E",
  "type_id": 1,
  "title": "Description",
  "source": {
    "description": "<p>step to make smth</p>"
  }
}

let sc2_valid = {
  "id": 1023444,
  "guid": "A38362CBC954458FB069F821B6526B38",
  "previous_id": 1023443,
  "previous_guid": "1EBCBC24EFCF429F8F34D7099EF6211E",
  "type_id": 3,
  "title": "Amount",
  "source": {
    "amount": 11,
    "unit": "µl",
    "title": "of MGH"
  }
};

console.log(ProtocolsIOValidator.validate(sc1_valid, StepComponent))
console.log(ProtocolsIOValidator.validate(sc2_valid, StepComponent))
