"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SmallProtocol = undefined;

var _Image = require("./Image");

var SmallProtocol = {
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
};

exports.SmallProtocol = SmallProtocol;