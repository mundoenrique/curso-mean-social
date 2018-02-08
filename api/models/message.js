'use strict'
const mongoose = require('mongoose'),
			schema = mongoose.Schema;

var messageSchema = schema({
	emmiter: {type: schema.ObjectId, ref: 'User'},
	receiver: {type: schema.ObjectId, ref: 'User'},
	text: String,
	created_at: String
});

module.exports = mongoose.Model('Message', messageSchema);
