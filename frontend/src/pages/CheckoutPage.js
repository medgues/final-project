import React, { useContext } from "react";
import MainHeader from "../components/MainHeader";

import CheckOutPageCard from "../components/CheckOutPageCard";
import { CardContext } from "../contexts/CardContext";

const CheckoutPage = () => {
  const { state } = useContext(CardContext);
  const handelDeleteProductFromCard = () => {};
  return (
    <div>
      <MainHeader />
      <div className="p-2 w-4/5 m-auto">
        {state.map((product) => {
          return (
            <CheckOutPageCard
              product={product}
              handelDeleteProductFromCard={handelDeleteProductFromCard}
            />
          );
        })}
        <button className="btn btn-active btn-primary m-1 w-full">
          place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
