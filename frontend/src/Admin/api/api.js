import axios from "axios";

const API = axios.create({
  baseURL: "https://myweb-cwar.onrender.com/api",
});

export default API;
