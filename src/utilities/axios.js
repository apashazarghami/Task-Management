import axios from "axios";

const app = axios.create({
  baseURL: "http://46.100.46.149:8069/",
  headers: {
    "Content-Type": "application/json",
  },
});

export { app };
