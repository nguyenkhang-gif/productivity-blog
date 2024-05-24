import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (UserId, res) => {
  const token = jwt.sign({ userId: UserId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 1000, //
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
