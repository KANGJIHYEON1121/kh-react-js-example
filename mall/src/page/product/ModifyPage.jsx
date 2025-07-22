import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../include/Header";
import { useParams } from "react-router";
import ModifyComponent from "../../components/product/ModifyComponent";
import useCustomMove from "../../hooks/useCustomMove";

const ModifyPage = () => {
  const { pno } = useParams();
  const { moveToList, moveRead } = useCustomMove();

  return (
    <Container>
      <Header />
      <ModifyComponent pno={pno} />
    </Container>
  );
};

export default ModifyPage;
