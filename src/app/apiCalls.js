import axios from "axios";

export const checkLogin = async (userData) => {
  try {
    const call = async () =>
      axios.post("http://localhost:3001/api/v1/user/login", userData);

    const response = await call();

    return response.data.status;
  } catch (err) {
    console.log(err);
  }
};
