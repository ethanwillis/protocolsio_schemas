import { User } from '../schemas/User';

let Validator = require('jsonschema').Validator;
let v = new Validator();

let u = {
    "user": {
      "name": "Vladimir Frolov",
      "affiliation": null,
      "username": "vladimir-frolov10",
      "link": null,
      "image": {
        "source": "https://s3.amazonaws.com/pr-journal/djqbjf6.jpg",
        "placeholder": "https://s3.amazonaws.com/pr-journal/djqbjf6.jpg"
      }
    }
}

console.log(v.validate(u, User));
