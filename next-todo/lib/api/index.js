import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:3000/api/todos"
});

export default axios;
