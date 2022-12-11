import React, { useContext, useEffect, useState } from "react";
import Header from "./header";
import Product from "./components/product";
import { ProductsContext } from "./contexts/ProductsContext";
import useProducts from "./hooks/useProducts";
import { Auth } from "./contexts/Auth";

const Home = () => {
  const { fetchData } = useProducts();
  const { user } = useContext(Auth);
  const [state, dispatch] = useContext(ProductsContext);
  useEffect(() => {
    const url = "/api/products";
    const method = "get";
    fetchData({ url, method, user });
  }, []);
  return (
    <div className=" min-h-screen  bg-slate-300">
      <Header />

      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-center">
        {state.products.map((product) => (
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

export default Home;
