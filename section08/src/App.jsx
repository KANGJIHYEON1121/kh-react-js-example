import { useState, useRef } from "react";
import "./App.css";
import Edit from "./components/Edit";
import Header from "./components/Header";
import List from "./components/List";

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

function App() {
  // 상태관리
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  // 삽입하기
  const onInsert = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };
    setTodos([...todos, newTodo]);
  };

  // 수정하기
  const onUpdate = (tagId) => {
    setTodos(
      todos.map((data) => {
        return data.id === tagId ? { ...data, isDone: !data.isDone } : data;
      })
    );
  };

  // 삭제하기
  const onDelete = (tagId) => {
    setTodos(
      todos.filter((data) => {
        return data.id !== tagId;
      })
    );
  };

  return (
    <>
      <div className="App">
        <Header />
        <Edit onInsert={onInsert} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
