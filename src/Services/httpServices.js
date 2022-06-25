import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
