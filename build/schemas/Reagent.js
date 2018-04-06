"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Reagent = undefined;

var _User = require("./User.js");

var Reagent = {
	"id": "/ProtocolsIO/Reagent",
	"title": "Reagent",
	"description": "A Protocols.io Reagent object. http://apidoc.protocols.io/v3/#reagent-object",
	"type": "object",
	"properties": {
		"id": {
			"description": "unique reagent integer identifier.",
			"type": "integer"
		},
		"mol_weight": {
			"description": "molarity weight",
			"type": "number"
		},
		"name": {
			"description": "name of reagent.",
			"type": "string"
		},
		"linfor": {
			"description": "linear formula.",
			"type": "string"
		},
		"url": {
			"description": "external url",
			"type": ["string", "null"]
		},
		"sku": {
			"description": "reagent sku.",
			"type": "string"
		},
		"vendor": {
			"description": "reagent vendor.",
			"$ref": "/ProtocolsIO/User"
		}
	}
};

exports.Reagent = Reagent;