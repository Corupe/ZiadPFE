const express = require('express');
const mongoose = require('mongoose');
const Donor = require('./models/Donor');
const app = express();
app.use(express.json());

const port = 3000 | 3001;
const uri =
	'mongodb+srv://mezioudkecha:tsKGCg9ntVPn3oZM@blood.kv2vc8t.mongodb.net/?retryWrites=true&w=majority&appName=Blood';

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow Content-Type header

	next();
});

mongoose
	.connect(uri)
	.then(() => {
		console.log('connected !!');
		app.listen(port, () => {
			console.log(`server listening on port ${port}`);
		});
	})
	.catch((error) => {
		console.log('connection failed');
	});

app.get('/donors', async (req, res) => {
	try {
		const donors = await Donor.find({});
		res.send(donors);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});
app.post('/donors/:id', async (req, res) => {
	try {
		await Donor.create(req.body);
		res.status(200).json(req.body);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});
