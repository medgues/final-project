import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PopupModel from "../components/PopupModel";
import Product from "../components/product";
import { Auth } from "../contexts/Auth";
import { ProductsContext } from "../contexts/ProductsContext";
import Header from "../components/MainHeader";
import { useFetch } from "../hooks/useFetch";
import useProducts from "../hooks/useProducts";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import MainHeader from "../components/MainHeader";
import ProductsGrid from "../components/Grid";
import ProfileSection from "../components/ProfileSection";

const UserPage = () => {
  const [data, setData] = useState([]);
  const { products } = useContext(ProductsContext);
  const { username } = useParams();
  const { fetchData } = useProducts();
  useEffect(() => {
    setData(products);
  }, [products]);
  useEffect(() => {
    const url = `/api/products/profile/${username}`;
    const method = "getUserProducts";
    fetchData({ url, method, data: {} });
  }, []);

  return (
    <div className=" min-h-screen  bg-slate-300">
      <MainHeader />

      <div className="w-11/12 mx-auto my-1">
        {/* <ProfileSection /> */}
        <ProductsGrid data={data} />
        {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 4, 900: 5 }}>
          <Masonry gutter="10px">
            {data.map((product) => (
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

export default UserPage;
