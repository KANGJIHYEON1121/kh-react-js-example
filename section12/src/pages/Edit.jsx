import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  return <div>Edit url = {params.id}</div>;
};

export default Edit;
