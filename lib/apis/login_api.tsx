import axios from "axios";
import { updateAuthorizationHeader } from "../axiosInstance";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const login = async (
  username: string,
  password: string,
  setUser: any
) => {
  try {
    const response = await axios
      .post(`${BASE_URL}/api/v1/users/login/`, {
        username,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
          updateAuthorizationHeader(res.data.access);
        }
        return res;
      });
    return response.data;
  } catch (error) {
    console.error("Login API error:", error);
    throw error;
  }
};
