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
		platforms: ['PC', 'Xbox'],
		bio: 'Best Gamer Around.'
	},
	{
		username: 'Batman',
		password: 'password2',
		firstName: 'Bruce',
		lastName: 'Wayne',
		platforms: ['Playstation'],
		bio: 'I only game in the dark.'
	},
	{
		username: 'Superman',
		password: 'password3',
		firstName: 'Clark',
		lastName: 'Kent',
		platforms: ['VR', 'PC', 'Playstation'],
		bio: 'Up, Up, and Into the Matrix!'
	},
	{
		username: 'Zaydorade',
		password: 'password1',
		firstName: 'Zayd',
		lastName: 'Sarraj',
		platforms: ['PC', 'Xbox'],
		bio: 'Best Gamer Around.'
	},
	{
		username: 'Batman',
		password: 'password2',
		firstName: 'Bruce',
		lastName: 'Wayne',
		platforms: ['Playstation'],
		bio: 'I only game in the dark.'
	},
	{
		username: 'Superman',
		password: 'password3',
		firstName: 'Clark',
		lastName: 'Kent',
		platforms: ['VR', 'PC', 'Playstation'],
		bio: 'Up, Up, and Into the Matrix!'
	},
	{
		username: 'Zaydorade',
		password: 'password1',
		firstName: 'Zayd',
		lastName: 'Sarraj',
		platforms: ['PC', 'Xbox'],
		bio: 'Best Gamer Around.'
	},
	{
		username: 'Batman',
		password: 'password2',
		firstName: 'Bruce',
		lastName: 'Wayne',
		platforms: ['Playstation'],
		bio: 'I only game in the dark.'
	},
	{
		username: 'Superman',
		password: 'password3',
		firstName: 'Clark',
		lastName: 'Kent',
		platforms: ['VR', 'PC', 'Playstation'],
		bio: 'Up, Up, and Into the Matrix!'
	},
	{
		username: 'Zaydorade',
		password: 'password1',
		firstName: 'Zayd',
		lastName: 'Sarraj',
		platforms: ['PC', 'Xbox'],
		bio: 'Best Gamer Around.'
	},
	{
		username: 'Batman',
		password: 'password2',
		firstName: 'Bruce',
		lastName: 'Wayne',
		platforms: ['Playstation'],
		bio: 'I only game in the dark.'
	},
	{
		username: 'Superman',
		password: 'password3',
		firstName: 'Clark',
		lastName: 'Kent',
		platforms: ['VR', 'PC', 'Playstation'],
		bio: 'Up, Up, and Into the Matrix!'
	},
	{
		username: 'Zaydorade',
		password: 'password1',
		firstName: 'Zayd',
		lastName: 'Sarraj',
		platforms: ['PC', 'Xbox'],
		bio: 'Best Gamer Around.'
	},
	{
		username: 'Batman',
		password: 'password2',
		firstName: 'Bruce',
		lastName: 'Wayne',
		platforms: ['Playstation'],
		bio: 'I only game in the dark.'
	},
	{
		username: 'Superman',
		password: 'password3',
		firstName: 'Clark',
		lastName: 'Kent',
		platforms: ['VR', 'PC', 'Playstation'],
		bio: 'Up, Up, and Into the Matrix!'
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

