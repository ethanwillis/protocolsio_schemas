import { StepComponentType } from './StepComponentType'

let StepComponent = {
	"id": "/ProtocolsIO/StepComponent",
	"title": "StepComponent",
	"description": "A Protocols.io StepComponent object. http://apidoc.protocols.io/v3/#step-component-object",
	"type": "object",
	"properties": {
		"id": {
			"description": "",
			"type": "int"
		},
		"guid": {
			"description": "",
			"type": "string"
		},
		"order_id": {
			"description": "",
			"type": "int"
		},
		"type_id": {
			"description": "",
			"$ref": "/ProtocolsIO/StepComponentType"
		},
		"title": {
			"description": "",
			"type": "string"
		},
		"source": {
			"description": "",
			"$ref": "/ProtocolsIO/StepComponent"
		}
	}
}

export { StepComponent }
