import { Image } from '../schemas/Image';

let Validator = require('jsonschema').Validator;
let v = new Validator();

let i = {
    "image": {
        "source": "https://www.protocols.io/img/default_protocol.png",
        "placeholder": "https://www.protocols.io/img/default_protocol.png"
    }
};

console.log(v.validate(i, Image))

