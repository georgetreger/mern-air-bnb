import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
   const hash = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hash });
  try {
    await newUser.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
