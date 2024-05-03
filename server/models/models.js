const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const clientSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'your name is required'],
		},
	},
	{ timestamps: true }
);

const client = mongoose.model('client', clientSchema);
module.exports = client;
