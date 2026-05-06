import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://real-time-chat-application-jg43.onrender.com/api",
  withCredentials: true,
});