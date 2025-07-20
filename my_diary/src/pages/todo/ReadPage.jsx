import React, { useCallback } from "react";
import Header from "../../include/Header";
import ReadComponent from "../../components/ReadComponent";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";

const ReadPage = () => {
  const { tno } = useParams();
  const nav = useNavigate();
  const [queryParams] = useSearchParams();
  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
  const queryStr = createSearchParams({ page, size }).toString();

  const { moveToList, moveToModify } = useCustomMove();

  return (
    <div>
      <Header />
      <ReadComponent
        tno={tno}
        moveToModify={moveToModify}
        moveToList={moveToList}
      />
    </div>
  );
};

export default ReadPage;
