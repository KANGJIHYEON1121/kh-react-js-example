import React, { useEffect, useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { getList } from "../../api/todoApi";
import PageButton from "../common/PageButton";
import { data } from "react-router-dom";
import "./ListComponent.css";

const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totoalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

const ListComponent = () => {
  const { page, size, moveToList, moveToRead } = useCustomMove();
  const [serverData, setServerData] = useState(initState);

  useEffect(() => {
    getList({ page, size }).then((data) => {
      //   console.log(data);
      setServerData(data);
    });
  }, [page, size]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>NO</th>
            <th>TITLE</th>
            <th>DATE</th>
          </tr>
        </thead>
        <tbody>
          {serverData.dtoList.map((todo) => {
            return (
              <tr key={todo.tno} onClick={() => moveToRead(todo.tno)}>
                <td>{todo.tno}</td>
                <td>{todo.title}</td>
                <td>{todo.content}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <PageButton serverData={serverData} moveToList={moveToList} />
    </div>
  );
};

export default ListComponent;
