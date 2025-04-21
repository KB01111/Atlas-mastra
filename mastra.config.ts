import { defineMastraConfig } from "mastra";

export default defineMastraConfig({
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 4111,
    logging: {
      level: "info",
      pretty: true,
    },
    cache: {
      enabled: false, // Set to true and configure for Redis/Mem0 if needed
    },
    fallback: {
      enabled: true,
      strategy: "round-robin", // or "random", "priority"
    },
  },
  llms: {
    default: "openai:gpt-4",
    models: [
      "openai:gpt-4",
      "openai:gpt-3.5-turbo",
      "anthropic:claude-3-opus-20240229",
      "google:gemini-pro",
      // add more as needed
    ],
  },
  memory: {
    provider: "in-memory", // Change to "mem0", "redis", etc. if needed
  },
});
