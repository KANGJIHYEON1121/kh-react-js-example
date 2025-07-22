import axios from "axios";
import React from "react";
import { API_SERVER_HOST } from "../api/TodoApi";

// 서버주소 및 URL(공통주소) 셋팅
// http://lo~:8080/api/todo
const prefix = `${API_SERVER_HOST}/api/products`;

// 1.선택   http://localhost:8080/api/todo/tno(100)
export const getOne = async (pno) => {
  const result = await axios.get(`${prefix}/${pno}`);
  return result.data;
};

// 2.페이징 리스트
export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const result = await axios.get(`${prefix}/list`, { params: { page, size } });

  return result.data;
};

// 3.삽입 (파일을 전송할때는 header을 추가 해줘야 된다.)
export const postAdd = async (product) => {
  //파일업로드 할때에는 기본값인 ‘Content-Type’: ‘application/json’을 ‘multipart/form-data’ 변경해야됨
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const result = await axios.post(`${prefix}/`, product, header);
  return result.data;
};

// 4.수정
export const putOne = async (pno, product) => {
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  const result = await axios.put(`${prefix}/${pno}`, product, header);
  return result.data;
};

// 5.삭제
export const deleteOne = async (pno) => {
  const result = await axios.delete(`${prefix}/${pno}`);
  return result.data;
};
