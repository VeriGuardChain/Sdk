import { v4 as uuidv4 } from "uuid";
import { db } from "../utils/db.js";

export function createPost({ content, cost }) {
  if (cost < 1) {
    throw new Error("Minimum cost is $1");
  }

  const post = {
    id: uuidv4(),
    content,
    cost,
    engagementScore: 0,
    earnings: 0,
    createdAt: new Date()
  };

  db.posts.push(post);
  return post;
}

export function getPosts() {
  return db.posts;
}
