import mongoose from "mongoose";

const pomodoroSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: true,
      unique: true,
    },
    section: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Pomosection",
        default: [],
      },
    ],
    focustime: {
      type: Number,
      require: true,
      default: 25,
    },
    breaktime: {
      type: Number,
      require: true,
      default: 5,
    },
    longbreaktime: {
      type: Number,
      require: true,
      default: 15,
    },
  },
  {
    timestamps: true,
  }
);


const Pomodoro = mongoose.model("Pomodoro",pomodoroSchema)

export default Pomodoro