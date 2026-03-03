export type TabID = 'dashboard' | 'council' | 'agents' | 'brain';

export interface Agent {
  id: string;
  name: string;
  role: 'Primary' | 'Secondary';
  status: 'Running' | 'Idle' | 'Blocked' | 'Reviewing';
  task: string;
  branch: string;
  progress: number;
}

export interface CouncilMember {
  id: string;
  role: 'Optimist Strategist' | 'Devil\'s Advocate' | 'Neutral Analyst';
  color: string;
  bgAccent: string;
  icon: any;
  currentThought: string;
}
