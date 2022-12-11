const express = require("express");
const {
  getProducts,
  createProduct,
  deleteProduct,
} = require("../controllers/ProductsControllers");
const checkAuth = require("../middleware/AuthMiddleware");

const router = express.Router();
// get all products Router
router.get("/", getProducts);
//check authorisation
router.use(checkAuth);

router.post("/", createProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
