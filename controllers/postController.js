const db = require('../models');
const mongoose = require("mongoose");


module.exports = {
	findAll: (req, res) => {
		db.Posts
			.find({})
			.then((posts) => {
				res.json(posts);
			})
			.catch((err) => {
				res.json(err);
			});
	},

	createPost: (req,res) => {
		db.Posts
		.create(req.body)
		.then(post => res.json(post))
		.catch(err => res.json(err))
	},


	deletePost: (req,res) => {
		console.log(req.body);	
		let id = mongoose.Types.ObjectId(req.body.postID);
		db.Posts.deleteOne({_id: id})
		.then((post) => {res.json(post)})
		.catch((err) => {res.json(err)})
	}
};
