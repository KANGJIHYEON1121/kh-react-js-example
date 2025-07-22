import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { postAdd } from "../../api/ProductApi";
import FetchingModal from "../common/FetchingModal";
import InfoModal from "../common/InfoModal";
import useCustomMove from "../../hooks/useCustomMove";

const initState = { pname: "", pdesc: "", price: 0 };

export default function AddComponent() {
  const [product, setProduct] = useState({ ...initState });
  const [fetching, setFetching] = useState(false); // fetchingModal을 결정하는 state true 이면 보여주고 false 이면 숨기기
  const [result, setResult] = useState(null); // InfoModal 상태

  const { moveProductToList } = useCustomMove();

  const uploadRef = useRef(); //type =”file” 위치

  const handleChangeProduct = (e) => {
    product[e.target.name] = e.target.value;
    setProduct({ ...product });
  };

  // InfoModal 닫기
  const closeModal = () => {
    setResult(null);
    moveProductToList();
  };

  // 전송 버튼 클릭 시 data Api sercer 전송(insert)
  const handleClickAdd = (e) => {
    // 파일의 정보 [file1, file2]
    const files = uploadRef.current.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    //other data
    formData.append("pname", product.pname);
    formData.append("pdesc", product.pdesc);
    formData.append("price", product.price);

    // 데이터 전송이 true면 모달창 보여주고 전송이 잘 되었으면 모달창 닫기
    setFetching(true);
    postAdd(formData).then((data) => {
      setFetching(false);

      console.log(data);

      setResult(data.result);
    });
  };

  return (
    <Container className="p-5">
      {fetching ? (
        <FetchingModal />
      ) : (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              name="pname"
              type="text"
              value={product.pname}
              onChange={handleChangeProduct}
              placeholder="Enter pname"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              name="pdesc"
              value={product.pdesc}
              as="textarea"
              rows={7}
              style={{ resize: "none" }}
              onChange={handleChangeProduct}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              value={product.price}
              onChange={handleChangeProduct}
              placeholder="Enter price"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Files</Form.Label>
            <Form.Control ref={uploadRef} type="file" multiple="true" />
          </Form.Group>
        </Form>
      )}

      {result ? (
        <InfoModal
          show={true}
          title={`Product ADD RESULT`}
          content={`${result}번 등록완료`}
          callbackFn={() => closeModal()}
        />
      ) : (
        <></>
      )}

      <div className="d-flex justify-content-center gap-2 ">
        <Button variant="primary" type="button" onClick={handleClickAdd}>
          저장
        </Button>
      </div>
    </Container>
  );
}
