import axios from "axios";

const BASE_URL = "https://my-json-server.typicode.com/Roen77/portfolio-server/";

const request = axios.create({
  baseURL: BASE_URL,
});

export default request;
