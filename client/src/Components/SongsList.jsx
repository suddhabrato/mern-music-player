import React, { useEffect, useState } from "react";
import { usePlayerContext } from "../Contexts/PlayerContext";
import SongCard from "./SongCard";

const SongsList = () => {
  const { getAllSongs, songs } = usePlayerContext();

  useEffect(() => {
    getAllSongs();
  }, []);

  return (
    songs && (
      <div className="mt-16 p-8 flex justify-center flex-wrap gap-10">
        {songs.map((song) => (
          <SongCard
            key={song._id}
            id={song._id}
            name={song.name}
            artist={song.artist}
          />
        ))}
      </div>
    )
  );
};

export default SongsList;
