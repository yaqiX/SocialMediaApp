import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../Controller/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
// home with all posts
router.get("/", verifyToken, getFeedPosts);

/* UPDATE */