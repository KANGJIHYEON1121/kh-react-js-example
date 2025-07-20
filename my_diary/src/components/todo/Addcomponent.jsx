import { useState, React } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { postAdd } from "../../api/todoApi";
import "./Addcomponent.css";
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

export default function AddComponent() {
  const [todo, setTodo] = useState({ ...initState });
  const [result, setResult] = useState(null);
  const { moveToList } = useCustomMove();
  const [infoModalOn, setInfoModalOn] = useState(false);

  const handleChangeTodo = (e) => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };

  //저장버튼클릭
  const handleClickAdd = () => {
    postAdd(todo)
      .then((result) => {
        console.log(result);
        setResult(result.TNO); //결과 데이터 변경
        setInfoModalOn(true);
        setTodo({ ...initState }); // 초기화
      })
      .catch((e) => {
        console.error(e);
      });
    console.log(todo);
  };

  const closeModal = () => {
    setInfoModalOn(false);
    moveToList();
  };

  return (
    <div className="add-container">
      <InfoModal
        show={infoModalOn}
        onHide={() => setInfoModalOn(false)}
        title={`ADD RESULT`}
        content={`New ${result} Added`}
        callbackFn={() => closeModal()}
      />
      <form className="add-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            id="title"
            name="title"
            type="text"
            value={todo.title}
            onChange={handleChangeTodo}
            placeholder="제목을 입력하세요"
            className="add-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">날짜</label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            value={todo.dueDate}
            onChange={handleChangeTodo}
            className="add-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="score">별점(0~5)</label>
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
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            name="content"
            value={todo.content}
            onChange={handleChangeTodo}
            rows="6"
            placeholder="일기 내용을 입력하세요"
            className="add-textarea"
          />
        </div>
        <div className="form-group">
          <label htmlFor="todoTomorrow">내일의 할 일</label>
          <textarea
            id="todoTomorrow"
            name="todoTomorrow"
            value={todo.todoTomorrow}
            onChange={handleChangeTodo}
            rows="3"
            placeholder="내일의 할 일을 입력하세요"
            className="add-textarea"
          />
        </div>
      </form>
      <div className="btn-group">
        <button type="button" className="add-btn" onClick={handleClickAdd}>
          저장
        </button>
        <button
          type="button"
          className="add-list-btn"
          onClick={() => moveToList({ page: 1 })}
        >
          목록
        </button>
      </div>
    </div>
  );
}
