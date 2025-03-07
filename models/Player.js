const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true,
    },
    stats: {
        type: Map,
        of: Number,
        default: {},
    },
}, { timestamps: true });

module.exports = mongoose.models.Player || mongoose.model('Player', playerSchema);