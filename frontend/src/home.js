import React, { useContext, useEffect, useState } from "react";
import Header from "./header";
import Product from "./components/product";
import { ProductsContext } from "./contexts/ProductsContext";
import useProducts from "./hooks/useProducts";
import { Auth } from "./contexts/Auth";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Home = () => {
  const { fetchData } = useProducts();
  const { user } = useContext(Auth);
  const { products } = useContext(ProductsContext); //is undefined on the second render
  useEffect(() => {
    const url = "/api/products";
    const method = "get";
    fetchData({ url, method, user });
  }, []);
  return (
    <div className=" min-h-screen  bg-slate-300">
      <Header />

      <div className="w-11/12  mx-auto my-1">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 4, 900: 5 }}>
          <Masonry gutter="10px">
            {products.map((product) => (
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

export default Home;
