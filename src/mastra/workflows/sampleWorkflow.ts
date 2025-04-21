import { Workflow } from "@mastra/core";

export const sampleWorkflow = new Workflow({
  id: "sample-workflow",
  name: "Sample Workflow",
  description: "A simple greet → ask → summarize sequence.",
  steps: [
    {
      id: "greet",
      run: async ({ input }) => ({
        type: "text",
        text: `Hello, ${input.name || "user"}!`,
      }),
    },
    {
      id: "ask",
      run: async ({ input }) => ({
        type: "text",
        text: `How can I help you today?`,
      }),
    },
    {
      id: "summarize",
      run: async ({ input }) => ({
        type: "text",
        text: `Summary: ${JSON.stringify(input)}`,
      }),
    },
  ],
});
