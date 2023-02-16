import React from "react";
import { usePlayerContext } from "../Contexts/PlayerContext";

const Player = () => {
  const {
    currSong,
    playing,
    togglePlaying,
    seekPlayer,
    getPrevTrack,
    getNextTrack,
    volume,
    changeVolume,
    isMute,
    toggleMute,
  } = usePlayerContext();

  const getProgress = () => {
    return currSong.currTime;
  };

  return (
    <div className="flex items-center mx-2 h-16 py-2 w-full justify-center bg-base-100 fixed bottom-0 bg-opacity-60 backdrop-blur z-50">
      <div className="flex mx-4">
        <button
          className="btn btn-ghost btn-sm lg:btn-md btn-circle"
          onClick={getPrevTrack}
        >
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
        {playing ? (
          <button
            className="btn btn-ghost btn-sm lg:btn-md btn-circle"
            onClick={togglePlaying}
          >
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
        ) : (
          <button
            className="btn btn-ghost btn-sm lg:btn-md btn-circle"
            onClick={togglePlaying}
          >
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
        )}
        <button
          className="btn btn-ghost btn-sm lg:btn-md btn-circle"
          onClick={getNextTrack}
        >
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
      {currSong && (
        <div className="flex justify-start gap-2 lg:gap-4">
          <div className="avatar items-center">
            <div className="w-8 h-8 rounded">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="flex flex-col gap-0.5 lg:gap-1 justify-center">
            <h1 className="font-medium leading-none">{currSong.name}</h1>
            <p className="text-sm leading-none">{currSong.artist}</p>
          </div>
          <div className="hidden lg:flex lg:flex-col items-center gap-1.5 mb-2">
            <div className="flex justify-between w-full px-1">
              <time className="text-xs">
                {`${Math.floor(Math.floor(currSong.currTime) / 60)}:${(
                  Math.floor(currSong.currTime) % 60
                ).toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}`}
              </time>
              <time className="text-xs">
                {`${Math.floor(Math.floor(currSong.duration) / 60)}:${(
                  Math.floor(currSong.duration) % 60
                ).toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}`}
              </time>
            </div>
            <input
              type="range"
              min={0}
              max={currSong.duration || 0}
              value={getProgress()}
              step={0.01}
              onChange={seekPlayer}
              className="range range-xs w-96"
            />
          </div>
          <div className="flex items-center lg:gap-2 justify-around -ml-2 mr-4">
            <button className="btn btn-ghost btn-circle" onClick={toggleMute}>
              {!isMute ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
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
                    d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step={0.01}
              value={isMute ? 0 : volume}
              onChange={changeVolume}
              className="range range-xs"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
