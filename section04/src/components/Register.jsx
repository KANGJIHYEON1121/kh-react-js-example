import { useState } from "react";

function Register() {
  // 값을 입력해서 화면세 보여야되는 곳은 useState
  // 값이 계속 유지되어야 되는곳 useState
  // 값이 변동이 되면 화면이 리렌더링 useState
  const [input, setInput] = useState({
    name: "",
    birth: "",
    contry: "",
    bio: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>회원가입</h1>
      <div>
        <div>
          <input
            value={input.name}
            name={"name"}
            onChange={onChange}
            placeholder={"이름"}
          />
        </div>
        <div></div>
        <input
          value={input.birth}
          name={"birth"}
          onChange={onChange}
          type="date"
        />
        <div>
          <select value={input.contry} name={"contry"} onChange={onChange}>
            <option value=""></option>
            <option value="kr">한국</option>
            <option value="us">미국</option>
            <option value="uk">영국</option>
          </select>
          {input.contry}
        </div>
        <div></div>
      </div>
      <textarea value={input.bio} name={"bio"} onChange={onChange} />
    </div>
  );
}

export default Register;
