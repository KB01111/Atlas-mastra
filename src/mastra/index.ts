import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';

import { ChatAgent, WorkflowAgent } from './agents';
import { sampleWorkflow } from './workflows/sampleWorkflow';
import { webSearchTool } from './tools/webSearchTool';
import { fileReaderTool } from './tools/fileReaderTool';
import { codeExecutionTool } from './tools/codeExecutionTool';

// Attach tools to agents
ChatAgent.tools = {
  webSearchTool,
  fileReaderTool,
  codeExecutionTool,
};

WorkflowAgent.tools = {
  webSearchTool,
  fileReaderTool,
  codeExecutionTool,
};

export const mastra = new Mastra({
  agents: { ChatAgent, WorkflowAgent },
  workflows: { sampleWorkflow },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
