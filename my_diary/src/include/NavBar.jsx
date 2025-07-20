import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="nav-container">
        <ul className="nav-menu">
          <div>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/todo/add">ADD</Link>
            </li>
            <li>
              <Link to="/todo/list">LIST</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
