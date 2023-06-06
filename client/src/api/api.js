import axios from "axios";

export const loginUser = async (userData) => {
  try {
    const response = await axios.post("/api/users/login", userData);
    if (response.data) {
      //const user = localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    alert(message);
  }
};
