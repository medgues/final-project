import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PopupModel from "../components/PopupModel";
import { ProductsContext } from "../contexts/ProductsContext";
import useProducts from "../hooks/useProducts";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import MainHeader from "../components/MainHeader";
import ProductsGrid from "../components/Grid";
import ProfileSection from "../components/ProfileSection";
import { Auth } from "../contexts/Auth";

const ProfilePage = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState({});
  const { username } = useParams();
  const { products } = useContext(ProductsContext);
  const { fetchData } = useProducts();
  // const { user } = useContext(Auth);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    setData(products);
  }, [products]);
  const disactivateToggleIsTrue = user.username === username;
  useEffect(() => {
    const url = `/api/products/${username}`;
    const method = "getProfile";
    fetchData({ url, method, user, data: {} });
  }, []);

  const handelPopUpOpen = ({ postedBy, img, bg_img, title, id }) => {
    setProduct({ postedBy, img, bg_img, title, id });
    setShowModal(true);
  };

  return (
    <div className=" min-h-screen  bg-slate-300">
      <MainHeader />
      <div className="w-11/12  mx-auto my-1">
        <ProfileSection user={user} />
        <ProductsGrid
          data={data}
          disactivateToggleIsTrue={disactivateToggleIsTrue}
          handelPopUpOpen={handelPopUpOpen}
        />
        {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 4, 900: 5 }}>
          <Masonry gutter="10px">
            {data.map((product) => (
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
        </ResponsiveMasonry> */}
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
