import { connectToDatabase } from "../../lib/mongodb";
import Team from "../../models/Team";

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    case "GET":
      try {
        const teams = await Team.find({});
        res.status(200).json(teams);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch teams" });
      }
      break;

    case "POST":
      try {
        const team = new Team(req.body);
        await team.save();
        res.status(201).json(team);
      } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Failed to create team" });
      }
      break;

    case "PUT":
      try {
        const { id } = req.query;
        const updatedTeam = await Team.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.status(200).json(updatedTeam);
      } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Failed to update team" });
      }
      break;

    case "DELETE":
      try {
        const { id } = req.query;
        await Team.findByIdAndDelete(id);
        res.status(204).end();
      } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Failed to delete team" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
