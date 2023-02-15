import React from "react";
import FilePicker from "./FilePicker";

const UploadSongForm = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>

      <div className="hero-content flex-col lg:gap-16 lg:flex-row-reverse text-neutral-content">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Upload Your Favourite Songs!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name of Song</span>
              </label>
              <input
                type="text"
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
                type="text"
                placeholder="Eagles"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Audio File</span>
              </label>
              <FilePicker />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Song</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSongForm;
