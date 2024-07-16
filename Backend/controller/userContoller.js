import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res) => {
  //console.log(req.body);
  const { username, email, password } = req.body;
  try {
    if (
      !username ||
      !email ||
      !password ||
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      return res.status(400).json({
        message: "All Fields are required",
        success: false,
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email is Already Registed,Try Another",
        success: false,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username: username,
      email: email,
      password: hashedpassword,
    });
    await newUser.save();
    return res.status(200).json({
      message: "successfully Regiseted",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: `an error ocuured ${error.messsage}`,
      success: false,
    });
  }
};
export const login = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "Required all field",
        success: false,
      });
    }
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res.status(401).json({
        message: "invalid credential",
        success: false,
      });
    }
    const validpassword = bcrypt.compareSync(password, validUser.password);
    if (!validpassword) {
      return res.status(401).json({
        message: "Invalid Credentials",
        success: false,
      });
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);
    const { password: pass, ...rest } = validUser._doc;
    res.cookie("access_token", token, { httpOnly: true }).status(200).json({
      rest,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `An error ocuursed ${error.message}`,
      success: false,
    });
  }
};
export const signout = async (req, res) => {
  // console.log("hallo");
  try {
    res.clearCookie("access_token");
    res.status(200).json({
      message: "User has been logged out",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};
