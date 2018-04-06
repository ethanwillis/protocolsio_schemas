import { ProtocolsIOValidator } from './ProtocolsIOValidator'
import { Image } from '../schemas/Image';

let i = {
    "image": {
        "source": "https://www.protocols.io/img/default_protocol.png",
        "placeholder": "https://www.protocols.io/img/default_protocol.png"
    }
};

console.log(ProtocolsIOValidator.validate(i, Image))
