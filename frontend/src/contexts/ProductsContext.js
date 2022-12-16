import { Axios } from "axios";
import React, { useEffect, useReducer, useState, createContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const ProductsContext = createContext();

//reducer
const ProductsReducer = (state, action) => {
  console.log("state", state);
  switch (action.type) {
    case "ALL_PRODUCTS":
      localStorage.setItem("posts", JSON.stringify(action.payload));
      return {
        ...state,
        products: action.payload,
      };
    case "USER_PRODUCTS": {
      console.log("action", action);
      return {
        ...state,
        userProducts: action.payload,
      };
    }
    case "SET_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    default:
      return { products: [] };
  }
};

export const ProductContextProvider = ({ children }) => {
  const initialState = { products: [], userProducts: [], product: [] };

  const [state, dispatch] = useReducer(ProductsReducer, initialState);
  // useEffect(() => {
  //   const posts = JSON.parse(localStorage.getItem("posts"));

  //   if (posts) {
  //     dispatch({ type: "ALL_PRODUCTS", payload: posts });
  //   }
  // }, []);

  return (
    <ProductsContext.Provider value={{ ...state, dispatch }}>
      {console.log("done")}
      {children}
    </ProductsContext.Provider>
  );
};
