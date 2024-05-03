const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const port = 3000;
const uri =
	'mongodb+srv://mezioudkecha:tsKGCg9ntVPn3oZM@blood.kv2vc8t.mongodb.net/?retryWrites=true&w=majority&appName=Blood';

app.get('/', (req, res) => {
	res.send(`hello`);
});
app.post('/hello/info', (req, res) => {
	res.send(req.body);
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
