const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { 
        type: String,
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    accountAge: { 
        type: Date, 
        default: Date.now 
    },
    bio: {
        type: String
    },
    platform: {
        type: String
    },
    platforms: {
        type: Array
    },
    avatar: {
        type: String,
        default: "/images/profilepic.jpg"
    },
    region: {
        type: String
    },
    micUser: {
        type: String
    },
    voiceRecord: {
        type: String
    },
    steamID: {
        type: String
    },
    steamInfo: {
        type: Object
    },
    xboxgt: {
        type: String
    },
    psn: {
        type: String
    },
    riotID: {
        type: String
    },
    ninID: {
        type: String
    },
    twitchID: {
        type: String
    },
    style: {
        type: String,
        default: 'Social'
    },
    favGenre: {
        type: String
    },
    availability: {
        type: String
    },
    friends: {
        type: Array
    }

});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
