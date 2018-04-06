import { ProtocolsIOValidator } from './ProtocolsIOValidator'
import { SmallProtocol } from '../schemas/SmallProtocol';

let sp = {
  "id": 8503,
  "title": "Gene calling with Prodigal",
  "image": {
    "source": "https://www.protocols.io/img/default_protocol.png",
    "placeholder": "https://www.protocols.io/img/default_protocol.png"
  },
  "version_id": 0,
  "doi": "dx.doi.org/10.17504/protocols.io.kixcufn",
  "uri": "gene-calling-with-prodigal-kixcufn",
  "published_on": 1509493090
}

console.log(ProtocolsIOValidator.validate(sp, SmallProtocol));
