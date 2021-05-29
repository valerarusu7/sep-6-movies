import axios from "axios";

const instance = axios.create({
  baseURL: "https://europe-central2-black-balancer-310707.cloudfunctions.net",
});

export default instance;
