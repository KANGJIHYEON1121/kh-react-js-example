import { useReducer, useState } from "react";

function reducer(count, action) {
  switch (action.type) {
    case "PLUS":
      return count + action.data;
    case "MINUS":
      return count - action.data;
    default:
      return count;
  }
}

const Exam = () => {
  //   const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);

  const plusBtn = () => {
    dispatch({ type: "PLUS", data: 1 });
  };

  const minusBtn = () => {
    dispatch({ type: "MINUS", data: 1 });
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={plusBtn}>+</button>
      <button onClick={minusBtn}>-</button>
    </div>
  );
};

export default Exam;
