import "./App.css";
import { useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);

  const onChangeBtn = (value) => {
    setCount(count + value);
  };

  return (
    <>
      <div className="App">
        <h1>CountApp Mini Project</h1>
        <section>
          <Viewer count={count} />
        </section>
        <section>
          <Controller onChangeBtn={onChangeBtn} />
        </section>
      </div>
    </>
  );
}

export default App;
