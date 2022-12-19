import React from "react";

const Info = ({ data }) => {
  const shoeName = (
    <div className="shoeName">
      <div>
        <h1 className="big">{data.title}</h1>
        <span className="new">new</span>
      </div>
      <h3 className="small">Designed By :{data.postedBy}</h3>
    </div>
  );

  const description = (
    <div className="description">
      <h3 className="title">Product Info</h3>
      <p className="text">
        Ensure a comfortable running session by wearing this pair of cool
        running shoes from Nike.
      </p>
    </div>
  );
  const KindTaps = (
    <div className="tabs pt-1">
      <a className="tab tab-sm tab-lifted tab-active">t-shirt</a>
      <a className="tab tab-sm tab-lifted ">long sleevs</a>
      <a className="tab tab-sm tab-lifted">hoddie</a>
    </div>
  );
  const ColorContainer = (
    <div className="color-container">
      <h3 className="title">Color</h3>
      <div className="colors">
        <span className="color active" primary="#2175f5" color="blue"></span>
        <span className="color" primary="#f84848" color="red"></span>
        <span className="color" primary="#29b864" color="green"></span>
      </div>
    </div>
  );

  const SizeContainer = (
    <div className="size-container">
      <h3 className="title">size</h3>
      <div className="sizes">
        <span className="size">s</span>
        <span className="size">m</span>
        <span className="size active">l</span>
        <span className="size">xl</span>
        <span className="size">xxl</span>
      </div>
    </div>
  );

  const BuySection = (
    <div className="buy-price">
      <a href="/#" className="buy">
        <i className="fas fa-shopping-cart"></i>Add to card
      </a>
      <div className="price">
        <i className="fas fa-dollar-sign"></i>
        <h1>149.99</h1>
      </div>
    </div>
  );

  return (
    <div className="info">
      {shoeName}
      {description}
      {KindTaps}
      {ColorContainer}
      {SizeContainer}
      {BuySection}
    </div>
  );
};

export default Info;
