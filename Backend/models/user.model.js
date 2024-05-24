import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: false,
    default: "",
  },
  password: {
    type: String,
    require: true,
    minLength: 6,
  },
  gender: {
    type: String,
    require: true,
    enum: ["male", "female"],
  },
  profilePic: {
    type: String,
    default: "https://avatar.iran.liara.run/public",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
