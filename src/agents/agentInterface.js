export function agentPost(agentName, content) {
  return {
    agent: agentName,
    content,
    timestamp: new Date()
  };
}
