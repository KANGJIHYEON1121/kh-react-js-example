import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import View from "./pages/View";
import "./App.css";
import { createContext, useReducer, useRef } from "react";
import Header from "./components/Header";

const mockData = [
  {
    id: 1,
    userId: "admin",
    name: "관리자",
    password: "123456",
    email: "admin@naver,com",
    createDate: new Date().toLocaleDateString("ko-KR"),
  },
  {
    id: 2,
    userId: "hgd",
    name: "홍길동",
    password: "123456",
    email: "hgd@naver,com",
    createDate: new Date().toLocaleDateString("ko-KR"),
  },
];

export const UserStateContext = createContext();
export const UserDispatchContext = createContext();

export function reducer(state, action) {
  switch (action.type) {
    case "INSERT":
      return [...state, action.data];
    case "UPDATE":
      return state.map((item) => {
        return item.id === action.data.id ? action.data : item;
      });
    case "DELETE":
      return state.filter((item) => item.id !== action.data);
    default:
      return state;
  }
}

function App() {
  const [userList, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 입력
  const insertUser = (userId, name, password, email, createDate) => {
    dispatch({
      type: "INSERT",
      data: { id: idRef.current++, userId, name, password, email, createDate },
    });
  };

  // 수정
  const updateUser = (id, userId, name, password, email, createDate) => {
    dispatch({
      type: "UPDATE",
      data: { id, userId, name, password, email, createDate },
    });
  };

  // 삭제
  const deleteUser = (id) => {
    dispatch({
      type: "DELETE",
      data: id,
    });
  };

  return (
    <>
      <UserStateContext.Provider value={userList}>
        <UserDispatchContext.Provider
          value={{ insertUser, deleteUser, updateUser }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/view" element={<View />} />
          </Routes>
        </UserDispatchContext.Provider>
      </UserStateContext.Provider>
    </>
  );
}

export default App;
