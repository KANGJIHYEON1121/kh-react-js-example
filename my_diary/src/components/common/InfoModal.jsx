// InfoModal.jsx
import React from "react";
import "./InfoModal.css";

export default function InfoModal({
  show, // 모달 오픈 여부
  onHide, // 닫기 콜백
  title = "알림", // 모달 제목
  content = "저장 완료!", // 메시지
  callbackFn, // 버튼 클릭시 동작
}) {
  if (!show) return null;
  return (
    <div className="modal-complete-backdrop">
      <div className="modal-complete-box">
        <div
          style={{ fontWeight: "bold", fontSize: "1.2em", marginBottom: 12 }}
        >
          {title}
        </div>
        <div className="modal-complete-message">{content}</div>
        <button
          className="modal-complete-btn"
          onClick={() => {
            if (callbackFn) callbackFn();
            if (onHide) onHide();
          }}
        >
          확인
        </button>
      </div>
    </div>
  );
}
