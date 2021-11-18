import axios from "axios";
export default axios.create({
  baseURL: "https://localhost:44303/api", //TODO: should come from config - env variable
  headers: {
    "Content-Type": "application/json",
  },
});
