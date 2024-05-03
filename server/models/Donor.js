const mongoose = require('mongoose');
// Donor Schema

const donorSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			unique: true,
			lowercase: true,
			trim: true,
		},
		bloodType: {
			type: String,
			enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
			required: [true, 'Blood type is required'],
		},
		// Add more fields as needed
	},
	{ timestamps: true }
);

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;
