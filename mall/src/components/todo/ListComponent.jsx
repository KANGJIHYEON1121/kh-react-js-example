import React, { useEffect, useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { getList } from "../../api/TodoApi";
import { Container } from "react-bootstrap";
import PageComponent from "../common/PageComponent";

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
  const { page, size, moveToList, moveToRead, refresh } = useCustomMove();
  const [serverData, setServerData] = useState(initState);

  useEffect(() => {
    getList({ page, size }).then((data) => {
      setServerData(data);
    });
  }, [page, size, refresh]);

  return (
    <>
      <Container className="px-5 justify-content-center mt-4">
        <table class="table table-hover">
          <thead>
            <tr className="text-center">
              <th className="p-3">TNO</th>
              <th className="p-3">TITLE</th>
              <th className="p-3">DATE</th>
              <th className="p-3">WRITER</th>
            </tr>
          </thead>
          <tbody>
            {serverData.dtoList.map((todo) => {
              return (
                <tr
                  key={todo.tno}
                  className="text-center"
                  onClick={() => {
                    moveToRead(todo.tno);
                  }}
                >
                  <td className="p-2">{todo.tno}</td>
                  <td className="p-2">{todo.title}</td>
                  <td className="p-2">{todo.dueDate}</td>
                  <td className="p-2">{todo.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
      <PageComponent serverData={serverData} moveToList={moveToList} />
    </>
  );
};

export default ListComponent;
