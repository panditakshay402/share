const userModels = require("../models/userModel");
const { hashPassword ,comparePassword} = require("../helpers/authhelper");

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // validation
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please fill all the fields" });
    }
    //existing user
    const existingUser = await userModels.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        msg: "User already exists with this email",
      });
    }
    //hash password
    const hashedPassword = await hashPassword(password);
    //save user
    const user = await userModels({
      name,
      email,
      password: hashedPassword,
    }).save();
    res.status(200).send("User registered successfully");
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      success: false,
      msg: "Internal server error",
      error,
    });
  }
};

//login controller
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res.status(400).json({ msg: "Please fill all the fields" });
    }
    //existing user
    const user = await userModels.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User does not exist with this email",
      });
    }
    //compare password
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        msg: "Invalid password",
      });
    }
    res.status(200).send({ message: "Login successful", user });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      msg: "Login error API",
      error,
    });
  }
};

module.exports = { registerController, loginController };
