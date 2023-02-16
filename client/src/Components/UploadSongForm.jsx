import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { usePlayerContext } from "../Contexts/PlayerContext";

const UploadSongForm = () => {
  const navigate = useNavigate();
  const { setSongInPlayer } = usePlayerContext();
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
            <Formik
              initialValues={{
                name: "",
                artist: "",
                audio: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.name) errors.name = "Name of song is required";

                if (!values.artist)
                  errors.artist = "Name of artist is required";

                if (!values.audio) errors.audio = "Audio file is required";
                if (
                  values.audio &&
                  values.audio.type.substring(0, 5) !== "audio"
                )
                  errors.audio = "This file format is not accepted.";
                if (values.audio.size > 8388608)
                  errors.audio =
                    "File too Large. Please upload files less than 8mb";
                return errors;
              }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                console.log(values);
                const formData = new FormData();
                formData.append("audio", values.audio);
                formData.append("name", values.name);
                formData.append("artist", values.artist);
                try {
                  const res = await axios.post("/upload", formData, {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                  });
                  console.log(res);
                  setSongInPlayer(res.data.data._id);
                } catch (err) {
                  resetForm();
                  console.log(err);
                }
                setSubmitting(false);
                navigate("/");
              }}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name of Song</span>
                    </label>
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Hotel California"
                      className="input input-bordered"
                    />
                    <ErrorMessage
                      name="name"
                      className="label text-sm text-red-500"
                      component={"div"}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Artist</span>
                    </label>
                    <Field
                      name="artist"
                      id="artist"
                      type="text"
                      placeholder="Eagles"
                      className="input input-bordered"
                    />
                    <ErrorMessage
                      name="artist"
                      className="label text-sm text-red-500"
                      component={"div"}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Audio File</span>
                    </label>
                    <input
                      name="audio"
                      id="audio"
                      accept="audio/*"
                      className="file-input file-input-bordered rounded-xl w-full max-w-xs"
                      type="file"
                      onChange={(event) => {
                        setFieldValue("audio", event.currentTarget.files[0]);
                      }}
                    />
                    <ErrorMessage
                      name="audio"
                      className="label text-sm text-red-500"
                      component={"div"}
                    />
                  </div>
                  <div className="form-control mt-6 items-center justify-center">
                    <button
                      type="submit"
                      className={`btn btn-primary ${
                        isSubmitting && "loading"
                      } w-full`}
                    >
                      {!isSubmitting && "Add Song"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSongForm;
