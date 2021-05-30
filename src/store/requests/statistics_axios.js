import axios from "axios";

const instance = axios.create({
  baseURL: "https://movies-api-gateway-547781d7.ew.gateway.dev",

});

export default instance;
