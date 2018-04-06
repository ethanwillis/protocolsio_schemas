'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Protocol = undefined;

var _Image = require('./Image');

var _User = require('./User');

var _SmallProtocol = require('./SmallProtocol');

var Protocol = {
	"id": "/ProtocolsIO/Protocol",
	"title": "Protocol",
	"description": "A Protocols.io Protocol object. http://apidoc.protocols.io/v3/#protocol-object",
	"type": "object",
	"properties": {
		"id": {
			"description": "unique protocol integer identifier.",
			"type": "integer"
		},
		"title": {
			"description": "protocol title.",
			"type": "string"
		},
		"image": {
			"description": "protocol image.",
			"$ref": "/ProtocolsIO/Image"
		},
		"doi": {
			"description": "DOI of this protocol.",
			"type": "string"
		},
		"uri": {
			"description": "unique protocol text identifier.",
			"type": "string"
		},
		"published_on": {
			"description": "unix timestamp. date/time when this protocol was published.",
			"type": ["integer", "null"]
		},
		"created_on": {
			"description": "unix timestamp. date/time of protocol creation.",
			"type": "integer"
		},
		"creator": {
			"description": "protocol creator",
			"$ref": "/ProtocolsIO/User"
		},
		"public": {
			"description": "1 or 0. 1 means that this protocol is public and 0 otherwise.",
			"type": "integer"
		},
		"versions": {
			"description": "list of versions",
			"type": "array",
			"items": {
				"$ref": "/ProtocolsIO/SmallProtocol"
			}
		},
		"version_id": {
			"description": "0...n. Version number of this protocol.",
			"type": "integer"
		},
		"number_of_steps": {
			"description": "number of steps of this protocol.",
			"type": ["integer", "null"]
		},
		"authors": {
			"description": "list of user or empty array",
			"type": "array",
			"items": {
				"$ref": "/ProtocolsIO/User"
			}
		}
	},
	"required": ["id", "title", "image", "doi", "uri", "published_on", "created_on", "creator", "public", "versions", "version_id", "number_of_steps", "authors"]
};

exports.Protocol = Protocol;