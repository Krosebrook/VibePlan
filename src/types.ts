export type TabID = 'dashboard' | 'council' | 'agents' | 'brain' | 'artifacts';

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

export interface Artifact {
  id: string;
  logId: string;
  authorHandle: string;
  type: 'Text Fragment' | 'Visual Anomaly';
  status: 'VERIFIED' | 'CORRUPTED' | 'CONFLICTING_DATA';
  content: string;
  timestamp: string;
}
