import React from "react";

const Player = () => {
  return (
    <div className="flex items-center h-16 p-2 w-full justify-center bg-base-100 sticky bottom-0 bg-opacity-60 backdrop-blur z-50">
      <div className="flex mx-2">
        <button className="btn btn-ghost btn-circle">
          <svg
            className="h-5 w-5 -scale-x-100"
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
              d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"
            />
          </svg>
        </button>

        <button className="btn btn-ghost btn-circle">
          <svg
            className="w-5 h-5"
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
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        </button>

        <button className="btn btn-ghost btn-circle">
          <svg
            className="w-5 h-5"
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
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </button>

        <button className="btn btn-ghost btn-circle">
          <svg
            className="h-5 w-5"
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
              d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-start gap-2 lg:gap-4">
        <div className="avatar items-center">
          <div className="w-8 h-8 rounded">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex flex-col gap-0">
          <h1 className="text-md font-medium">Hotel California</h1>
          <p className="text-sm">Eagles</p>
        </div>
        <div className="hidden lg:flex items-end mb-2">
          <input
            type="range"
            min="0"
            max="100"
            className="range range-xs w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
