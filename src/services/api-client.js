import axios from "axios";

export default axios.create({
  baseURL:
    "https://www.googleapis.com/books/v1/users/106527888210163440438/bookshelves/1002/volumes?",

  params: {
    key: "AIzaSyAL_EgRFmV8iSUFDz3pKGcgCyFv_jWgLOo",
  },
});
