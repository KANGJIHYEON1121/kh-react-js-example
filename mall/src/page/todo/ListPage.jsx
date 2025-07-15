import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../include/Header";
import ListComponent from "../../components/todo/ListComponent";

const ListPage = () => {
  return (
    <Container>
      <Header />
      <div className="d-grid mt-3">
        <ListComponent />
      </div>
    </Container>
  );
};

export default ListPage;
