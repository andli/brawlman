import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema({
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team" }],
  date: Date,
  score: String,
});

export default mongoose.models.Match || mongoose.model("Match", MatchSchema);
