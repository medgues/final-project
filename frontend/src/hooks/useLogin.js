import { useContext, useState } from "react";
import axios from "axios";
import { Auth } from "../contexts/Auth";
import { Navigate, useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const { dispatch } = useContext(Auth);
  const navigate = useNavigate();

  const login = async (user) => {
    setisLoading(true);
    setError(null);
    try {
      await axios.post("/api/user/login", user).then((res) => {
        console.log(res, "res");
        if (res.statusText === "OK") {
          localStorage.setItem("user", JSON.stringify(res.data));
          dispatch({ type: "LOGIN", payload: res.data });
          navigate("/");
        }
      });
    } catch (err) {
      setisLoading(true);
      setError(err.response.data.err);
      console.log("err", err.response.data.err);
    }
  };

  return { error, isLoading, login };
};
