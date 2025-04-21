import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";

export const ChatAgent = new Agent({
  name: "Chat Agent",
  instructions: "You are a helpful assistant. Answer user questions accurately and concisely.",
  model: openai("gpt-4"),
  // Optionally, add tools or memory here
});
