import axios, { AxiosInstance } from "axios";
const instance: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});
export { instance };
