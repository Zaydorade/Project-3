const axios = require('axios');
const router = require('express').Router();
const db = require('../../models');
const mongoose = require('mongoose');
const download = require('image-downloader')

module.exports = router;

router.route('/').get((req, res) => {
    axios.get('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=BD54D1AE4184BBA8B7ECF21F6094F4CE&steamids=76561198058770552')
        .then((response) => res.json(response.data.response.players)).catch((error) => res.json(error));

});

router.route('/games').get((req, res) => {
    axios.get('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=BD54D1AE4184BBA8B7ECF21F6094F4CE&steamid=76561198058770552&format=json')
        .then((response) => res.json(response.data.response)).catch((error) => res.json(error));

});


router.route('/').post((req, res) => {
    let userSteamID = req.body.steamID
    let APIkey = process.env.STEAM_KEY
    let steamAPIurl = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${APIkey}&steamids=${userSteamID}`
    axios.get(steamAPIurl)
        .then((response) =>
            db.Users.updateOne({ username: req.body.username }, { steamInfo: response.data.response.players[0] })
                .then(user => res.json({'success': 'true'}))
                .catch(err => res.json(err)))
        .catch((error) => res.json(error));
});

// router.route('/avatar').get((req, res) => {
//     if (req.user.steamInfo.avatarfull) {
//     const tempOptions = {
//         url: req.user.steamInfo.avatarfull,
//         dest: 'client/public/steamThumbs/' 
//     }
//     download.image(tempOptions)
//     .then(({filename, image}) => {
//         console.log({'saved to': filename})
//     })
//     .catch(err => console.log(err))
//     console.log(tempOptions)
//     res.json({"success" : "maybe"})}
//     else res.json({"success": "false"})
// })