import { useState } from "react";
import axios from "axios";
import { Auth } from "../contexts/Auth";
import { Navigate, useNavigate } from "react-router-dom";

export const useFetch = () => {
  const fetch = async ({ url, data, method, user }) => {
    if (method === "post") {
      try {
        const res = await axios.post(url, data, {
          headers: {
            authorisation: `Bearer ${user.token}`,
          },
        });
        return res;
      } catch (err) {
        const res = err;
        return res;
      }
    }
    if (method === "get") {
      console.log("user token", user);
      try {
        const res = await axios.get(url);
        console.log("fetch res", res);
        return res;
      } catch (err) {
        const res = err;
        console.log("fetch res", res);
        return res;
      }
    }
  };

  return { fetch };
};
