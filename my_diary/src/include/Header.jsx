import React from "react";
import NavBar from "./NavBar";

const headerStyle = {
  width: "1000px",
  textAlign: "center",
};

const Header = () => {
  return (
    <div>
      <div style={headerStyle}>
        <h1>나의 일기장</h1>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
