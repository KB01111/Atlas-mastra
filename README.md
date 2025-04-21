# Atlas-Mastra Backend

This is the core backend for the Atlas-Mastra AI platform, built with Mastra, TypeScript, and OpenAI integration.

## Features
- Modular agent framework (ChatAgent, WorkflowAgent)
- Secure tool execution (web search, file reading, code execution)
- Workflow orchestration
- Strong TypeScript typing and linting

## Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.development.example` to `.env.development` and add your API keys.
4. Start the development server:
   ```bash
   npm run dev
   ```

## Security
- Sensitive files and directories (e.g., `node_modules/`, `.env*`, build outputs) are gitignored.
- File access is sandboxed to `./data/`.

## Project Structure
- `src/mastra/agents/` — Agent definitions
- `src/mastra/tools/` — Tool implementations
- `src/mastra/workflows/` — Workflow logic
- `src/mastra/index.ts` — Runtime registration

## License
MIT
