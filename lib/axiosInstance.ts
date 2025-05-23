import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // baseURL: "http://127.0.0.1:8090/",
});

export const updateAuthorizationHeader = async (token: string) => {
  if (token) {
    var formattedToken = token.replace(/['"]+/g, "");
    api.defaults.headers.common["Authorization"] = `Bearer ${formattedToken}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// Interceptor to add authorization headers
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    // Skip auth for login or when token is absent
    if (config.url !== "auth/signin" && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
