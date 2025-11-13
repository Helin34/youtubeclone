import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "58a0500f75msh29ef8394219cf7fp188221jsn81bfee5df178",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
});

export default api;
