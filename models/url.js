const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
    visitedDate: {
        type: Date,
        required: true
    },
    visitCount: {
        type: Number,
        default: 1
    }
});

const urlSchema = new mongoose.Schema({
    shortID: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitHistory: {
        type: [visitSchema],
        default: []
    }
});

const URL = mongoose.model('URL', urlSchema);
module.exports = URL;
