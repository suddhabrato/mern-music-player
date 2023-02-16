import Song from "../Models/Song.js";

export const addNewSong = async (req, res, next) => {
  const song = new Song({
    name: req.body.name,
    artist: req.body.artist,
    audio_url: req.file.path,
  });
  await song.save();
  res.status(201).json({
    status: "success",
    data: song,
  });
};

export const getAllSongs = async (req, res, next) => {
  const songs = await Song.find({});

  res.status(200).json({
    status: "success",
    songs,
  });
};

export const getSongById = async (req, res, next) => {
  const song = await Song.findById(req.params.songId);
  res.status(200).json({ status: "success", song });
};
