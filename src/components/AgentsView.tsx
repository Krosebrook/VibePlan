import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Network, GitBranch, Terminal, CheckCircle2, CircleDashed, Loader2, Search, X } from 'lucide-react';
import { Agent } from '../types';

const initialAgents: Agent[] = [
  { id: 'replit-1', name: 'Replit Agent (Lead)', role: 'Primary', status: 'Running', task: 'Scaffolding Postgres DB & Auth', branch: 'main', progress: 75 },
  { id: 'claude-1', name: 'Claude Code (UI)', role: 'Secondary', status: 'Running', task: 'Refactoring Embla Carousel', branch: 'feat/ui-carousel', progress: 40 },
  { id: 'claude-2', name: 'Claude Code (API)', role: 'Secondary', status: 'Reviewing', task: 'Linear MCP Integration', branch: 'feat/mcp-linear', progress: 90 },
  { id: 'claude-3', name: 'Claude Code (Tests)', role: 'Secondary', status: 'Idle', task: 'Awaiting PRs for test generation', branch: 'chore/tests', progress: 0 },
  { id: 'claude-4', name: 'Claude Code (Mobile)', role: 'Secondary', status: 'Blocked', task: 'Fixing iOS notch padding', branch: 'fix/mobile-padding', progress: 15 },
];

export default function AgentsView() {
  const [agents, setAgents] = useState<Agent[]>(initialAgents);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSpawnDialogOpen, setIsSpawnDialogOpen] = useState(false);

  const filteredAgents = agents.filter(agent => 
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.task.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSpawnConfirm = () => {
    const newAgent: Agent = {
      id: `claude-${agents.length + 1}`,
      name: `Claude Code (Task ${agents.length + 1})`,
      role: 'Secondary',
      status: 'Idle',
      task: 'Awaiting assignment...',
      branch: `feat/new-task-${agents.length + 1}`,
      progress: 0
    };
    setAgents([...agents, newAgent]);
    setIsSpawnDialogOpen(false);
  };

  return (
    <div className="h-full flex flex-col gap-6 relative">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Parallel Agents</h2>
          <p className="text-sm text-zinc-400 mt-1">Multi-clotting orchestration & Git-flow synthesis.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Network size={16} />
            <span>{filteredAgents.length} Active Nodes</span>
          </div>
          <button 
            onClick={() => setIsSpawnDialogOpen(true)}
            className="bg-zinc-100 text-zinc-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-white transition-colors"
          >
            Spawn Agent
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
        <input 
          type="text"
          placeholder="Search agents by name or task..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg pl-10 pr-10 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto pb-4">
        {filteredAgents.map((agent, idx) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            key={agent.id}
            className="border border-zinc-800 bg-[#0a0a0a] rounded-xl p-5 relative overflow-hidden group hover:border-zinc-700 transition-colors"
          >
            {/* Progress Bar Background */}
            <div 
              className="absolute bottom-0 left-0 h-1 bg-zinc-800 w-full"
            >
              <div 
                className={`h-full transition-all duration-1000 ${
                  agent.status === 'Running' ? 'bg-emerald-500' : 
                  agent.status === 'Reviewing' ? 'bg-blue-500' : 
                  agent.status === 'Blocked' ? 'bg-rose-500' : 'bg-zinc-600'
                }`}
                style={{ width: `${agent.progress}%` }}
              />
            </div>

            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${agent.role === 'Primary' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-zinc-800 text-zinc-400'}`}>
                  <Terminal size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-zinc-200">{agent.name}</h3>
                  <p className="text-xs text-zinc-500 font-mono">{agent.role}</p>
                </div>
              </div>
              <StatusBadge status={agent.status} />
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-zinc-500 mb-1">Current Task</p>
                <p className="text-sm text-zinc-300 truncate">{agent.task}</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 bg-zinc-900/50 p-2 rounded border border-zinc-800/50">
                <GitBranch size={14} />
                {agent.branch}
              </div>
            </div>
          </motion.div>
        ))}
        
        {filteredAgents.length === 0 && (
          <div className="col-span-full py-12 text-center text-zinc-500 text-sm">
            No agents found matching "{searchQuery}"
          </div>
        )}
      </div>

      {/* Spawn Confirmation Dialog */}
      <AnimatePresence>
        {isSpawnDialogOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-[#0a0a0a] border border-zinc-800 rounded-xl w-full max-w-md overflow-hidden shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">Spawn New Agent</h3>
                    <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                      Are you sure you want to spawn a new parallel agent? This will consume additional compute resources and initialize a new isolated sandbox container.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-900/50 px-6 py-4 border-t border-zinc-800 flex justify-end gap-3">
                <button 
                  onClick={() => setIsSpawnDialogOpen(false)}
                  className="px-4 py-2 rounded-md text-sm font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSpawnConfirm}
                  className="px-4 py-2 rounded-md text-sm font-medium bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors"
                >
                  Confirm Spawn
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatusBadge({ status }: { status: Agent['status'] }) {
  const [isHovered, setIsHovered] = useState(false);

  const statusInfo = {
    Running: {
      label: 'Running',
      description: 'The agent is actively executing its assigned task.',
      colorClass: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      icon: <Loader2 size={12} className="animate-spin" />
    },
    Reviewing: {
      label: 'Reviewing',
      description: 'Task completed. Awaiting human or peer verification.',
      colorClass: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
      icon: <CheckCircle2 size={12} />
    },
    Blocked: {
      label: 'Blocked',
      description: 'Execution halted due to a technical blocker or missing dependency.',
      colorClass: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
      icon: <CircleDashed size={12} />
    },
    Idle: {
      label: 'Idle',
      description: 'Available and awaiting a new task assignment.',
      colorClass: 'text-zinc-400 bg-zinc-800 border-zinc-700',
      icon: <CircleDashed size={12} />
    }
  };

  const info = statusInfo[status as keyof typeof statusInfo] || statusInfo.Idle;

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full border cursor-help transition-colors ${info.colorClass}`}>
        {info.icon} {info.label}
      </span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full mb-2 right-0 w-48 p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl z-50 pointer-events-none"
          >
            <p className="text-[11px] leading-relaxed text-zinc-300">
              {info.description}
            </p>
            {/* Tooltip Arrow */}
            <div className="absolute top-full right-4 -translate-y-1/2 rotate-45 w-2 h-2 bg-zinc-900 border-r border-b border-zinc-800" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
