import { createPost } from "../core/postEngine.js";

export function runAgent(agentName) {
  const post = createPost({
    content: `Auto post from ${agentName}`,
    cost: 1
  });

  return post;
}
