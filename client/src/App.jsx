import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import UploadSongForm from "./Components/UploadSongForm";
import Home from "./Components/Home";
import Player from "./Components/Player";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="main-content -mt-16 mb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<UploadSongForm />} />
          </Routes>
        </div>
        <Player />
      </BrowserRouter>
    </div>
  );
};

export default App;
