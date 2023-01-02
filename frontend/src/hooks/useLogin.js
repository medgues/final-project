import { useContext, useState } from "react";
import axios from "axios";
import { Auth } from "../contexts/Auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useFetch } from "./useFetch";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const { dispatch } = useContext(Auth);
  const navigate = useNavigate();
  const login = async ({ data, url }) => {
    setisLoading(true);
    setError(null);
    const res = await axios.post(url, data);
    if (res.status === 200) {
      localStorage.setItem("user", JSON.stringify(res.data));
      console.log("res res", res);
      dispatch({ type: "LOGIN", payload: res.data });
      navigate("/");
    }
    if (res.status !== 200) {
      setisLoading(true);
      setError(res.response.data.err);
      console.log("err, login", res.response.data.err);
    }
    // try {
    //   await axios.post("/api/user/login", user).then((res) => {
    //     console.log(res, "res");
    //     if (res.statusText === "OK") {
    //       localStorage.setItem("user", JSON.stringify(res.data));
    //       dispatch({ type: "LOGIN", payload: res.data });
    //       navigate("/");
    //     }
    //   });
    // } catch (err) {
    //   setisLoading(true);
    //   setError(err.response.data.err);
    //   console.log("err", err.response.data.err);
    // }
  };

  return { error, isLoading, login };
};
