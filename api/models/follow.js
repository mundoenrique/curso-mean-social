'use strict'
const mongoose = require('mongoose'),
			schema = mongoose.Schema;

var followSchema = schema({
	user: {type: schema.ObjectId, ref: 'User'},
	followed: {type: schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.Model('Follow', followSchema);
