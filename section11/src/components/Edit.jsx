import { useRef, useState, useContext } from "react";
import "./Edit.css";
import { TodoDispatchContext } from "../App";

const Edit = () => {
  const { onInsert } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const inputRef = useRef("");

  const onChangeInput = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content.trim() === "") {
      alert("값을 입력해주세요.");
      inputRef.current.focus();
      return;
    }
    onInsert(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Edit">
      <input
        type="text"
        value={content}
        placeholder="새로운 Todo"
        onChange={onChangeInput}
        onKeyDown={onKeyDown}
        ref={inputRef}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Edit;
