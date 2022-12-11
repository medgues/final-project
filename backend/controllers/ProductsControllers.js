const { default: mongoose } = require("mongoose");
const ProductsModel = require("../models/ProductsModel");
//checking ownership
const getAndCheckOwnership = async (id, user_username) => {
  try {
    const product = await ProductsModel.findById(id);
    console.log("product found", product);
    if (!product) {
      // return res.status(404).json({ message: "product not found!" });
      throw new Error("Product not found!");
    }

    // Check whether this resource belongs to the signed in user
    if (product.postedBy.equals(user_username)) {
      throw new Error("You're not authorized to do this!");
    }
    console.log("product to be returned", product);
    return product;
  } catch (error) {
    throw new Error(error);
  }
};
//get all products
const getProducts = async (req, res) => {
  try {
    //get all products from data base
    const allProducts = await ProductsModel.find({});
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
//create product
const createProduct = async (req, res) => {
  const { title, postedBy, img } = req.body;
  const { username } = req.user;
  try {
    const newProduct = await ProductsModel.create({
      title,
      postedBy: username,
      img,
    });
    res.status(200).json({ newProduct });
  } catch (err) {
    res.status(400).json({ err: true, message: err.message });
  }
};
//delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.body;
  const { username } = req.user;

  try {
    const deletedProduct = await getAndCheckOwnership(id, username);
    console.log("deletedProduct", deletedProduct);
    return res.status(200).json({ message: "product deleted seccusfully" });
  } catch (err) {
    res.status(400).json({ err: true, message: err.message });
  }
};

module.exports = { getProducts, createProduct, deleteProduct };
