/**
 * Mock API service for Agentic Solutions
 */

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  message: string;
  steps?: string[];
  status: 'success' | 'error';
}

export const chatWithAgent = async (prompt: string): Promise<ChatResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    message: `I've analyzed your request: "${prompt}". I'm starting a multi-step execution plan.`,
    steps: [
      "Gathering relevant data from integrations",
      "Reasoning about the optimal workflow",
      "Executing sub-tasks autonomously"
    ],
    status: 'success'
  };
};

export const listAgents = async () => {
  return [
    { id: 'strat-1', name: 'Strategy Agent', capability: 'Planning & Analysis' },
    { id: 'tech-1', name: 'Technical Agent', capability: 'Code & Systems' },
    { id: 'ops-1', name: 'Ops Agent', capability: 'Supply Chain & Logistics' }
  ];
};
