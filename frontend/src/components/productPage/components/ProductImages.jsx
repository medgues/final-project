import React, { Fragment } from "react";

import blue from "../assets/img/white.png";
import green from "../assets/img/grey.png";
import red from "../assets/img/black.png";
import design from "../assets/img/react.png";

const ProductImages = () => {
  return (
    <Fragment>
      <div>
        <img src={blue} alt="blue shoe" className="shoe show " color="blue" />
        <img
          src={design}
          alt="blue shoe"
          className="shoe show  z-50 scale-40"
          color="blue"
        />
      </div>
      <div>
        <img src={red} alt="red shoe" className="shoe" color="red" />
        <img
          src={design}
          alt="blue shoe"
          className="shoe show z-50  scale-40"
          color="blue"
        />
      </div>
      <div>
        <img src={green} alt="green shoe" className="shoe" color="green" />
        <img
          src={design}
          alt="blue shoe"
          className="shoe show z-50 scale-40"
          color="blue"
        />
      </div>
    </Fragment>
  );
};

export default ProductImages;
