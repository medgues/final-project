import React, { useContext, useEffect, useState } from "react";
import Header from "./header";
import Product from "./product";
import axios from "axios";
import { useStateValue } from "./stateProvider";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "./contexts/Auth";

const Home = () => {
  const nav = useNavigate();
  const { user } = useContext(Auth);
  useEffect(() => {
    console.log("user", user);
    if (!user) {
      nav("/login");
    }
  }, []);
  // const { user } = useStateValue();
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //     axios
  //         .get("http://localhost:5000/products")
  //         .then((res) => {
  //             setProducts(res.data);
  //         })
  //         .catch((err) => {
  //             console.log(err);
  //         });
  // }, []);
  return (
    <div className=" min-h-screen  bg-slate-300">
      <Header />

      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-center">
        {/* map products with product cards */}
        {/* {products.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.amount}
                        rating={product.rating}
                    />
                ))} */}
        welcome to home
      </div>
    </div>
  );
};

export default Home;
