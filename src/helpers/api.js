import axios from "axios";

export default axios.create({
  baseURL: "https://my-base-url",
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
});