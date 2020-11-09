const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URI || 'mongodb://localhost/gsn', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const itemSeed = [
	{
		username: 'Joe',
		password: 'password',
		platform: 'PC',
		platforms: ['PC'],
		bio: `I'm just an average Joe.`,
		avatar: '/images/profilepic.jpg',
		psn: 'Coolguy123',
		steamID: " ",
		riotID: 'FullTimeBot',
		micUser: 'Yes',
		style: 'Casual',
		region: 'Europe/Asia',
		availability: '10 hrs/wk',
		ninID: 'Coolguy22',
		favGenre: 'Platformer',
		favGames: ['The Outer Wilds', 'Elder Scrolls Online']
	},
	{
		username: 'Batman',
		password: 'password',
		platform: 'Playstation',
		platforms: ['Playstation'],
		bio: 'I only game in the dark.',
		avatar: '/images/batmanpic.jpg',
		psn: 'thedarkn1ght',
		steamID: " ",
		riotID: 'capedCrusader',
		micUser: 'Yes',
		style: 'Competitive',
		region: 'Americas',
		availability: '5 hrs/wk',
		ninID: 'Brucie3',
		favGenre: 'Action',
		favGames: ['The Outer Wilds', 'Elder Scrolls Online']
	},
	{
		username: 'Superman',
		password: 'password',
		platforms: ['PC', 'Playstation', 'Xbox'],
		platform: 'PC',
		bio: 'Up, Up, and Into the Matrix!',
		avatar: '/images/supermanpic.jpg',
		psn: 'thedarknight',
		steamID: " ",
		riotID: 'ManoSteel',
		micUser: 'Yes',
		style: 'Casual',
		region: 'Americas',
		availability: '10 hrs/wk',
		ninID: 'BoyScout',
		favGenre: 'RPG',
		favGames: ['The Outer Wilds', 'Elder Scrolls Online']
	},
	{
		username: 'TheFlash',
		password: 'password',
		platforms: ['Mobile', 'Nintendo Switch'],
		platform: 'Mobile',
		bio: 'These hands are too quick!',
		avatar: '/images/flashpic.jpg',
		steamID: " ",
		riotID: 'Godspeed',
		micUser: 'Yes',
		style: 'Social',
		region: 'Americas',
		availability: '40 hrs/wk',
		ninID: 'kidFlash',
		favGenre: 'Racing',
		favGames: ['The Outer Wilds', 'Elder Scrolls Online']
	}
	
];

db.Users
	.deleteMany({})
	.then(() => db.Users.collection.insertMany(itemSeed))
	.then((data) => {
		console.log(data.result.n+ ' records inserted!');
		console.log(data)
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

