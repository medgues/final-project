import React, { useEffect, useReducer } from "react";
const { createContext } = require("react");

export const Auth = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("action payload", action.payload);
      return { user: action.payload };
    case "SIGNUP":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return { user: null };
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);
  console.log("State", state);

  return (
    <Auth.Provider value={{ ...state, dispatch }}>{children}</Auth.Provider>
  );
};
