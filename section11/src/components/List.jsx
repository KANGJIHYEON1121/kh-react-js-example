import { useState } from "react";
import "./List.css";
import ListItem from "./ListItem";
import { useMemo } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
  const { todos } = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeInput = (e) => {
    setSearch(e.target.value);
  };

  const getFilterTodos = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter((data) => {
      return data.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filterTodos = getFilterTodos();

  // 리렌더링 발생 시, todo 전체갯수, todo = isDone = true 갯수, todo = false 갯수
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    // console.log("useMeno 최적화 되고있습니다.");
    const totalCount = todos.length;
    const doneCount = todos.filter((data) => data.isDone === true).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List </h4>
      <div>
        <p>Total Count : {totalCount}</p>
        <p>Done Count : {doneCount}</p>
        <p>Not Done Count : {notDoneCount}</p>
      </div>
      <input
        value={search}
        placeholder="검색어를 입력하세요"
        onChange={onChangeInput}
      />
      <div className="list_wrapper">
        {filterTodos.map((data) => (
          <ListItem key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default List;
