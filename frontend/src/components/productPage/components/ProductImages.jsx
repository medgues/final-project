import React, { Fragment } from "react";

import blue from "../assets/img/white.png";
import green from "../assets/img/grey.png";
import red from "../assets/img/black.png";
import design from "../assets/img/super.png";

const ProductImages = ({ data }) => {
  return (
    <Fragment>
      <div>
        <img src={blue} alt="blue shoe" className="shoe show " color="blue" />
        <img
          src={data.img}
          alt="blue shoe"
          className=" design show scale-40"
          color="blue"
        />
      </div>
      <div>
        <img src={red} alt="red shoe" className="shoe" color="red" />
        <img
          src={data.img}
          alt="blue shoe"
          className=" design show scale-40"
          color="blue"
        />
      </div>
      <div>
        <img src={green} alt="green shoe" className="shoe" color="green" />
        <img
          src={data.img}
          alt="blue shoe"
          className="design show scale-40"
          color="blue"
        />
      </div>
    </Fragment>
  );
};

export default ProductImages;
