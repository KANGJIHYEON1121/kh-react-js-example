import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  return (
    <div className="home-container">
      <form action="#">
        <h1>로그인</h1>
        <Input type={"text"} id={"id"} text={"아이디 : "} />
        <Input type={"text"} id={"id"} text={"비밀번호 : "} />
      </form>
      <Button text={"로그인"} type={"POSITIVE"} />
      <Button text={"회원가입"} onClick={() => nav("/new")} />
    </div>
  );
};

export default Home;
