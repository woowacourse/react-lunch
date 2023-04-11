import React from "react";
import ReactDOM from "react-dom/client";
import { $ } from "./utils/selector";
import App from "./App";

const root = ReactDOM.createRoot($("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
