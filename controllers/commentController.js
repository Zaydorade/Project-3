const db = require('../models');
const mongoose = require("mongoose");


module.exports = {
	findAll: (req, res) => {
		db.Comments
			.find({})
			.then((comments) => {
				res.json(comments);
			})
			.catch((err) => {
				res.json(err);
			});
	},

	createComment: (req,res) => {
		db.Comments
		.create(req.body)
		.then(comment => res.json(comment))
		.catch(err => res.json(err))
	},


	deleteComment: (req,res) => {
		console.log(req.body);	
		let id = mongoose.Types.ObjectId(req.body.commentID);
		db.Comments.deleteOne({_id: id})
		.then((comment) => {res.json(comment)})
		.catch((err) => {res.json(err)})
	}
};
