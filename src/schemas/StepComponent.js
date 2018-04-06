// Depends on {
//   StepComponentType1, StepComponentType3, StepComponentType4,
//   StepComponentType6, StepComponentType7, StepComponentType8,
//   StepComponentType9, StepComponentType13, StepComponentType15
//   StepComponentType17, StepComponentType18, StepComponentType19.
//   StepComponentType20, StepComponentType21, StepComponentType22,
//   StepComponentType24, StepComponentType25, StepComponentType26
// }

let StepComponent = {
	"id": "/ProtocolsIO/StepComponent",
	"title": "StepComponent",
	"description": "A Protocols.io StepComponent object. http://apidoc.protocols.io/v3/#step-component-object",
	"type": "object",
	"properties": {
		"id": {
			"description": "unique step integer identifier.",
			"type": "integer"
		},
		"guid": {
			"description": "unique step guid.",
			"type": "string"
		},
		"order_id": {
			"description": "sequence number of component in the list starting from 0.",
			"type": "integer"
		},
		"type_id": {
			"description": "type of of component, one of step component types.",
			"type": "integer"
		},
		"title": {
			"description": "name of component,",
			"type": "string"
		},
		"source": {
			"oneOf": [
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType1"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType3"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType4"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType6"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType7"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType8"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType9"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType13"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType15"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType17"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType18"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType19"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType20"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType21"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType22"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType24"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType25"
				},
				{
					"description": "variative object of component, can be determine by type_id",
					"$ref": "./StepComponentType26"
				}
			]
		}
	}
}

export { StepComponent }
