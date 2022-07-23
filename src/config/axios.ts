import axios, { AxiosInstance } from "axios";
const instance: AxiosInstance = axios.create({
  baseURL: "https://musala-test-be.herokuapp.com/",
});
export { instance };
