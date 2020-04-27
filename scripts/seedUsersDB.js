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
		platform: 'PC',
		platforms: ['PC', 'Xbox'],
		bio: 'Best Gamer Around.',
		avatar: '/images/profilepic.jpg',
		psn: 'ZPSNNN',
		xboxgt: 'Zaydorade',
		steamID: 76561198058770552,
		riotID: 'CapnZap',
		micUser: 'Yes',
		style: 'Social',
		region: 'Americas',
		availability: '10 hrs/wk',
		ninID: 'Zaydorade',
		favGenre: 'MMORPG',
		favGames: ['The Outer Wilds', 'Elder Scrolls Online']

	},
	{
		username: 'Batman',
		password: 'password2',
		firstName: 'Bruce',
		lastName: 'Wayne',
		platform: 'Playstation',
		platforms: ['Playstation'],
		bio: 'I only game in the dark.',
		avatar: '/images/batmanpic.jpg',
		psn: 'thedarkn1ght',
		steamID: 76561198058770552,
		riotID: 'CapnZap',
		micUser: 'Yes',
		style: 'Social',
		region: 'Americas',
		availability: '10 hrs/wk',
		ninID: 'Zaydorade',
		favGenre: 'MMORPG',
		favGames: ['The Outer Wilds', 'Elder Scrolls Online']
	},
	{
		username: 'Superman',
		password: 'password3',
		firstName: 'Clark',
		lastName: 'Kent',
		platforms: ['VR', 'PC', 'Playstation'],
		platform: 'PC',
		bio: 'Up, Up, and Into the Matrix!',
		avatar: '/images/supermanpic.jpg',
		psn: 'thedarknight',
		steamID: 76561198058770552,
		riotID: 'CapnZap',
		micUser: 'Yes',
		style: 'Social',
		region: 'Americas',
		availability: '10 hrs/wk',
		ninID: 'Zaydorade',
		favGenre: 'MMORPG',
		favGames: ['The Outer Wilds', 'Elder Scrolls Online']
	},
	{
		username: 'TheFlash',
		password: 'password4',
		firstName: 'Barry',
		lastName: 'Allen',
		platforms: ['IRL'],
		platform: 'Mobile',
		bio: 'These hands are too quick!',
		avatar: '/images/flashpic.jpg',
		steamID: 76561198058770552,
		riotID: 'CapnZap',
		micUser: 'Yes',
		style: 'Social',
		region: 'Americas',
		availability: '10 hrs/wk',
		ninID: 'Zaydorade',
		favGenre: 'MMORPG',
		favGames: ['The Outer Wilds', 'Elder Scrolls Online']
	}
	
];

db.Users
	.deleteMany({})
	.then(() => db.Users.collection.insertMany(itemSeed))
	.then((data) => {
		console.log(data.insertedIds.length + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

