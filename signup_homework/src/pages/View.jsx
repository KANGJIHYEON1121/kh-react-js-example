import React, { useContext } from "react";
import "./View.css";
import { UserStateContext } from "../App";

const View = () => {
  const data = useContext(UserStateContext);

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
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default View;
