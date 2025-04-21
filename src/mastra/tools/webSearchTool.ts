// Example tool as a plain JS object/function for Mastra agent consumption
export const webSearchTool = {
  name: "Web Search Tool",
  description: "Queries a search API for results.",
  parameters: {
    query: { type: "string", description: "The search query" },
  },
  async execute({ query }: { query: string }) {
    // TODO: Integrate with your preferred search API (e.g., SerpAPI, Bing, etc.)
    return {
      results: [`Search for: ${query}`],
    };
  },
};
