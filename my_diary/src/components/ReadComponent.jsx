import React, { useEffect, useState } from "react";
import "./ReadComponent.css";
import { getOne } from "../api/todoApi";
import StarRating from "./common/StarRating";

const initData = {
  tno: 0,
  title: "",
  dueDate: null,
  score: "",
  weather: "",
  content: "",
  todoTomorrow: "",
};

const ReadComponent = ({ tno, moveToList, moveToModify }) => {
  const [todo, setTodo] = useState(initData);

  useEffect(() => {
    getOne(tno).then((data) => {
      console.log(data);
      setTodo(data);
    });
  }, [tno]);

  return (
    <div className="read-diary-container">
      <form action="#">
        <h2 className="read-diary-header">일기장</h2>
        <div className="read-diary-grid">
          <div>
            <label className="read-diary-label" htmlFor="title">
              제목
            </label>
            <input
              className="read-diary-input title-input"
              type="text"
              id="title"
              value={todo.title}
              readOnly
            />
          </div>

          <div>
            <label className="read-diary-label" htmlFor="date">
              날짜
            </label>
            <input
              className="read-diary-input"
              type="date"
              id="date"
              value={todo.dueDate}
              readOnly
            />
          </div>

          <div>
            <label className="read-diary-label" htmlFor="rating">
              별점 (오늘 하루 점수)
            </label>
            <StarRating
              max={5}
              size={32}
              defaultRate={Number(todo.score) || 0}
              read={true}
            />
          </div>

          <div>
            <label className="read-diary-label" htmlFor="weather">
              오늘의 날씨
            </label>
            <input
              className="read-diary-input"
              type="tt"
              id="weather"
              value={todo.weather}
              readOnly
            />
          </div>

          <div className="read-diary-fullwidth">
            <label className="read-diary-label" htmlFor="content">
              내용
            </label>
            <textarea
              className="read-diary-textarea"
              id="content"
              rows="6"
              value={todo.content}
              readOnly
            />
          </div>

          <div className="read-diary-fullwidth">
            <label className="read-diary-label" htmlFor="todo">
              내일의 할 일
            </label>
            <textarea
              className="read-diary-textarea"
              id="todo"
              rows="3"
              readOnly
              value={todo.todoTomorrow}
            />
          </div>
        </div>
      </form>

      <div className="button-box">
        <button
          className="edit-btn"
          onClick={() => {
            moveToModify(tno);
          }}
        >
          수정하기
        </button>
        <button
          className="list-btn"
          onClick={() => {
            moveToList(tno);
          }}
        >
          목록보기
        </button>
      </div>
    </div>
  );
};

export default ReadComponent;
