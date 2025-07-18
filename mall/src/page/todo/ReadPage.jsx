import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../../include/Header";
import useCustomMove from "../../hooks/useCustomMove";

import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {
  const { tno } = useParams();
  const { moveToList, moveToModify } = useCustomMove();

  return (
    <Container>
      <Header />
      <ReadComponent
        tno={tno}
        moveToList={moveToList}
        moveToModify={moveToModify}
      />
    </Container>
  );
};

export default ReadPage;
