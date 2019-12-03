import ReactDOM from "react-dom";
import React from "react";
// import App from "./app";
import App from './app1'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
