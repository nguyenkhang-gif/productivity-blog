import Pomodoro from "../models/pomodoro.model.js";

export const getSection = async (req, res) => {
  try {
    let user = req.user
    let pomodoro = await Pomodoro.findOne({ auth: user._id }).populate(
      "Pomosection"
    );
    if (!pomodoro) {
      pomodoro = await Pomodoro.create({
        auth: user._id,
      });
      return res.json(pomodoro);
    }
  } catch (e) {
    console.log("getSection error :", e.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
