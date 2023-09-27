import Axios from "axios";
//기존 에러문제로 이미 만들어 놓음
const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

export default axios;
