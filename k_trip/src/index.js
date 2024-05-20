import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./Navbar";
import Routing from "./Routing";

import "./styles/nav-bar.css";

import Modal from "react-modal";

Modal.setAppElement("#root");
//Nav bar
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Navbar />
    <Routing />
  </React.StrictMode>
);

reportWebVitals();
