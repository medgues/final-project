import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./stateProvider";
import reducer, { initialState } from "./reducer";
import { AuthProvider } from "./contexts/Auth";
import { ProductContextProvider } from "./contexts/ProductsContext";
import { CardContextProvider } from "./contexts/CardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContextProvider>
    <AuthProvider>
      <CardContextProvider>
        <StateProvider reducer={reducer} initialState={initialState}>
          <App />
        </StateProvider>
      </CardContextProvider>
    </AuthProvider>
  </ProductContextProvider>
);
