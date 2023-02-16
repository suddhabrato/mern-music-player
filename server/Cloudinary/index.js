import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const compressionSettings = {
  audio_codec: "mp3",
  audio_bitrate: "50k",
  audio_frequency: 44100,
  audio_channels: 2,
  overwrite: true,
};

export const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "MERN-Music-Player",
    resource_type: "video",
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
    transformation: compressionSettings,
  },
});

export default cloudinary;
