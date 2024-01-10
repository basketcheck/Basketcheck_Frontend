import axios from "axios";
const ServerURL = process.env.REACT_APP_API_KEY;

export const customAxios = axios.create({
  baseURL: `${ServerURL}`,
  headers: {
    accessToken: localStorage.getItem("accessToken"),
  },
});
