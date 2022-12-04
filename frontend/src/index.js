import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./stateProvider";
import reducer, { initialState } from "./reducer";
import { AuthProvider } from "./contexts/Auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <StateProvider reducer={reducer} initialState={initialState}>
        <App />
      </StateProvider>
    </AuthProvider>
  </React.StrictMode>
);
