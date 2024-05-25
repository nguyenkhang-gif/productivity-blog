import mongoose from "mongoose";

const pomosectionSchema = mongoose.Schema(
  {
    time: {
      type: Number,
      require: true,
    },
    starttime: {
      type: String,
      require: true,
    },
    endtime: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Pomosection = mongoose.model("Pomosection", pomosectionSchema);
export default Pomosection;
