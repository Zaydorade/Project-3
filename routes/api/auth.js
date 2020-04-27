const axios = require('axios');
const router = require('express').Router();
const db = require('../../models');
const mongoose = require('mongoose');
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;


module.exports = router;

router.route('/login').post(function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) { return next(err) }
        if (!user) { return res.json({redirectURL:'/login'}) }
        req.logIn(user, function (err) {
            if (err) { return next(err) }
            console.log('logged in')
            return res.json({redirectURL: '/account'})
        })
    })(req, res, next);
})

router.route('/logout').get(function(req, res) {
    req.logout();
    console.log("User logged out")
    return res.json({redirectURL: '/login'})
  });

  // Delete route - delete user
router.route('/delete').post((req,res) => {
    console.log(req.body)
    db.Users
    .deleteOne({username: req.body.username})
    .then(result => res.json({ result }))
    .catch(err => res.json(err))
})