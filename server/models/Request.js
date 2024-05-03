// Request Schema
const requestSchema = mongoose.Schema(
	{
		bloodType: {
			type: String,
			enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
			required: [true, 'Blood type is required'],
		},
		quantityInMl: {
			type: Number,
			required: [true, 'Quantity is required'],
		},
		urgency: {
			type: String,
			enum: ['urgent', 'non-urgent'],
			default: 'non-urgent',
		},
		// Add more fields as needed
	},
	{ timestamps: true }
);

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
