import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PopupModel from "../components/PopupModel";
import Product from "../components/product";
import { Auth } from "../contexts/Auth";
import { ProductsContext } from "../contexts/ProductsContext";
import Header from "../header";
import { useFetch } from "../hooks/useFetch";
import useProducts from "../hooks/useProducts";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const UserPage = () => {
  const { username } = useParams();
  useEffect(() => {
    const allProducts = JSON.parse(localStorage.getItem("posts"));
    dispatch({ type: "USER_PRODUCTS", username, allProducts });
    console.log("state from userpage", userProducts, username);
  }, []);
  const [{ userProducts }, dispatch] = useContext(ProductsContext);
  return (
    <div className=" min-h-screen  bg-slate-300">
      <Header />

      <div className="w-11/12 mx-auto my-1">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 4, 900: 5 }}>
          <Masonry gutter="10px">
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
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default UserPage;
