import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, AlertTriangle, Scale, FileText } from 'lucide-react';
import { CouncilMember } from '../types';

const members: CouncilMember[] = [
  {
    id: 'optimist',
    role: 'Optimist Strategist',
    color: 'text-emerald-400',
    bgAccent: 'bg-emerald-400/10 border-emerald-400/20',
    icon: Lightbulb,
    currentThought: "If we implement the Linear MCP integration now, we can automate the entire PM-to-Dev pipeline. This eliminates the 5-step manual process and creates a 'Forever Employee' loop. The ROI on velocity is massive.",
  },
  {
    id: 'devil',
    role: 'Devil\'s Advocate',
    color: 'text-rose-400',
    bgAccent: 'bg-rose-400/10 border-rose-400/20',
    icon: AlertTriangle,
    currentThought: "Wait. The Replit environment currently restricts OAuth for MCPs. If we push this without a bearer token workaround, the integration will fail silently in the sandbox. We are introducing a critical failure point.",
  },
  {
    id: 'neutral',
    role: 'Neutral Analyst',
    color: 'text-blue-400',
    bgAccent: 'bg-blue-400/10 border-blue-400/20',
    icon: Scale,
    currentThought: "The Optimist is correct about the velocity gains, but the Devil's Advocate has identified a hard technical blocker. We must proceed with the MCP integration, but strictly use bearer tokens for authentication instead of OAuth.",
  }
];

export default function CouncilView() {
  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">The AI Council</h2>
          <p className="text-sm text-zinc-400 mt-1">Parallelized stress-testing & decision auditing.</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          COUNCIL_ACTIVE
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {members.map((member, idx) => {
          const Icon = member.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={member.id}
              className={`p-5 rounded-xl border ${member.bgAccent} backdrop-blur-sm flex flex-col`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-black/20 ${member.color}`}>
                  <Icon size={18} />
                </div>
                <h3 className={`font-mono text-sm font-semibold ${member.color}`}>
                  {member.role}
                </h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed flex-1">
                "{member.currentThought}"
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex-1 border border-zinc-800 rounded-xl bg-[#0a0a0a] overflow-hidden flex flex-col"
      >
        <div className="border-b border-zinc-800 bg-zinc-900/50 px-4 py-3 flex items-center gap-2">
          <FileText size={16} className="text-zinc-400" />
          <span className="font-mono text-sm text-zinc-300">shared_reasoning.md</span>
        </div>
        <div className="p-6 font-mono text-sm text-zinc-400 overflow-y-auto leading-relaxed">
          <div className="text-zinc-500 mb-4">### [2026-02-20 / Session ID: 8f92a]</div>
          <div className="mb-4">
            <span className="text-emerald-400 font-semibold">* Optimist Perspective:</span> Implement Linear MCP for 10x velocity.
          </div>
          <div className="mb-4">
            <span className="text-rose-400 font-semibold">* Devil's Advocate:</span> OAuth is restricted in Replit sandbox. High risk of silent failure.
          </div>
          <div className="mb-4">
            <span className="text-blue-400 font-semibold">* Neutral Synthesis:</span> 
            <br/>- Proceed with Linear MCP.
            <br/>- <span className="text-zinc-200">Constraint:</span> Must use bearer tokens instead of OAuth.
            <br/>- <span className="text-zinc-200">Action:</span> Update CLAUDE.md with this authentication rule.
          </div>
          <div className="mt-8 text-xs text-zinc-600 border-t border-zinc-800 pt-4">
            &gt; Waiting for Lead Agent to synthesize and execute...
          </div>
        </div>
      </motion.div>
    </div>
  );
}
