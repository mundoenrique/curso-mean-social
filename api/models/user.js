'use strict'
const mongoose = require('mongoose'),
			schema = mongoose.Schema;

var userSchema = schema({
	name: String,
	surname: String,
	nick: String,
	email: String,
	password: String,
	role: String,
	image: String
});

module.exports = mongoose.Model('User', userSchema);
