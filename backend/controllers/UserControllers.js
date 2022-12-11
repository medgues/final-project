const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
//login controller
const login = async (req, res) => {
  // const { email, password } = req.body;
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    //Create jwt
    const token = generateToken(user._id);
    res.status(200).json({ username: user.username, email: user.email, token });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const signup = async (req, res) => {
  const { email, password, role, username } = req.body;
  console.log(req.body);
  try {
    const user = await UserModel.signup(email, password, role, username);
    //Create jwt
    const token = generateToken(user._id);
    res.status(200).json({ username: user.username, email: user.email, token });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = { login, signup };
