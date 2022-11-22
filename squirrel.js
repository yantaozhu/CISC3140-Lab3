const mongoose = require('mongoose');

const SquirrelSchema = new mongoose.Schema({
    time: {
        type: String,
    },
    date: {
        type: Number,
    },
    age: {
        type: String,
    },
    primary_fur_color: {
        type: String,
    },
    highlight_fur_color: {
        type: String,
    },
    nearby_building: {
        type: String,
    },
    above_ground: {
        type: Boolean,
    },
});

module.exports = mongoose.model('squirrel',SquirrelSchema);
