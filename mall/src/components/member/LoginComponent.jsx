import { React, useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, loginPostAsync } from "../../slices/loginSlice";
import useCustomLogin from "../../hooks/useCustomLogin";
import KakaoLoginComponent from "./KakaoLoginComponent";

const initState = {
  email: "",
  pw: "",
};

export default function LoginComponent() {
  const [loginParam, setLoginParam] = useState({ ...initState });

  const dispatch = useDispatch();

  const { doLogin, moveToPath } = useCustomLogin();

  const handleChange = (e) => {
    loginParam[e.target.name] = e.target.value;
    setLoginParam({ ...loginParam });
  };

  // username, password 서버 전송 -> access token -> cookie 넣고 -> loginSlice 금고 (email: 로그인한 진짜 이메일)
  const handleClickLogin = (e) => {
    doLogin(loginParam);
    // dispatch(login(loginParam)); // 동기화 호출
    // loginSlice의 비동기 호출
    dispatch(loginPostAsync(loginParam))
      .unwrap()
      .then((data) => {
        console.log("after unwrap");
        console.log(data);
        if (data.error) {
          alert("이메일과 패스워드를 다시 확인해주세요.");
          setLoginParam({ ...initState });
        } else {
          alert("로그인 성공");
          moveToPath("/");
        }
      });
  };

  return (
    <>
      <h2 className="text-center mb-3">Login Component</h2>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          name="email"
          type="email"
          placeholder="name@example.com"
          value={loginParam.email}
          onChange={handleChange}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
          name="pw"
          type="password"
          placeholder="Password"
          value={loginParam.pw}
          onChange={handleChange}
        />
      </FloatingLabel>
      <div className="d-grid gap-2 mt-3">
        <Button variant="outline-primary" onClick={handleClickLogin}>
          로그인
        </Button>
      </div>
      <KakaoLoginComponent />
    </>
  );
}
