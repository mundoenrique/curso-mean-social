'use strict'
const mongoose = require('mongoose'),
			schema = mongoose.Schema;

var publicationSchema = schema({
	user: {type: Schema.ObjectId, ref: 'User'},
	text: String,
	file: String,
	created_at: String,
});

module.exports = monngose.Model('Publication', publicationSchema);
