import fs from "fs/promises";

// Example tool as a plain JS object/function for Mastra agent consumption
export const fileReaderTool = {
  name: "File Reader Tool",
  description: "Securely reads files for context.",
  parameters: {
    path: { type: "string", description: "The file path (must start with ./data/)" },
  },
  async execute({ path }: { path: string }) {
    // Security: Only allow reading from a safe directory (e.g., ./data)
    if (!path.startsWith("./data/")) {
      throw new Error("Access denied: Only ./data/ is allowed.");
    }
    const content = await fs.readFile(path, "utf-8");
    return { content };
  },
};
