import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddProductForm from "../components/AddProductForm";
import Product from "../components/product";
import { Auth } from "../contexts/Auth";
import { ProductsContext } from "../contexts/ProductsContext";
import Header from "../header";
import { useFetch } from "../hooks/useFetch";

const CreateProduct = () => {
  const navigate = useNavigate();
  const { user } = useContext(Auth);
  console.log("usre from creatproduct", user);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <div className=" min-h-screen  bg-slate-300">
      <Header />
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-center">
        <AddProductForm />
        {/* {userProducts.map((product) => (
          <Product
            key={product._id}
            id={product._id}
            title={product.title}
            image={product.img}
            // price={product.amount}
            // rating={product.rating}
          />
        ))} */}
      </div>
    </div>
  );
};

export default CreateProduct;
