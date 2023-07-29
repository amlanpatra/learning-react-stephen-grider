import axios from "axios";

const KEY = "AIzaSyBuL6vcWlsFow9zYRS1N3xnz0VA5MtE17g";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
