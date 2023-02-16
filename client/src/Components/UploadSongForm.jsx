import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

const UploadSongForm = () => {
  const [newSong, setNewSong] = useState({ name: "", artist: "", audio: "" });
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setSubmitting(true);
    const formData = new FormData();
    formData.append("audio", newSong.audio);
    formData.append("name", newSong.name);
    formData.append("artist", newSong.artist);
    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    setSubmitting(false);
    navigate("/");
  };

  const handleFileSelect = (event) => {
    setNewSong({ ...newSong, audio: event.target.files[0] });
  };
  const handleChange = (evt) => {
    setNewSong({ ...newSong, [evt.target.name]: evt.target.value });
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      {submitting ? (
        <Loader />
      ) : (
        <div className="hero-content flex-col lg:gap-16 lg:flex-row-reverse">
          <div className="text-center lg:text-left  text-neutral-content">
            <h1 className="text-5xl font-bold">Upload Your Favourite Songs!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name of Song</span>
                </label>
                <input
                  name="name"
                  type="text"
                  value={newSong.name}
                  onChange={handleChange}
                  placeholder="Hotel California"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Artist</span>
                </label>
                <input
                  name="artist"
                  type="text"
                  value={newSong.artist}
                  onChange={handleChange}
                  placeholder="Eagles"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Audio File</span>
                </label>
                <input
                  name="audio"
                  type="file"
                  onChange={handleFileSelect}
                  className="file-input file-input-bordered rounded-xl w-full max-w-xs"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Add Song
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadSongForm;
