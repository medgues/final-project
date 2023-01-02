import React from "react";
import bg from "../../src/assets/shirt.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const CheckOutPageCard = ({ product, handelDeleteProductFromCard }) => {
  console.log(product);
  return (
    <div
      className="relative hover:cursor-pointer flex flex-row items-center m-2 w-full p-2 rounded-md"
      style={{ backgroundImage: product.css }}
    >
      <div
        className="tooltip absolute right-1 top-1 tooltip-left "
        data-tip="delete"
      >
        <a className=" text-white ">
          <FontAwesomeIcon
            onClick={handelDeleteProductFromCard}
            className=" bg-slate-800  p-1 rounded"
            icon={solid("x")}
          />
        </a>
      </div>
      <div className="relative h-full">
        <img src={product.img} alt="" className=" top-10 absolute scale-40" />
        <img
          src={bg}
          alt=""
          className=" w-full h-44 object-cover overflow-hidden rounded-md"
        />
      </div>
      <div className="flex w-full  justify-start">
        <div className=" p-2 h-fit self-start">
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>by : {product.postedBy}</p>
          <p className="mt-1">
            <span>200 DA</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPageCard;
