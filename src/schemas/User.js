import { Image } from './Image'

let User = {
	"id": "/ProtocolsIO/User",
	"title": "User",
	"description": "A Protocols.io User object. http://apidoc.protocols.io/v3/#user-object",
	"type": "object",
	"properties": {
		"name": {
			"description": "",
			"type": "string"
		},
		"affiliation": {
			"description": "",
			"type": ["string", "null"]
		},
		"username": {
			"description": "",
			"type": ["string", "null"]
		},
		"link": {
			"description": "",
			"type": ["string", "null"]
		},
		"image": {
			"$ref": "/ProtocolsIO/Image"
		}
	}
}

export { User }
