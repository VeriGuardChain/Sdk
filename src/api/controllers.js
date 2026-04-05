import { createPost, getPosts } from "../core/postEngine.js";
import { trackEngagement } from "../core/engagementTracker.js";

export const createPostController = (req, res) => {
  try {
    const post = createPost(req.body);
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getPostsController = (req, res) => {
  res.json(getPosts());
};

export const engageController = (req, res) => {
  try {
    const result = trackEngagement(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
