const axios = require('axios');
const router = require('express').Router();
const db = require('../../models');
const mongoose = require('mongoose');


module.exports = router;

// Get Route - show all Users
router.route('/').get((req, res) => {
    db.User
        .find({})
        .then((users) => {
            console.log("$$$$$$$$$$$$$$$$$$$$$$$")
            console.log(users);
            res.json(users);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Post route - create new user
router.route('/').post((req,res) => {
    db.User
    .create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
});

// Delete route - delete user
router.route('/delete/').post((req,res) => {
    console.log(req.body);	
    let id = mongoose.Types.ObjectId(req.body.userID);
    db.Users.deleteOne({_id: id})
    .then((user) => {res.json(user)})
    .catch((err) => {res.json(err)})
})