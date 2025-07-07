import { useState } from "react";
import "./List.css";
import ListItem from "./ListItem";

const List = ({ todos, onUpdate, onDelete }) => {
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

  return (
    <div className="List">
      <h4>Todo List </h4>
      <input
        value={search}
        placeholder="검색어를 입력하세요"
        onChange={onChangeInput}
      />
      <div className="list_wrapper">
        {filterTodos.map((data) => (
          <ListItem
            key={data.id}
            {...data}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
