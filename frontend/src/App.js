import React, { useEffect } from "react";
// import "./App.css";
import Home from "./pages/home";

import ProductDescription from "./productDescription";
import Checkout from "./checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./stateProvider";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Products from "./pages/Products";
import UserPage from "./pages/UserPage";
import CreateProduct from "./pages/CreateProduct";
import ProfilePage from "./pages/ProfilePage";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <Router>
      {/* Routes to different pages */}
      <Routes>
        {/* <Route exact path="/" element={<Home />}></Route> */}
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/profile/:username" element={<UserPage />} />{" "}
        <Route path="/createproduct" element={<CreateProduct />} />{" "}
        <Route path="/:username" element={<ProfilePage />} />{" "}
        <Route path="/product/edit/:id" element={<EditProduct />} />{" "}
        {/* <Route path="/upload" element={<Upload />} />{" "} */}
        {/* :id is a placeholder for the id of the product */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
