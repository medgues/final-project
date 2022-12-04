const express = require("express");
const {
  login,
  signup,
  getProducts,
  createProduct,
} = require("../controllers/ProductsControllers");
const router = express.Router();
// get all products Router
router.get("/", getProducts);
router.post("/", createProduct);

//singup route
// router.post("/signup", signup);

module.exports = router;
