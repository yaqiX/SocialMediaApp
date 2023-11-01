import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

/* CONFIG */
const __filename = fileURLToPath (import .meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();

// MIDDLEWEAR
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.morgan("*")
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());
app.use("/assets", express.static(path.json(__dirname, 'public/assets')));


/* FILE STORAGE */
// copied from multer doc
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "public/assets");
    },
    filename: function (req, file, cb){
        cb(null,file.originalname);
    },
});

const upload = multer({ storage })





