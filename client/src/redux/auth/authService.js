// making http request
import axios from "axios";
const API_URL = import.meta.env.VITE_BASE_URL + "/api/users/";

// register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData, {
    withCredentials: true,
  });
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData, {
    withCredentials: true,
  });

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// logout user
const logout = async () => {
  const response = await axios.post(API_URL + "logout");
  if (response.data) {
    localStorage.removeItem("user");
  }
};

const authservice = {
  register,
  logout,
  login,
};

export default authservice;
