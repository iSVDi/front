import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/index.css";
import { Provider } from "react-redux";
import { store } from "./state/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
