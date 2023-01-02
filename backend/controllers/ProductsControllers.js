const { default: mongoose } = require("mongoose");
const ProductsModel = require("../models/ProductsModel");
//checking ownership
const getAndCheckOwnership = async (id, user_username) => {
  try {
    const product = await ProductsModel.findById(id);
    console.log("product found", product);
    if (!product) {
      return res.status(404).json({ message: "product not found!" });
      throw new Error("Product not found!");
    }

    // Check whether this resource belongs to the signed in user
    if (!(product.postedBy == user_username)) {
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
    const products = await ProductsModel.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
//get products by username
const getUserProducts = async (req, res) => {
  const user = req.params;
  console.log(user);

  try {
    //get products by username from data base
    const userProducts = await ProductsModel.find({ postedBy: user.username });
    res.status(200).json(userProducts);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
//get products by username
const getProductbyId = async (req, res) => {
  const { id } = req.params;

  try {
    //get products by username from data base
    const product = await ProductsModel.find({ _id: id });
    console.log("product", product);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
//create product
const createProduct = async (req, res) => {
  const { title, postedBy, img, description } = req.body;
  const { username } = req.user;
  const bg_img =
    "https://mega.nz/file/JfJgybKD#9R4C0b3yTtOijf_WL-xWSrN8Vq4NwZuhgRCFG_T7Bc8";
  try {
    const newProduct = await ProductsModel.create({
      title,
      postedBy: username,
      description,
      img,
      bg_img,
    });
    res.status(200).json({ newProduct });
  } catch (err) {
    res.status(400).json({ err: true, message: err.message });
  }
};
//delete a product
const deleteProduct = async (req, res) => {
  console.log("delete request recieved");

  const { id } = req.params;
  const { username } = req.user;

  try {
    const deletedProduct = await getAndCheckOwnership(id, username);
    if (!deletedProduct) {
      return res.status(404).json({ err: "product not Found!" });
    }
    await ProductsModel.deleteOne({ _id: id });
    console.log("product deleted");
    return res.status(200).json({ message: "product deleted seccusfully" });
  } catch (err) {
    res.status(400).json({ err: true, message: err.message });
  }
};
//update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { username } = req.user;
  const update = req.body;
  console.log("update", update);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "book not found" });
  }

  try {
    const product = await getAndCheckOwnership(id, username);

    if (!product) {
      return res.status(404).json({ err: "product not Found!" });
    }

    if (update.title) {
      product.title = update.title;
    }

    if (update.img) {
      product.img = update.img;
    }

    await product.save();
    console.log("updated product", product);
    return res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ err: true, message: err.message });
  }
};

module.exports = {
  getProducts,
  getUserProducts,
  getProductbyId,
  createProduct,
  deleteProduct,
  updateProduct,
};
