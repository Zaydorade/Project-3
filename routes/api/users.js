const axios = require('axios');
const router = require('express').Router();
const db = require('../../models');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



module.exports = router;


// Get Route - show all Users
router.route('/').get((req, res) => {
    db.Users
        .find({})
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.json(err);
        })
});

router.route('/user').get((req, res) => {
    if (!req.user) {
        return null
    }
    let check = req.isAuthenticated()
    let username = req.user.username
    console.log(username)
    db.Users
        .findOne({ username: username })
        .then((user) => {
            console.log(user)
            res.json(user);
        })
        .catch((err) => {
            res.json(err);
        })
});

// Post route - create new user
router.route('/').post((req, res) => {
    let errors = [];

    if (!req.body.username || !req.body.password || !req.body.password2) {
        errors.push('Please fill in Username and Password fields')
    };
    // Check that password match
    if (req.body.password !== req.body.password2) {
        errors.push('Passwords must match!')
    };
    // Check password length
    if (req.body.password.length < 6) {
        errors.push('Password must contain at least 6 characters')
    }; if (errors.length > 0) {
        res.json({
            errors
        });
    }
    else {
        db.Users.findOne({
            username: req.body.username
        }
        ).then(function (user) {
            if (user) {
                // If the username exists, let the user know
                errors.push('This username already exists');
                res.json({
                    errors
                })
            }
            else {
                // Password encryption
                // This generates an encrytion 'salt' whatever that means
                bcrypt.genSalt(10, function (err, salt) {
                    // This uses that 'salt' and creates a hashed password
                    bcrypt.hash(req.body.password, salt, function (err, hash) {
                        if (err) throw err;
                        // Post to the Users table and use the hash as the password
                        db.Users.create({
                            username: req.body.username,
                            password: hash,
                            platform: req.body.platform,
                            bio: req.body.bio,
                            region: req.body.region,
                            availability: req.body.availability,
                            micUser: req.body.micUser,
                            style: req.body.style,
                            steamID: req.body.steamID,
                            xboxgt: req.body.xboxgt,
                            riotID: req.body.riotID,
                            psn: req.body.psn,
                            ninID: req.body.ninID
                        })
                            .then(user => res.json(user))
                            .catch(err => res.json(err))
                    })
                })
            }
        }
        )
    }
});

router.route('/:username')
    .get((req, res) => {
        let username = req.params.username
        db.Users
            .findOne({ username: username })
            .then((user) => {
                res.json(user);
            })
            .catch((err) => {
                res.json(err);
            })
    })

router.route('/:username')
    .post((req, res) => {
        console.log(`Updating ${req.params.username}`)
        console.log(req.body.newFriend)
        if (!req.body.newFriend) {
            db.Users
                .findOneAndUpdate({ username: req.user.username }, req.body, { useFindAndModify: false })
                .then((user) => {
                    res.json(user)
                })
                .catch(err => res.json(err))
                .catch((error) => res.json(error));
        } else {
            db.Users.findOne({ username: req.user.username })
                .then((user) => {
                    var checkThisFriend = false
                    for (let i = 0; i < user.friends.length; i++) {
                        const currentFriend = user.friends[i]
                        if (Object.values(currentFriend).includes(req.body.newFriend)) {
                            console.log(`Removing ${req.body.newFriend} from ${req.user.username}s friend list`)
                            checkThisFriend = true
                            console.log(checkThisFriend)
                        } else console.log('no match')

                    }
                    if (checkThisFriend !== true) {
                        db.Users.findOne({ username: req.body.newFriend })
                            .then((user) => {
                                console.log('adding friend...')
                                db.Users
                                    .findOneAndUpdate({ username: req.user.username }, { $push: { friends: user } }, { useFindAndModify: false })
                                    .then((user) => {
                                        console.log(`Update complete, ${user.username}`)
                                        res.json(user)
                                    })
                                    .catch(err => res.json(err))
                                    .catch((error) => res.json(error));
                            })
                            .catch(err => res.json(err))
                    } else {
                        db.Users
                            .findOneAndUpdate({ username: req.user.username }, { $pull: { friends: { username: req.body.newFriend } } }, { useFindAndModify: false })
                            .then((user) => {
                                console.log(`Update complete, ${user.username}`)
                                res.json(user)
                            })
                            .catch(err => res.json(err))
                            .catch((error) => res.json(error));
                    }

                })
                .catch(err => res.json(err))
                .catch((error) => res.json(error));
        }
    }
    )
