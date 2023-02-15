import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilePicker from "./Components/FilePicker";
import Navbar from "./Components/Navbar";
import UploadSongForm from "./Components/UploadSongForm";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="main-content -mt-16">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/upload" element={<UploadSongForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
