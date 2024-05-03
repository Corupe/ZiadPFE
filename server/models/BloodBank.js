// Blood Bank Schema
const bloodBankSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
		},
		location: {
			type: String,
			required: [true, 'Location is required'],
		},
		// Add more fields as needed
	},
	{ timestamps: true }
);

const BloodBank = mongoose.model('BloodBank', bloodBankSchema);

module.exports = BloodBank;
