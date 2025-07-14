import React, { useContext, useState } from "react";
import Button from "../components/Button";
import "./Edit.css";
import { UserDispatchContext, UserStateContext } from "../App";

const Edit = () => {
  const [selectUser, setSelectUser] = useState(null);
  const [form, setForm] = useState({
    id: "",
    userId: "",
    name: "",
    password: "",
    email: "",
    createDate: "",
  });
  const data = useContext(UserStateContext);
  const { deleteUser, updateUser } = useContext(UserDispatchContext);

  return (
    <div>
      <table>
        <tr>
          <th>User NO</th>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>DATE</th>
        </tr>

        {data.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userId}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.createDate}</td>
              <td>
                <Button
                  text={"수정"}
                  type={"POSITIVE"}
                  onClick={() => {
                    setSelectUser(user);
                    setForm({
                      id: user.id,
                      userId: user.userId,
                      name: user.name,
                      password: user.password,
                      email: user.email,
                      createDate: user.createDate,
                    });
                  }}
                />
              </td>
              <td>
                <Button
                  text={"삭제"}
                  type={"NEGATIVE"}
                  onClick={() => deleteUser(user.id)}
                />
              </td>
            </tr>
          );
        })}
      </table>
      <div>
        <h1>회원정보 수정</h1>
        <input
          type="text"
          placeholder="아이디"
          value={form.userId}
          onChange={(e) => setForm({ ...form, userId: e.target.value })}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="이름"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />{" "}
        <br />
        <input
          type="email"
          placeholder="이메일"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <br />
        <Button
          text={"수정완료"}
          onClick={() => {
            updateUser(
              form.id,
              form.userId,
              form.name,
              form.password,
              form.email,
              form.createDate
            );
            setForm({
              id: "",
              userId: "",
              name: "",
              password: "",
              email: "",
              createDate: "",
            });
            setSelectUser(null);
          }}
        />
      </div>
    </div>
  );
};

export default Edit;
