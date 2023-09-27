import Axios from "axios";
//기존 에러문제로 이미 만들어 놓음
const axios = Axios.create({
  baseURL: "http://localhost:3000"
});

export default axios;
