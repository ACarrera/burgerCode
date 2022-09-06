import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "", //url de nuestra api,
});
export default axiosInstance;
