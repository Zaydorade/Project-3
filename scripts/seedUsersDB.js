const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gsn');

const itemSeed = [
	{
		username: 'Zaydorade',
		password: 'password1',
		firstName: 'Zayd',
        lastName: 'Sarraj'
	},
	{
		username: 'Zaydorade2',
		password: 'password1',
		firstName: 'Zayd1',
        lastName: 'Sarraj1'
	}
];

db.User
	.deleteMany({})
	.then(() => db.User.collection.insertMany(itemSeed))
	.then((data) => {
		console.log(data.insertedIds.length + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});