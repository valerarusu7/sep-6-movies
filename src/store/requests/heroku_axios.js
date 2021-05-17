import axios from "axios";

const instance = axios.create({
  baseURL: "https://sep-6-movies-server.herokuapp.com",
});

export default instance;
