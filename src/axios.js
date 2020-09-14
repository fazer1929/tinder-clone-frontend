import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinderbackend.herokuapp.com",
});

export default instance;
