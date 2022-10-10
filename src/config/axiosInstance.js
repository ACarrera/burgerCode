import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/", //url de nuestra api,
});
export default axiosInstance;
