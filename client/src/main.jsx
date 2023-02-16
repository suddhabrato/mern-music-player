import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App";
import "./index.css";

// axios.defaults.baseURL = "http://localhost:3000/api/v1";
axios.defaults.baseURL = "https://mern-music-player-server.onrender.com/api/v1";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "*";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
