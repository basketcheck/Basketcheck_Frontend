import axios from "axios";
const ServerURL =
  "https://port-0-basketcheckbackend-node-9zxht12blq9gr7pi.sel4.cloudtype.app/";

export const customAxios = axios.create({
  baseURL: `${ServerURL}`,
  headers: {
    accessToken: localStorage.getItem("accessToken"),
  },
});
