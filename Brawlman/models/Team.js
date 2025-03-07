import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
  }],
  matches: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Match',
  }],
}, { timestamps: true });

const Team = mongoose.models.Team || mongoose.model('Team', TeamSchema);

export default Team;