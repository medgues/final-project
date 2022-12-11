import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/product";
import { ProductsContext } from "../contexts/ProductsContext";
import Header from "../header";
import useProducts from "../hooks/useProducts";

const UserPage = () => {
  const [{ userProducts }, dispatch] = useContext(ProductsContext);

  console.log("state from userpage", userProducts);
  return (
    <div className=" min-h-screen  bg-slate-300">
      <Header />

      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-center">
        {userProducts.map((product) => (
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
  );
};

export default UserPage;
