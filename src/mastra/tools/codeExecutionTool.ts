// Example tool as a plain JS object/function for Mastra agent consumption
export const codeExecutionTool = {
  name: "Code Execution Tool",
  description: "Runs code in a sandboxed environment.",
  parameters: {
    code: { type: "string", description: "The code to execute" },
    language: { type: "string", description: "The programming language" },
  },
  async execute({ code, language }: { code: string; language: string }) {
    // TODO: Integrate with a secure sandbox (do NOT eval directly)
    // For now, just echo input
    return {
      output: `Would execute ${language} code: ${code}`,
    };
  },
};
