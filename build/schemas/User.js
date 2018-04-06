"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Depends on { Image }

var User = {
	"id": "/ProtocolsIO/User",
	"title": "User",
	"description": "A Protocols.io User object. http://apidoc.protocols.io/v3/#user-object",
	"type": "object",
	"properties": {
		"name": {
			"description": "user full name",
			"type": "string"
		},
		"affiliation": {
			"description": "user affiliation",
			"type": ["string", "null"]
		},
		"username": {
			"description": "username",
			"type": ["string", "null"]
		},
		"link": {
			"description": "external url.",
			"type": ["string", "null"]
		},
		"image": {
			"description": "user profile image",
			"$ref": "./Image"
		}
	}
};

exports.User = User;