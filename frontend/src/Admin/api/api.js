import axios from "axios";

const API = axios.create({
  baseURL: "https://myweb-cwar.onrender.com",
});

export default API;
