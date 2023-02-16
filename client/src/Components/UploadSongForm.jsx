import React from "react";

const UploadSongForm = () => {
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(evt);
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>

      <div className="hero-content flex-col lg:gap-16 lg:flex-row-reverse">
        <div className="text-center lg:text-left  text-neutral-content">
          <h1 className="text-5xl font-bold">Upload Your Favourite Songs!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form
              encType="multipart/form-data"
              action="http://localhost:3000/upload"
              method="POST"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name of Song</span>
                </label>
                <input
                  name="name"
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
                  name="artist"
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
                  className="file-input file-input-bordered rounded-xl w-full max-w-xs"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSongForm;
