import React from "react";
import "./PageButton.css";

const PageButton = ({ serverData, moveToList }) => {
  const pageNumbers = [];
  for (let i = 1; i <= serverData.totalCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {serverData.prev ? (
        <button
          className="pagination-btn"
          onClick={() => moveToList({ page: serverData.prevPage })}
        >
          이전
        </button>
      ) : null}

      {serverData.pageNumList.map((pageNum) =>
        serverData.current === pageNum ? (
          <button
            key={pageNum}
            className={`pagination-btn ${
              pageNum.current === pageNum ? "active" : ""
            }`}
            onClick={() => moveToList({ page: pageNum })}
          >
            {pageNum}
          </button>
        ) : (
          <button
            key={pageNum}
            className="pagination-btn"
            onClick={() => moveToList({ page: pageNum })}
          >
            {pageNum}
          </button>
        )
      )}

      {serverData.next && (
        <button
          className="pagination-btn"
          onClick={() => moveToList({ page: serverData.nextPage })}
        >
          다음
        </button>
      )}
    </div>
  );
};

export default PageButton;
