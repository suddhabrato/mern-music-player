import React from "react";

const Player = () => {
  return (
    <div className="navbar justify-center bg-base-100 sticky bottom-0 bg-opacity-60 backdrop-blur z-50">
      <div className="mx-auto">
        <button to="/" className="btn btn-ghost normal-case text-xl">
          Music Player
        </button>
      </div>
    </div>
  );
};

export default Player;
