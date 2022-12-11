import { Axios } from "axios";
import React, { useEffect, useReducer, useState, createContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const ProductsContext = createContext();
const initialState = { products: [], userProducts: [], product: [] };

//reducer
const ProductsReducer = (state, action) => {
  console.log("state", state);
  console.log("state", state, action);
  switch (action.type) {
    case "ALL_PRODUCTS":
      return { ...state, products: action.payload };
    case "USER_PRODUCTS": {
      return {
        ...state,
        userProducts: state.products.filter(
          (product) => product.postedBy === action.username
        ),
      };
    }
    case "SET_PRODUCT":
      return {
        ...state,
        product: state.products.filter((product) => product._id === action.id),
      };
    default:
      return { products: [] };
  }
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  return (
    <ProductsContext.Provider value={[state, dispatch]}>
      {children}
    </ProductsContext.Provider>
  );
};
