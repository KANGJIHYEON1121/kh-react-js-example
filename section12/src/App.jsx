import "./App.css";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { getEmotionImages } from "./util/getEmotionImages";

function App() {
  const nav = useNavigate();

  const goToPage = (link) => {
    nav(`/${link}`);
  };

  return (
    <>
      <div>
        <h1>Header</h1>
      </div>
      <nav className="App">
        <Link to={"/"}>HOME</Link> | <Link to={"/new"}>NEW</Link> |{" "}
        <Link to={"/diary"}>DIARY</Link> | <Link to={"/edit"}>EDIT</Link>
      </nav>
      <br />
      <div className="App">
        <button onClick={() => goToPage("")}>HOME</button>
        <button onClick={() => goToPage("new")}>NEW</button>
        <button onClick={() => goToPage("diary/2")}>DIARY</button>
        <button onClick={() => goToPage("edit/3")}>EDIT</button>
      </div>
      <br />
      <div className="App">
        <img src="/emotion11.png" alt="" />
        <img src="/emotion12.png" alt="" />
        <img src="/emotion13.png" alt="" />
        <img src="/emotion14.png" alt="" />
        <img src="/emotion15.png" alt="" />
      </div>

      <br />
      <div className="App">
        <img src={getEmotionImages(1)} alt="" />
        <img src={getEmotionImages(2)} alt="" />
        <img src={getEmotionImages(3)} alt="" />
        <img src={getEmotionImages(4)} alt="" />
        <img src={getEmotionImages(5)} alt="" />
      </div>

      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new/*" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <div>
        <h1>Footer</h1>
      </div>
    </>
  );
}

export default App;
