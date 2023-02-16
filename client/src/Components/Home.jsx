import React from "react";
import { Link } from "react-router-dom";
import SongsList from "./SongsList";

const Home = () => {
  return (
    <div className="flex mt-16 flex-col">
      <div
        className="hero h-[40vh]"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/2191013/pexels-photo-2191013.jpeg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-4xl lg:text-5xl font-bold">
              Add Your Favourite Songs
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link
              to="/upload"
              className="btn btn-accent rounded-full btn-outline px-6"
            >
              Upload New Song
            </Link>
          </div>
        </div>
      </div>
      <Link
        to="/upload"
        className="fixed right-6 z-50 drop-shadow-2xl bottom-24 btn btn-secondary btn-circle btn-lg"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </Link>
      <SongsList />
    </div>
  );
};

export default Home;
