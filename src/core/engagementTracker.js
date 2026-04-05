import { db } from "../utils/db.js";
import { calculateReward } from "./rewardEngine.js";

export function trackEngagement({ postId, type }) {
  const post = db.posts.find(p => p.id === postId);
  if (!post) throw new Error("Post not found");

  let score = 0;

  switch (type) {
    case "like":
      score = 1;
      break;
    case "view":
      score = 0.2;
      break;
    case "share":
      score = 2;
      break;
  }

  post.engagementScore += score;

  // update earnings
  post.earnings = calculateReward(post.engagementScore);

  return post;
}
