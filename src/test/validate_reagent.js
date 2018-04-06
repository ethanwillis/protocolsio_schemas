import { Reagent } from '../schemas/Reagent';
import { User } from '../schemas/User';
import { Image } from '../schemas/Image';

let Validator = require('jsonschema').Validator;
let v = new Validator();
v.addSchema(User);
v.addSchema(Image);

let r = {
  "id": 19751,
  "mol_weight": 0,
  "name": "2 mg Gastrin I, human",
  "linfor": "C130H204N38O31S",
  "url": "https://www.biorbyt.com/gastrin-i-human-orb321073",
  "sku": "orb321073",
  "vendor": {
    "name": "biorbyt",
    "affiliation": null,
    "username": null,
    "link": "https://www.biorbyt.com/",
    "image": {
      "source": "http://je-protocols/img/vendors/208.png",
      "placeholder": "http://je-protocols/img/vendors/208.png"
    }
  }
}

console.log(v.validate(r, Reagent))
