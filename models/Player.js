const { Double } = require('mongodb');
const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    team: String,
    runs_scored: {
        type: Number,
        defualt: 0
    },
    ballsplayed: {
        type: Number,
        defualt: 0
    },
    fours: {
        type: Number,
        defualt: 0
    },
    sixes: {
        type: Number,
        defualt: 0
    },
    strikerate: {
        type: Number,
        defualt: 0
    },
    wickets: {
        type: Number,
        defualt: 0
    },
    runs_conceded: {
        type: Number,
        defualt: 0
    }
});

module.exports = mongoose.model('Player', PlayerSchema);
