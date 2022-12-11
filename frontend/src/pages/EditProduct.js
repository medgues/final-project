import React, { useContext } from "react";
import AddProductForm from "../components/AddProductForm";
import EditProductForm from "../components/EditProductForm";
import Product from "../components/product";
import { ProductsContext } from "../contexts/ProductsContext";
import Header from "../header";

const EditProduct = () => {
  const [{ product }, dispatch] = useContext(ProductsContext);

  return (
    <div className=" min-h-screen  bg-slate-300">
      <Header />
      <div className=" flex items-center justify-center">
        <EditProductForm />
        {product.map((product) => (
          <Product
            key={product._id}
            id={product._id}
            title={product.title}
            image={product.img}
            // price={product.amount}
            // rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default EditProduct;
