import { useState, useRef, useReducer, useCallback } from "react";
import "./App.css";
import Edit from "./components/Edit";
import Header from "./components/Header";
import List from "./components/List";
import Exam from "./components/Exam";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "react 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "spring boot 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "oracle 공부하기",
    date: new Date().getTime(),
  },
];

function reducer(todos, action) {
  switch (action.type) {
    case "INSERT":
      return [action.data, ...todos];
    case "UPDATE":
      return todos.map((data) => {
        return data.id === action.data.tagId
          ? { ...data, isDone: !data.isDone }
          : data;
      });
    case "DELETE":
      return todos.filter((data) => {
        return data.id !== action.data.tagId;
      });

    default:
      return todos;
  }
}

function App() {
  // 상태관리
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // useCallback 해당되는 이벤트 핸들러 함수 1번만 동작
  // 삽입하기
  const onInsert = useCallback((content) => {
    dispatch({
      type: "INSERT",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  }, []);

  // 수정하기
  const onUpdate = useCallback((tagId) => {
    dispatch({ type: "UPDATE", data: { tagId } });
  }, []);

  // 삭제하기
  const onDelete = useCallback((tagId) => {
    dispatch({ type: "DELETE", data: { tagId } });
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <Exam />
        <Edit onInsert={onInsert} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
