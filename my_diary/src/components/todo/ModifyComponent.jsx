import { useEffect, useState } from "react";
import "./ModifyComponent.css";
import { deleteOne, getOne, putOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import InfoModal from "../common/InfoModal";
import StarRating from "../common/StarRating";

const initState = {
  title: "",
  dueDate: "",
  score: "",
  weather: "",
  content: "",
  todoTomorrow: "",
};

const weatherOptions = [
  { value: "", label: "날씨 선택" },
  { value: "맑음", label: "맑음" },
  { value: "흐림", label: "흐림" },
  { value: "비", label: "비" },
  { value: "눈", label: "눈" },
  { value: "바람", label: "바람" },
];

const ModifyComponent = ({ tno, moveList, moveRead }) => {
  const [todo, setTodo] = useState({ ...initState });
  const [infoModalOn, setInfoModalOn] = useState(false);
  const [result, setResult] = useState(null); //모달 창을 위한 상태\
  const { moveToList, moveToRead } = useCustomMove(); //이동을 위한 기능들

  useEffect(() => {
    getOne(tno).then((data) => setTodo(data));
  }, [tno]);

  const handleClickModify = () => {
    putOne(todo).then((data) => {
      setResult("Modified"); // 또는 setResult(data.TNO) 등, 목적에 따라
      setInfoModalOn(true); // 모달 띄우기
    });
  };

  const handleClickDelete = () => {
    deleteOne(tno).then((data) => {
      setResult("Deleted");
      setInfoModalOn(true); // 모달 띄우기
    });
  };

  const closeModal = () => {
    if (result === "Deleted") {
      moveToList();
    } else {
      moveToRead(tno);
    }
  };

  const handleChangeTodo = (e) => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };

  return (
    <div className="modify-container">
      {result ? (
        <InfoModal
          show={infoModalOn}
          onHide={() => setInfoModalOn(false)}
          title={`ADD RESULT`}
          content={`New ${result} Added`}
          callbackFn={() => closeModal()}
        />
      ) : (
        <></>
      )}

      <form className="modify-form">
        <div className="form-group">
          <label>TITLE</label>
          <input
            type="text"
            name="title"
            value={todo.title}
            placeholder="제목을 입력하세요"
            onChange={handleChangeTodo}
            className="input"
          />
        </div>
        <div className="form-group">
          <label>DATE</label>
          <input
            name="dueDate"
            value={todo.dueDate}
            type="date"
            onChange={handleChangeTodo}
            className="input"
          />
        </div>
        <div className="form-group">
          <label>SCORE</label>
          <StarRating
            max={5}
            size={32}
            color="#fcc419"
            onSetRate={(rate) => setTodo({ ...todo, score: rate })}
            defaultRate={Number(todo.score) || 0}
          />
        </div>
        <div className="form-group">
          <label htmlFor="weather">오늘의 날씨</label>
          <select
            id="weather"
            name="weather"
            value={todo.weather}
            onChange={handleChangeTodo}
            className="add-input"
          >
            {weatherOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>CONTENT</label>
          <textarea
            name="content"
            value={todo.content}
            placeholder="내용을 입력하세요"
            onChange={handleChangeTodo}
            className="input"
            rows={4}
          />
        </div>
        <div className="form-group">
          <label>TODO TOMORROW</label>
          <input
            name="todoTomorrow"
            value={todo.todoTomorrow}
            type="text"
            placeholder="내일의 할 일"
            onChange={handleChangeTodo}
            className="input"
          />
        </div>
      </form>

      <div className="modify-btn-group">
        <button
          className="modify-btn"
          type="button"
          onClick={handleClickModify}
        >
          수정하기
        </button>
        <button
          className="delete-btn"
          type="button"
          onClick={handleClickDelete}
        >
          삭제하기
        </button>
        <button
          className="list-button"
          type="button"
          onClick={() => moveToList()}
        >
          목록가기
        </button>
      </div>
    </div>
  );
};

export default ModifyComponent;
