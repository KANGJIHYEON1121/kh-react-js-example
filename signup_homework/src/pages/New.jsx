import React, { useContext, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import "./New.css";
import { UserDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

const Eidt = () => {
  const { insertUser } = useContext(UserDispatchContext);
  const nav = useNavigate();

  const [input, setInput] = useState({
    userId: "",
    name: "",
    password: "",
    email: "",
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput({ ...input, [name]: value });
  };

  const onSubmit = (input) => {
    insertUser(
      input.userId,
      input.name,
      input.password,
      input.email,
      new Date().toLocaleDateString("ko-KR")
    );

    //뒤로가기 방지하면서 / 페이지 이동
    nav("/view", { replace: true });
  };

  return (
    <div className="new-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>회원가입</h1>
        <Input
          type={"text"}
          name="userId"
          value={input.userId}
          id={"userId"}
          text={"아이디 : "}
          onChange={onChangeInput}
        />
        <Input
          type={"text"}
          name="name"
          value={input.name}
          id={"name"}
          text={"이름 : "}
          onChange={onChangeInput}
        />
        <Input
          type={"password"}
          name="password"
          value={input.password}
          id={"password"}
          text={"비밀번호 : "}
          onChange={onChangeInput}
        />
        <Input
          type={"email"}
          name="email"
          value={input.email}
          id={"email"}
          text={"이메일 : "}
          onChange={onChangeInput}
        />
        <Button
          text={"회원가입"}
          type={"POSITIVE"}
          onClick={(e) => onSubmit(input)}
        />
      </form>
    </div>
  );
};

export default Eidt;
