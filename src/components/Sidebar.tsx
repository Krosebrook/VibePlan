import React from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, Users, Network, BrainCircuit, Settings, TerminalSquare, Database, UserCircle } from 'lucide-react';
import { TabID } from '../types';

interface SidebarProps {
  activeTab: TabID;
  setActiveTab: (tab: TabID) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems: { id: TabID; label: string; icon: React.ElementType }[] = [
    { id: 'dashboard', label: 'VIBE Pyramid', icon: LayoutDashboard },
    { id: 'council', label: 'AI Council', icon: Users },
    { id: 'agents', label: 'Parallel Agents', icon: Network },
    { id: 'brain', label: 'Project Brain', icon: BrainCircuit },
    { id: 'artifacts', label: 'Mesh Intercepts', icon: Database },
    { id: 'operative', label: 'Operative Dossier', icon: UserCircle },
  ];

  return (
    <div className="w-64 border-r border-zinc-800 bg-[#0a0a0a] flex flex-col h-screen shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <TerminalSquare size={18} />
        </div>
        <div>
          <h1 className="font-mono text-sm font-semibold tracking-tight text-zinc-100">AGENTIC_OS</h1>
          <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Vibe Coding Env</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 relative ${
                isActive ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-zinc-800/50 border border-zinc-700/50 rounded-md"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <Icon size={16} className="relative z-10" />
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors">
          <Settings size={16} />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
}
