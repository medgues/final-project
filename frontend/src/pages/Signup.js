import React, { useState } from "react";
import Header from "../components/MainHeader";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../stateProvider";
import { useSignupn } from "../hooks/useSignup";
import MainHeader from "../components/MainHeader";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  // //old code might need some of its features
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // let navigate = useNavigate();
  // const [{}, dispatch] = useStateValue();

  // // Post request to login for USER AUTHENTICATION
  // const login = () => {
  //   axios({
  //     method: "post",
  //     url: "http://localhost:5000/login",
  //     data: {
  //       email: email,
  //       password: password,
  //     },
  //   })
  //     .catch((err) => {
  //       console.log(err);
  //       alert(err.response.data);
  //     })
  //     .then((res) => {
  //       if (res.statusText === "OK") {
  //         console.log(res);
  //         dispatch({
  //           type: "SET_USER",
  //           user: email,
  //         });
  //         navigate("/");
  //       }
  //     });
  // };

  // // Post request to register for USER REGISTRATION
  // const register = () => {
  //   axios({
  //     method: "post",
  //     url: "http://localhost:5000/register",
  //     data: {
  //       email: email,
  //       password: password,
  //     },
  //   })
  //     .catch((err) => {
  //       console.log(err);
  //       alert(err.response.data);
  //     })
  //     .then((res) => {
  //       if (res.statusText === "Created") {
  //         console.log(res);
  //         dispatch({
  //           type: "SET_USER",
  //           user: email,
  //         });
  //         navigate("/");
  //       }
  //     });
  // };

  return (
    <div className="  bg-slate-300">
      <MainHeader />
      <div className=" flex items-center justify-center">
        <div className="w-2/3 p-4 my-20 max-w-sm h-full bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
