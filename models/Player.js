import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema({
  name: String,
  position: String,
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
});

export default mongoose.models.Player || mongoose.model("Player", PlayerSchema);
