import React from "react";
import Modal from "react-bootstrap/Modal";

const FetchingModal = () => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial", height: "200px" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>MESSAGE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Loading ...... </p>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default FetchingModal;
