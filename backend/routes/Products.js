const express = require("express");
const {
  getProducts,
  getUserProducts,
  getProductbyId,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/ProductsControllers");
const checkAuth = require("../middleware/AuthMiddleware");

const router = express.Router();
// get all products Router
router.get("/", getProducts);
router.get("/profile/:username", getUserProducts);
//check authorisation
router.use(checkAuth);

router.post("/", createProduct);
router.get("/:username", getUserProducts);
router.get("/product/:id", getProductbyId);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);

module.exports = router;
