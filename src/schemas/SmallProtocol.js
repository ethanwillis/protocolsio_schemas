import { Image } from './Image'

let SmallProtocol = {
	"id": "/ProtocolsIO/SmallProtocol",
	"title": "SmallProtocol",
	"description": "A Protocols.io SmallProtocol object. http://apidoc.protocols.io/v3/#small-protocol-object",
	"type": "object",
	"properties": {
		"id": {
			"description": "",
			"type": "integer"
		},
		"title": {
			"description": "",
			"type": "string"
		},
		"image": {
			"description": "",
			"$ref": "/ProtocolsIO/Image"
		},
		"version_id": {
			"description": "",
			"type": "integer"
		},
		"doi": {
			"description": "",
			"type": "string"
		},
		"uri": {
			"description": "",
			"type": "string"
		},
		"published_on": {
			"description": "",
			"type": ["integer", "null"]
		}
	}
}

export { SmallProtocol }
