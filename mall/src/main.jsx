import "./index.css";
import App from "./App.jsx";
import store from "./store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

// createRoot(document.getElementById("root")).render(<App />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
