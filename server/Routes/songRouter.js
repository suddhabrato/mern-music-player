import express from "express";
import multer from "multer";
import { storage } from "../Cloudinary/index.js";
import { addNewSong } from "../controllers/songController.js";

const router = express.Router();
const upload = multer({ storage: storage });

router.post("/upload", upload.single("audio"), addNewSong);

export default router;
