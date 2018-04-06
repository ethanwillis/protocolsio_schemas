import { Comment } from '../schemas/Comment';
import { User } from '../schemas/User';
import { Image } from '../schemas/Image';

let Validator = require('jsonschema').Validator;
let v = new Validator();
v.addSchema(User);
v.addSchema(Image);

let c1 = {
  "id": 16620,
  "parent_id": 0,
  "uri": "comment-on-step-1-of-untitled-protocol1",
  "title": "Comment on step 1 of untitled protocol",
  "body": "<p>Make if cool!</p>",
  "created_on": 1517933093,
  "changed_on": 0,
  "creator": {
    "name": "Lenny Teytelman",
    "affiliation": "protocols.io",
    "username": "lenny-teytelman",
    "link": null,
    "image": {
      "source": "/img/avatars/005.png",
      "placeholder": "/img/avatars/005.png"
    }
  }
};

let c2 = {
  "id": 16620,
  "parent_id": 0,
  "uri": "comment-on-step-1-of-untitled-protocol1",
  "title": "Comment on step 1 of untitled protocol",
  "body": "<p>Make if cool!</p>",
  "created_on": 1517933093,
  "changed_on": 0,
  "creator": {
    "name": "Lenny Teytelman",
    "affiliation": "protocols.io",
    "username": "lenny-teytelman",
    "link": null,
    "image": {
      "source": "/img/avatars/005.png",
      "placeholder": "/img/avatars/005.png"
    }
  },
  "comments": [
    {
      "id": 16621,
      "parent_id": 16620,
      "uri": "comment-on-step-1-of-untitled-protocol1",
      "title": "Comment on step 1 of untitled protocol",
      "body": "<p>Make if cool!</p>",
      "created_on": 1517933094,
      "changed_on": 0,
      "creator": {
        "name": "Lenny Teytelman",
        "affiliation": "protocols.io",
        "username": "lenny-teytelman",
        "link": null,
        "image": {
          "source": "/img/avatars/005.png",
          "placeholder": "/img/avatars/005.png"
        }
      }
    }
  ]
};

console.log(v.validate(c1, Comment));
console.log(v.validate(c2, Comment));
