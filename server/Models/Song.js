import { Schema, model } from "mongoose";
const songSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      default: "Unknown Artist",
    },
    audio_url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Song = model("Song", songSchema);

export default Song;
