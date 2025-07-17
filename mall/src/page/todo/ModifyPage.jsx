import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../include/Header";
import { useParams } from "react-router";
import ModifyComponent from "../../components/todo/ModifyComponent";
import useCustomMove from "../../hooks/useCustomMove";

const ModifyPage = () => {
  const { tno } = useParams();
  const { moveToList, moveRead } = useCustomMove();

  return (
    <Container>
      <Header />
      <ModifyComponent tno={tno} moveToList={moveToList} moveRead={moveRead} />
    </Container>
  );
};

export default ModifyPage;
