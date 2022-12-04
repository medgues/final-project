import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../contexts/Auth";

export const useLogout = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(Auth);
  const logOut = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return { logOut };
};
