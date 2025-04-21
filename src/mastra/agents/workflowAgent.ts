import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai";

export const WorkflowAgent = new Agent({
  name: "Workflow Agent",
  instructions: "You are a workflow orchestrator. Trigger and manage multi-step workflows as needed.",
  model: openai("gpt-4"),
  // Optionally, add tools or memory here
});
