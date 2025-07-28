import axios from "axios";
import { API_SERVER_HOST } from "./TodoApi";
import jwtAxios from "../util/jwtUtil";

// 서버주소 및 URL(공통주소) 셋팅
// http://lo~:8080/api/todo
const prefix = `${API_SERVER_HOST}/api/member`;

// 로그인 정보 전송(Select) => access token, refresh token
export const loginPost = async (loginParam) => {
  // Content-Type을 x-www-form-urlencoded로 지정하여, 폼 데이터를 보내겠다는 의미이다.
  //axios는 json 데이터를 보내는데 기본방식인데 , form 데이터를 보낼때는 content-type 을 지정해야 한다.
  const header = { headers: { "Content-Type": "x-www-form-urlencoded" } };
  const form = new FormData();
  form.append("username", loginParam.email);
  form.append("password", loginParam.pw);
  const res = await axios.post(`${prefix}/login`, form, header);
  return res.data;
};

export const modifyMember = async (member) => {
  const res = await jwtAxios.put(`${prefix}/modify`, member);
  return res.data;
};
