import { useSearchParams } from "react-router-dom";

const New = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateNameParam = (name, age) => {
    setSearchParams({ name, age });
  };

  return (
    <div>
      New ? {searchParams.get("name")} <br />
      New ? {searchParams.get("age")} <br />
      <button
        onClick={() => {
          updateNameParam("kjh", 20);
        }}
      >
        변경
      </button>
    </div>
  );
};

export default New;
