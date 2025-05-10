import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://vestipy-backend.vercel.app/",
});