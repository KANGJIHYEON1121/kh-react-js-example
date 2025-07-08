import { useState } from "react";
import InputWrap from "./components/InputWrap";
import User from "./components/User";
import "./components/default.css";

function App() {
  const [userList, setUserList] = useState([
    { name: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" },
    { name: "유저2", age: 27, gender: "여자", phone: "010-2674-0093" },
    { name: "유저3", age: 30, gender: "남자", phone: "010-3784-2834" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const registUser = () => {
    const user = { name, age, gender, phone };
    setUserList([...userList, user]);
    setName("");
    setAge("");
    setGender("");
    setPhone("");
  };

  const onUpdate = (inputPhone) => {
    let name = prompt("수정 이름: ");
    let age = prompt("수정 나이: ");
    let phone = prompt("수정 전화번호: ");

    setUserList(
      userList.map((user) => {
        return user.phone === inputPhone ? { ...user, name, age, phone } : user;
      })
    );
  };

  const onDelete = (phone) => {
    setUserList(
      userList.filter((user) => {
        return user.phone !== phone;
      })
    );
  };

  return (
    <div className="App">
      <h1>회원 정보 출력</h1>
      <hr></hr>
      <table className="member_tbl">
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item, index) => {
            return (
              <User
                key={"user" + index}
                item={item}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
            );
          })}
        </tbody>
      </table>
      <div className="regist-wrap">
        <h3>회원 정보 등록</h3>
        <hr></hr>
        <InputWrap text="이름" data={name} setData={setName} />
        <InputWrap text="나이" data={age} setData={setAge} />
        <InputWrap text="성별" data={gender} setData={setGender} />
        <InputWrap text="전화번호" data={phone} setData={setPhone} />
        <button onClick={registUser}>회원등록</button>
      </div>
    </div>
  );
}

export default App;
