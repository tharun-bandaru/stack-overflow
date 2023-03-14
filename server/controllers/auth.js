import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/auth.js";

//users
export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existinguser = await User.findOne({ email });
    if (existinguser) {
      return res.status(404).json({ message: "user already exist." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ result: newUser, token });
  } catch (err) {
    console.log(err);
    res.status(500).json("something went wrong.... signup");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existinguser = await User.findOne({ email });
    console.log(password, email);
    console.log("checking login ...", existinguser);
    if (!existinguser) {
      return res.status(404).json({ message: "user doesn't exist." });
    }
    console.log(process.env.JWT);
    const isPasswordCrct = await bcrypt.compare(
      password,
      existinguser.password
    );
    console.log(isPasswordCrct);
    if (!isPasswordCrct) {
      return res.status(400).json({ message: "Invalid Credentials..." });
    }
    const token = jwt.sign(
      { email: existinguser.email, id: existinguser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existinguser, token });
  } catch (error) {
    res.status(500).json("something went wrong login");
  }
};
