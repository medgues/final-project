import React, { useContext } from "react";
import { useStateValue } from "../stateProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { ProductsContext } from "../contexts/ProductsContext";
import { Auth } from "../contexts/Auth";
import { useFetch } from "../hooks/useFetch";

const Product = ({
  handelPopUpOpen,
  id,
  title,
  image,
  price,
  rating,
  postedBy,
}) => {
  const navigate = useNavigate();
  const { user } = useContext(Auth);
  const { pathname } = useLocation();

  const { dispatch } = useContext(ProductsContext);
  const handelUserClick = (username) => {
    navigate(`/profile/${username}`);
  };
  const handelEditProductClick = (id) => {
    navigate(`/product/edit/${id}`);
  };

  // const [{ user }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  // PRODUCT CARD - displays product details on home/products page
  return (
    <div className="relative hover:cursor-pointer bg-white rounded-md">
      <img
        src={image}
        alt=""
        className=" w-full h-70 object-cover overflow-hidden rounded-t-md"
        onClick={() => navigate(`/product/${id - 1}`)}
      />
      {pathname !== "/" && user.username === postedBy && (
        <div
          className="tooltip absolute right-1 top-1 tooltip-left "
          data-tip="delete"
        >
          <a className=" text-white ">
            <FontAwesomeIcon
              onClick={() => handelPopUpOpen({ postedBy, image, title, id })}
              // href="#my-modal-2"
              className=" bg-slate-800  p-1 rounded"
              icon={solid("x")}
            />
          </a>
        </div>
      )}

      <div className="flex w-full  justify-start">
        <div className=" p-2 h-fit self-start">
          <p>{title}</p>
          <p onClick={() => handelUserClick(postedBy)}>by : {postedBy}</p>
          <p className="mt-1">
            <span>200 DA</span>
          </p>
          <div className="flex items-center justify-center bg-green-400 w-5 h-4 text-xs ">
            {rating}
          </div>
        </div>
      </div>
      <div className="flex w-full place-content-between px-1 pb-1">
        <button
          onClick={() => {
            axios(`http://localhost:5000/favourites/`, {
              method: "POST",
              data: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
              },
            }).then((res) => {
              console.log(res);
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {pathname !== "/" && user.username === postedBy && (
          <p className="flex gap-1 items-center">
            edit{" "}
            <FontAwesomeIcon
              className="p-1"
              onClick={() => handelEditProductClick(id)}
              icon={solid("pen-to-square")}
            />
          </p>
        )}

        {pathname === "/" && (
          <button onClick={addToBasket} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
