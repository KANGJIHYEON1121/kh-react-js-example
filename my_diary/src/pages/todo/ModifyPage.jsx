import React from "react";
import Header from "../../include/Header";
import ModifyComponent from "../../components/todo/ModifyComponent";
import { useParams } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";

const ModifyPage = () => {
  const { tno } = useParams();
  const { moveToList, moveRead } = useCustomMove();

  return (
    <div>
      <Header />
      <ModifyComponent tno={tno} moveToList={moveToList} moveRead={moveRead} />
    </div>
  );
};

export default ModifyPage;
