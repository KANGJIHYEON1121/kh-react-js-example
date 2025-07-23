import { useEffect, useState, useRef } from "react";
import { Container, Card, Row, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { deleteOne, getOne, putOne } from "../../api/ProductApi";
import FetchingModal from "../common/FetchingModal";
import { API_SERVER_HOST } from "../../api/TodoApi";
import useCustomMove from "../../hooks/useCustomMove";
import InfoModal from "../common/InfoModal";

const initState = {
  pno: 0,
  pname: "",
  pdesc: "",
  price: 0,
  delFlag: false,
  uploadFileNames: [],
};

const host = API_SERVER_HOST;

const ModifyComponent = ({ pno }) => {
  const [product, setProduct] = useState(initState);
  const [fetching, setFetching] = useState(false);
  //결과 모달(result 결과에 따라서 화면이동에 사용 result = 'Modified'or 'Deleted'
  const [result, setResult] = useState(null);

  //이동용 함수
  const { moveProductToList } = useCustomMove();

  const uploadRef = useRef(); //파일위치저장

  useEffect(() => {
    setFetching(true);
    getOne(pno).then((data) => {
      setProduct(data);
      setFetching(false);
    });
  }, [pno]);

  // 입력값 변화 있을때 상태값 체크
  const handleChangeProduct = (e) => {
    product[e.target.name] = e.target.value;
    setProduct({ ...product });
  };

  // 기존에 있는 이미지 이름에서 삭제하고 싶은 이미지 이름을 삭제
  const deleteOldImages = (imageName) => {
    const resultFileNames = product.uploadFileNames.filter(
      (fileName) => fileName !== imageName
    );

    product.uploadFileNames = resultFileNames;
    setProduct({ ...product });
  };

  // 상품 수정
  const handleClickModify = () => {
    const files = uploadRef.current.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    //other data
    formData.append("pname", product.pname);
    formData.append("pdesc", product.pdesc);
    formData.append("price", product.price);
    formData.append("delFlag", product.delFlag);

    for (let i = 0; i < product.uploadFileNames.length; i++) {
      formData.append("uploadFileNames", product.uploadFileNames[i]);
    }
    setFetching(true);

    //수정 처리
    putOne(pno, formData).then((data) => {
      setResult("Modified");
      setFetching(false);
    });
  };

  // 상품 삭제
  const handleClickDelete = () => {
    setFetching(true);
    deleteOne(pno).then((data) => {
      setResult("Deleted");
      setFetching(false);
    });
  };

  // InfoModal 닫기
  const closeModal = () => {
    setResult(null);
    moveProductToList();
  };

  return (
    <Container className="p-5">
      {fetching ? <FetchingModal /> : <></>}

      {result ? (
        <InfoModal
          show={true}
          title={`Product DELETE RESULT`}
          content={`${product.pno}번 ${result} 성공`}
          callbackFn={() => closeModal()}
        />
      ) : (
        <></>
      )}

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>PNO</Form.Label>
          <Form.Control value={product.pno} type="text" disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>PNAME</Form.Label>
          <Form.Control
            name="pname"
            value={product.pname}
            type="text"
            placeholder="Enter name"
            onChange={handleChangeProduct}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>PRICE</Form.Label>
          <Form.Control
            name="price"
            type="number"
            value={product.price}
            placeholder="Enter price"
            onChange={handleChangeProduct}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>DESCRIPTION</Form.Label>
          <Form.Control
            name="pdesc"
            defaultValue={product.pdesc}
            as="textarea"
            rows={5}
            onChange={handleChangeProduct}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Files</Form.Label>
          <Form.Control ref={uploadRef} type="file" multiple="true" />
        </Form.Group>
      </Form>
      <Row className="d-flex justify-content-center mt-5 gap-4">
        {product.uploadFileNames.map((imgFile, i) => (
          <>
            <Card style={{ width: "14rem", height: "14rem" }} key={i}>
              <Card.Body>
                <img
                  alt="img"
                  style={{ width: "10rem", height: "10rem" }}
                  src={`${host}/api/products/view/s_${imgFile} `}
                />
              </Card.Body>
              <Button
                variant="primary"
                onClick={() => deleteOldImages(imgFile)}
              >
                DELETE
              </Button>
            </Card>
          </>
        ))}
      </Row>
      <div className="d-flex justify-content-center gap-2 mt-5">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleClickDelete}
        >
          DELETE
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={handleClickModify}
        >
          MODIFY
        </button>
        <button
          className="btn btn-primary"
          type="text"
          onClick={moveProductToList}
        >
          LIST
        </button>
      </div>
    </Container>
  );
};
export default ModifyComponent;
