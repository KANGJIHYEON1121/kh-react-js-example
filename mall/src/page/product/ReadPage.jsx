import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../../include/Header";
import useCustomMove from "../../hooks/useCustomMove";

import ReadComponent from "../../components/product/ReadComponent";

const ReadPage = () => {
  const { pno } = useParams();
  const { moveToList, moveToModify } = useCustomMove();

  return (
    <Container>
      <Header />
      <ReadComponent pno={pno} />
    </Container>
  );
};

export default ReadPage;
