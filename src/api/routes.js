import express from "express";
import {
  createPostController,
  getPostsController,
  engageController
} from "./controllers.js";

const router = express.Router();

router.post("/post", createPostController);
router.get("/posts", getPostsController);
router.post("/engage", engageController);

export default router;
