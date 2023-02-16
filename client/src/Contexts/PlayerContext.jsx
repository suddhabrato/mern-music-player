import { createContext, useContext, useState, useRef, useEffect } from "react";
import axios from "axios";

const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [currSong, setCurrSong] = useState();
  const [playing, setPlaying] = useState(false);
  const [songs, setSongs] = useState();

  const audioElem = useRef();

  useEffect(() => {
    if (audioElem.current) {
      if (playing) audioElem.current.play();
      else audioElem.current.pause();
    }
  }, [playing]);

  const getAllSongs = async () => {
    try {
      const res = await axios.get("/songs/all");
      setSongs(res.data.songs);
    } catch (err) {
      console.log(err);
    }
  };

  const getSong = async (id) => {
    try {
      const res = await axios.get(`/song/${id}`);
      return res.data.song;
    } catch (err) {
      console.log(err);
    }
  };

  const setSongInPlayer = async (id) => {
    setPlaying(false);
    const song = await getSong(id);
    song.currTime = 0.0;
    song.duration = 0.0;
    setCurrSong(song);
    setPlaying(true);
  };

  const togglePlaying = () => {
    setPlaying(!playing);
  };

  const whilePlaying = () => {
    const duration = audioElem.current.duration;
    const currTime = audioElem.current.currentTime;
    setCurrSong({
      ...currSong,
      currTime,
      duration,
    });
  };

  const seekPlayer = (evt) => {
    audioElem.current.currentTime = evt.target.value;
  };

  const getPrevTrack = (id) => {
    const index = songs.map((song) => song._id).indexOf(currSong._id);
    setSongInPlayer(songs.at(index - 1)._id);
  };

  const getNextTrack = (id) => {
    const index = songs.map((song) => song._id).indexOf(currSong._id);
    setSongInPlayer(songs.at((index + 1) % songs.length)._id);
  };

  return (
    <PlayerContext.Provider
      value={{
        currSong,
        setSongInPlayer,
        playing,
        togglePlaying,
        seekPlayer,
        songs,
        getAllSongs,
        getPrevTrack,
        getNextTrack,
      }}
    >
      {children}
      {currSong && (
        <audio
          src={currSong.audio_url}
          ref={audioElem}
          onTimeUpdate={whilePlaying}
        />
      )}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => useContext(PlayerContext);
