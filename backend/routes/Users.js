const express = require("express");
const { login, signup } = require("../controllers/UserControllers");
const router = express.Router();
//login Route
router.post("/login", login);

//singup route
router.post("/signup", signup);

module.exports = router;
