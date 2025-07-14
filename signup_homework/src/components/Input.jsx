import React from "react";
import "./Input.css";

const Input = ({ id, type, text, value, onChange, name }) => {
  return (
    <div className="input-box">
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
