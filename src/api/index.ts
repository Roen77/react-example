import axios from "axios";

const BASE_URL = "http://localhost:3000/";

const request = axios.create({
  baseURL: BASE_URL,
});

export default request;
