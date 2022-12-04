const { default: mongoose } = require("mongoose");
const UserModel = require("../models/UserModel");
const ProductsModel = require("../models/ProductsModel");

//get all products
const getProducts = async (req, res) => {
  try {
    //get all products from data base
    const allProducts = await ProductsModel.find({});
    console.log(allProducts);
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const createProduct = async (req, res) => {
  const { title, description, img } = req.body;
  try {
    const newProduct = await ProductsModel.create({ title, description, img });
    res.status(200).json({ newProduct });
  } catch (err) {
    res.status(400).json({ err: true, message: err.message });
  }
};

module.exports = { getProducts, createProduct };
