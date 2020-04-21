const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gsn', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const itemSeed = [
	{
		username: 'Zaydorade',
		password: 'password1',
		firstName: 'Zayd',
		lastName: 'Sarraj',
		steamID: 76561198058770552
	},
	{
		username: 'Batman',
		password: 'password2',
		firstName: 'Bruce',
        lastName: 'Wayne'
	},
	{
		username: 'Superman',
		password: 'password3',
		firstName: 'Clark',
		lastName: 'Kent'
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

