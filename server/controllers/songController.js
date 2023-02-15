import multer from "multer";
import cloudinary from "../Cloudinary/index.js";
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
