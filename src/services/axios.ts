import axios from "axios";

const customAxiosInstance = axios.create({
  baseURL: `https://${import.meta.env.VITE_RAPIDAPI_HOST}/`,
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
});

export default customAxiosInstance;