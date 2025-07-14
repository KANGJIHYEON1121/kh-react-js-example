import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={"/new"}>회원가입</Link> |{" "}
      <Link to={"/edit"}>회원정보 수정, 삭제</Link> |{" "}
      <Link to={"/view"}>회원 조회</Link>
    </div>
  );
};

export default Header;
