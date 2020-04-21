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
    platforms: {
        type: Array
    },
    avatar: {
        type: String
    },
    location: {
        type: String
    },
    micUser: {
        type: Boolean
    },
    voiceRecord: {
        type: String
    },
    steamID: {
        type: Number
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
    style: {
        type: String
    },
    favGenre: {
        type: String
    },
    availability: {
        type: Number
    }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
