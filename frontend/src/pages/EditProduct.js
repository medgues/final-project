import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddProductForm from "../components/AddProductForm";
import EditProductForm from "../components/EditProductForm";
import Product from "../components/product";
import { ProductsContext } from "../contexts/ProductsContext";
import Header from "../header";
import { useFetch } from "../hooks/useFetch";

const EditProduct = () => {
  const [isloading, setIsloading] = useState(false);
  const { id } = useParams();
  const { fetch } = useFetch();
  const { product, dispatch } = useContext(ProductsContext);
  console.log(product);
  const user = JSON.parse(localStorage.getItem("user"));
  const url = `/api/products/product/${id}`;
  const method = "getProduct";

  const getProductbyId = async () => {
    const res = await fetch({ url, method, user, data: {} });
    dispatch({ type: "SET_PRODUCT", payload: res.data });
  };

  useEffect(() => {
    setTimeout(() => {
      getProductbyId();
    }, 5000);
  }, []);

  return (
    <div className=" h-auto   bg-slate-300">
      <Header />
      <div className=" flex h-screen items-center justify-center">
        <EditProductForm />
        <div className="w-1/6 mx-4">
          {product.map((product) => (
            <Product
              key={product._id}
              id={product._id}
              title={product.title}
              image={product.img}
              postedBy={product.postedBy}
              // price={product.amount}
              // rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
