import useMyInput from "./useMyInput";

function HookExam(props) {
  // const [input1, onChange1] = useMyInput("");
  // const [input2, onChange2] = useMyInput("");

  return (
    <div>
      <h2>HookExam</h2>
      <input
        // value={input1}
        value={useMyInput[0]}
        name={"phone"}
        // onChange={onChange1}
        onChange={useMyInput[1]}
        placeholder={"전화번호 입력"}
      />
      <br />
      <input
        // value={input2}
        value={useMyInput[0]}
        name={"name"}
        // onChange={onChange2}
        onChange={useMyInput[1]}
        placeholder={"이름 입력"}
      />
    </div>
  );
}

export default HookExam;
