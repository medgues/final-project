import React, { useContext, useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import MainHeader from "../components/MainHeader";
import lodash from "lodash";
import Product from "../components/product";
import { Auth } from "../contexts/Auth";
import { ProductsContext } from "../contexts/ProductsContext";
import useProducts from "../hooks/useProducts";
import SubHeader from "../components/SubHeader";
import "../grid.css";
import "../Home.scss";

import ProductsGrid from "../components/Grid";

const Home = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  const { fetchData } = useProducts();
  const { user } = useContext(Auth);
  const { products } = useContext(ProductsContext); //is undefined on the second render
  useEffect(() => {
    setData(products);
  }, [products]);

  useEffect(() => {
    const url = "/api/products";
    const method = "get";
    fetchData({ url, method, user });
  }, []);

  useEffect(() => {
    setData(data.filter((d) => d.title.toLowerCase().indexOf(filter) !== -1));
  }, [filter]);

  const search = (e) => setFilter(e.target.value);
  const shuffle = () => setData(() => lodash.shuffle(data));
  const newest = () => {
    setData(() => [...products].reverse());
  };
  return (
    <div className=" main">
      <MainHeader />
      <SubHeader search={search} shuffle={shuffle} newest={newest} />

      <div className="w-11/12  mx-auto my-1">
        <ProductsGrid data={data} />
        {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 4, 900: 5 }}>
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
        </ResponsiveMasonry> */}
      </div>
    </div>
  );
};

export default Home;
