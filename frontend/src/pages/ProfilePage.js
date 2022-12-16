import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddProductForm from "../components/AddProductForm";
import PopupModel from "../components/PopupModel";
import Product from "../components/product";
import { ProductsContext } from "../contexts/ProductsContext";
import Header from "../header";
import useProducts from "../hooks/useProducts";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useFetch } from "../hooks/useFetch";

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState({});
  const { username } = useParams();
  const { userProducts, dispatch } = useContext(ProductsContext);
  const { fetch } = useFetch();
  const user = JSON.parse(localStorage.getItem("user"));
  const url = `/api/products/${username}`;
  const method = "getProfile";

  const getuserProducts = async () => {
    const res = await fetch({ url, method, user, data: {} });
    dispatch({ type: "USER_PRODUCTS", payload: res.data });
  };

  useEffect(() => {
    getuserProducts();
  }, []);

  const handelPopUpOpen = ({ postedBy, image, title, id }) => {
    setProduct({ postedBy, image, title, id });
    setShowModal(true);
  };

  return (
    <div className=" min-h-screen  bg-slate-300">
      <Header />
      <div className="w-11/12  mx-auto my-1">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 4, 900: 5 }}>
          <Masonry gutter="10px">
            {userProducts.map((product) => (
              <Product
                handelPopUpOpen={handelPopUpOpen}
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

      <PopupModel
        product={product}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default ProfilePage;
