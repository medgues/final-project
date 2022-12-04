import React, { useState } from "react";
import Header from "../header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../stateProvider";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, isLoading, login } = useLogin();

  const user = { email, password };
  const handelLogin = async () => {
    await login(user);
  };
  //old code might need it
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // let navigate = useNavigate();
  // const [{}, dispatch] = useStateValue();

  // Post request to login for USER AUTHENTICATION
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

  // Post request to register for USER REGISTRATION
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
    <div className="h-screen  bg-slate-300">
      <Header />
      <div className=" flex items-center justify-center">
        <div className="w-1/3 p-4 mt-20 max-w-sm h-full bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
          <div> {error && <p className="text-rose-600">{error}</p>}</div>
          <div className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 ">Log in</h5>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required=""
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 "
                    required=""
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 "
                >
                  Remember me
                </label>
              </div>
            </div>
            <div className="flex text-sm font-medium text-gray-500 ">
              <div>
                Not registered?{" "}
                <Link
                  className="text-blue-700 hover:cursor-pointer "
                  to={"/signup"}
                >
                  create account
                </Link>
              </div>
              <button
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={handelLogin}
              >
                Login to your account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
