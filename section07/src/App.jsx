import "./App.css";
import { useEffect, useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  // 상태값 변화
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 마운트 (App 생성되었을때 자동으로 실행하는 기능 : DB 자료 가져옴)
  useEffect(() => {
    // 마운트, count 변화가 있을때 마다 자동으로 작동
    console.log(`mount count = ${count} input = ${input}`);
  });

  // 이벤트 핸들러 처리
  const onChangeBtn = (value) => {
    setCount(count + value);
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <input
            type="text"
            name="phone"
            value={input}
            onChange={onChangeInput}
          />
        </section>
        <section>
          <Viewer count={count} />
          {count % 2 === 0 ? <Even /> : null}
        </section>
        <section>
          <Controller onChangeBtn={onChangeBtn} />
        </section>
      </div>
    </>
  );
}

export default App;
