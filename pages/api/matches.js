import dbConnect from "../../lib/mongodb";
import Match from "../../models/Match";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const matches = await Match.find({});
      res.status(200).json(matches);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch matches" });
    }
  } else if (req.method === "POST") {
    try {
      const match = new Match(req.body);
      await match.save();
      res.status(201).json(match);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: "Failed to create match" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
