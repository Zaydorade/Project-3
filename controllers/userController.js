const db = require('../models');
const mongoose = require("mongoose");


module.exports = {
	findAll: (req, res) => {
		db.Users
			.find({})
			.then((users) => {
				res.json(users);
			})
			.catch((err) => {
				res.json(err);
			});
	},

	createUser: (req,res) => {
		db.Users
		.create(req.body)
		.then(user => res.json(user))
		.catch(err => res.json(err))
	},


	deleteUser: (req,res) => {
		console.log(req.body);	
		let id = mongoose.Types.ObjectId(req.body.userID);
		db.Users.deleteOne({_id: id})
		.then((user) => {res.json(user)})
		.catch((err) => {res.json(err)})
	}
};
