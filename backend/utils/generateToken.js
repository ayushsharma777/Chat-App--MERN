import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //Millisecond format
    httpOnly: true, // prevent XSS attacs, (it cannot be accessible via java script)
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", //CSRF attacks
  });
};

export default generateTokenAndSetCookie;
