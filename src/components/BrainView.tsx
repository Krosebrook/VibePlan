import React from 'react';
import { motion } from 'motion/react';
import { Database, Shield, Layout, FileCode2 } from 'lucide-react';

export default function BrainView() {
  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Project Brain</h2>
          <p className="text-sm text-zinc-400 mt-1">CLAUDE.md - The Team's Permanent Memory & Linting Rules.</p>
        </div>
        <div className="text-xs font-mono text-zinc-500 bg-zinc-900 px-3 py-1.5 rounded-md border border-zinc-800">
          ~/workspace/.claude_user
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* Left Column: Categories */}
        <div className="flex flex-col gap-4">
          <BrainCard icon={Layout} title="Design System" active />
          <BrainCard icon={Database} title="Architecture & State" />
          <BrainCard icon={Shield} title="Security & Secrets" />
          <BrainCard icon={FileCode2} title="Failure Logs (Do Not Repeat)" />
        </div>

        {/* Right Column: Editor/Viewer */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 border border-zinc-800 rounded-xl bg-[#0a0a0a] flex flex-col overflow-hidden"
        >
          <div className="border-b border-zinc-800 bg-zinc-900/50 px-4 py-3 flex items-center justify-between">
            <span className="font-mono text-sm text-zinc-300">CLAUDE.md</span>
            <span className="text-xs text-zinc-500">Last updated: 2 mins ago</span>
          </div>
          <div className="p-6 font-mono text-sm text-zinc-300 overflow-y-auto leading-relaxed whitespace-pre-wrap">
{`# Project Rules & Design System

## 1. Styling & UI
- ALWAYS use Tailwind CSS for padding and margins. Never hardcode pixel values.
- Use 'lucide-react' for all icons. Do not import custom SVGs unless strictly necessary.
- The application uses a "Technical Dashboard" aesthetic. 
  - Backgrounds: #050505, #0a0a0a
  - Borders: zinc-800
  - Accents: emerald-500, rose-500, blue-500
- Use 'motion/react' for layout animations and page transitions.

## 2. Component Architecture
- Prefer functional components and hooks.
- Ensure all API calls are wrapped in our global error boundary.
- Mobile-first navigation: Use swipeable indicators instead of 'Continue' buttons.

## 3. State Management
- Use React Context for global theme/auth state.
- Local state via useState/useReducer for component-specific logic.

## 4. Known Friction Points (DO NOT REPEAT)
- [2026-02-19] Replit MCP OAuth Failure: 
  - Issue: OAuth for MCPs fails silently in the Replit sandbox.
  - Fix: MUST use bearer tokens for authentication when connecting Linear or other MCPs.
- [2026-02-18] Context Window Bloat:
  - Issue: Single-thread reasoning degraded after 50% capacity.
  - Fix: Enforce Multi-Agent "Council" pattern for complex logic. Use shared_reasoning.md.`}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function BrainCard({ icon: Icon, title, active = false }: { icon: any, title: string, active?: boolean }) {
  return (
    <div className={`p-4 rounded-xl border flex items-center gap-4 cursor-pointer transition-colors ${
      active 
        ? 'bg-zinc-800/50 border-zinc-700 text-zinc-100' 
        : 'bg-[#0a0a0a] border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-300'
    }`}>
      <div className={`p-2 rounded-lg ${active ? 'bg-zinc-700' : 'bg-zinc-900'}`}>
        <Icon size={18} />
      </div>
      <span className="font-medium text-sm">{title}</span>
    </div>
  );
}
