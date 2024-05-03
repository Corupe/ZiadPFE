// Donation Schema
const donationSchema = mongoose.Schema(
	{
		donor: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Donor',
			required: [true, 'Donor is required'],
		},
		bloodType: {
			type: String,
			enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
			required: [true, 'Blood type is required'],
		},
		quantityInMl: {
			type: Number,
			required: [true, 'Quantity is required'],
		},
		// Add more fields as needed
	},
	{ timestamps: true }
);

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
