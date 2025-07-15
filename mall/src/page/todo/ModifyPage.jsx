import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../include/Header";
import { useParams } from "react-router";

const ModifyPage = () => {
  const { tno } = useParams();

  return (
    <Container>
      <Header />
      <div className="d-grid mt-3">
        <h1>To do Modify {tno}</h1>
      </div>
    </Container>
  );
};

export default ModifyPage;
