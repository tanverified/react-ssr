import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const root = document.getElementById("root");
ReactDOM.hydrateRoot(root, <App />);

reportWebVitals();
