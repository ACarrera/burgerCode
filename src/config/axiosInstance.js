import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  // baseURL:
  //   "mongodb+srv://BurguerCodeBE:*****@burgercodebe.yrljjl4.mongodb.net/?retryWrites=true&w=majority", //url de nuestra api,
});
export default axiosInstance;
