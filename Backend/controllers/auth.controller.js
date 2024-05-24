import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    // console.log(user);
    const isPasswordCorrect = await bcryptjs.compare(
      password,
      user?.password || ""
    );

    if (!isPasswordCorrect || !user) {
      return res
        .status(400)
        .json({ error: "Invalid username or password error" });
    }

    generateTokenAndSetCookie(user._id, res);
    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (e) {
    console.log("login error: ", e.message);
    res.status(500).json({ error: "Internal login server error" });
  }
};

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (!password === confirmPassword) {
      return res.status(400).json({ Error: "password don't match" });
    }

    const user = await User.findOne({ username: username });
    if (user) {
      return res.status(400).json({ error: "user already exit !!" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const boyurl = "https://avatar.iran.liara.run/public/boy";
    const girlurl = "https://avatar.iran.liara.run/public/girl";

    const newUser = new User({
      fullName,
      username,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyurl : girlurl,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ Error: "invalid user data" });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ Error: "login Error From the server" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", { maxAge: 0 });
    res.status(200).json({ message: "logout success" });
  } catch (error) {
    res.status(400).json({ Error: "logout Error From the server" });
  }
};
// handle auth with goolgle through FB
export const google = (req, res) => {
  res.json("all good");
};
