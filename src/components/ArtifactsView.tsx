import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, FileDigit, AlertTriangle, CheckCircle2, Terminal, ShieldAlert } from 'lucide-react';
import { Artifact } from '../types';

const mockArtifacts: Artifact[] = [
  {
    id: 'art-1',
    logId: 'ERR_LOG_77A',
    authorHandle: '@Kae_Scavenger',
    type: 'Text Fragment',
    status: 'VERIFIED',
    timestamp: '2026-03-09T09:12:00Z',
    content: "Found a cache of old AetherCorp drives in sector 4. The data-decay is spreading faster than we thought. It's not a virus, it's a [REDACTED] protocol. Elias needs to know."
  },
  {
    id: 'art-2',
    logId: 'ANOMALY_99X',
    authorHandle: '@Unknown_Node',
    type: 'Text Fragment',
    status: 'CORRUPTED',
    timestamp: '2026-03-09T08:45:22Z',
    content: "The Council is lying. The Optimist agent isn't calculating success rates, it's [CORRUPTED_DATA_BLOCK]. If Clara merges with the OS, she won't survive, she'll become the [REDACTED]."
  },
  {
    id: 'art-3',
    logId: 'INTAKE_001',
    authorHandle: '@Vibe_Coder_99',
    type: 'Text Fragment',
    status: 'CONFLICTING_DATA',
    timestamp: '2026-03-09T07:11:05Z',
    content: "I remember when the sky was blue. Before the mesh took over. We used to build things with our hands, not just prompts. AetherCorp promised us a utopia, but they just built a bigger cage."
  }
];

export default function ArtifactsView() {
  const [selectedId, setSelectedId] = useState<string | null>(mockArtifacts[0].id);
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);

  const selectedArtifact = mockArtifacts.find(a => a.id === selectedId);

  // Helper to render text with simulated redactions and corruption
  const renderGlitchText = (text: string) => {
    return text.split(/(\[REDACTED\]|\[CORRUPTED_DATA_BLOCK\])/g).map((part, i) => {
      if (part === '[REDACTED]') {
        return <span key={i} className="bg-zinc-800 text-zinc-800 select-none px-1 rounded mx-1" title="Data Redacted">███████</span>;
      }
      if (part === '[CORRUPTED_DATA_BLOCK]') {
        return <span key={i} className="blur-[3px] opacity-60 select-none mx-1 text-rose-500" title="Corrupted Sector">§¶∆≈ç√∫</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Mesh Intercepts</h2>
          <p className="text-sm text-zinc-400 mt-1">User-Generated Content framed as recovered system logs.</p>
        </div>
        <button 
          onClick={() => setIsIntakeOpen(!isIntakeOpen)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
            isIntakeOpen ? 'bg-zinc-800 text-zinc-200' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20'
          }`}
        >
          <Terminal size={16} />
          {isIntakeOpen ? 'Close Terminal' : 'Terminal Intake Form'}
        </button>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
        {/* Left: Artifact List */}
        <div className="flex flex-col gap-3 overflow-y-auto pr-2">
          {mockArtifacts.map((artifact) => (
            <button
              key={artifact.id}
              onClick={() => { setSelectedId(artifact.id); setIsIntakeOpen(false); }}
              className={`text-left p-4 rounded-xl border transition-all ${
                selectedId === artifact.id && !isIntakeOpen
                  ? 'bg-zinc-800/50 border-zinc-600' 
                  : 'bg-[#0a0a0a] border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-zinc-500">{artifact.logId}</span>
                <StatusIcon status={artifact.status} />
              </div>
              <h3 className="font-medium text-sm text-zinc-200 mb-1">{artifact.authorHandle}</h3>
              <p className="text-xs text-zinc-500 truncate">{artifact.content.replace(/\[.*?\]/g, '...')}</p>
            </button>
          ))}
        </div>

        {/* Right: Artifact Viewer or Intake Form */}
        <div className="lg:col-span-2 border border-zinc-800 rounded-xl bg-[#0a0a0a] overflow-hidden flex flex-col relative">
          <AnimatePresence mode="wait">
            {isIntakeOpen ? (
              <motion.div 
                key="intake"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col h-full p-6"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                  <Terminal className="text-emerald-400" size={20} />
                  <h3 className="font-mono text-lg text-zinc-100">TERMINAL_INTAKE_FORM.exe</h3>
                </div>
                <div className="space-y-4 flex-1 overflow-y-auto font-mono text-sm">
                  <p className="text-zinc-500 mb-4">// Submit recovered data fragments to the Agentic OS.</p>
                  
                  <div>
                    <label className="block text-emerald-500/70 mb-1">[{'>'} ERROR_LOG_ID]</label>
                    <input type="text" placeholder="e.g., SECTOR_7_ECHO" className="w-full bg-black border border-zinc-800 rounded p-2 text-zinc-300 focus:border-emerald-500/50 focus:outline-none" />
                  </div>
                  
                  <div>
                    <label className="block text-emerald-500/70 mb-1">[{'>'} LAST_KNOWN_LOCATION]</label>
                    <input type="text" placeholder="e.g., AetherCorp Sub-level 4" className="w-full bg-black border border-zinc-800 rounded p-2 text-zinc-300 focus:border-emerald-500/50 focus:outline-none" />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label className="block text-emerald-500/70 mb-1">[{'>'} FINAL_TRANSMISSION]</label>
                    <textarea 
                      placeholder="Enter intercepted transmission..." 
                      className="w-full flex-1 bg-black border border-zinc-800 rounded p-2 text-zinc-300 focus:border-emerald-500/50 focus:outline-none resize-none min-h-[150px]" 
                    />
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-zinc-800 flex justify-end">
                  <button className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-6 py-2 rounded hover:bg-emerald-500/20 font-mono text-sm transition-colors">
                    TRANSMIT_DATA
                  </button>
                </div>
              </motion.div>
            ) : selectedArtifact ? (
              <motion.div 
                key="viewer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col h-full"
              >
                <div className="border-b border-zinc-800 bg-zinc-900/50 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileDigit size={18} className="text-zinc-400" />
                    <span className="font-mono text-sm text-zinc-200">{selectedArtifact.logId}</span>
                  </div>
                  <StatusBadge status={selectedArtifact.status} />
                </div>
                
                <div className="p-6 flex-1 overflow-y-auto">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800/50">
                    <div>
                      <p className="text-xs text-zinc-500 font-mono mb-1">AUTHOR_HANDLE</p>
                      <p className="text-sm text-emerald-400 font-mono">{selectedArtifact.authorHandle}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-zinc-500 font-mono mb-1">TIMESTAMP</p>
                      <p className="text-sm text-zinc-300 font-mono">{new Date(selectedArtifact.timestamp).toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="font-mono text-sm leading-relaxed text-zinc-300">
                    {renderGlitchText(selectedArtifact.content)}
                  </div>

                  {selectedArtifact.status === 'CONFLICTING_DATA' && (
                    <div className="mt-8 p-4 border border-rose-500/20 bg-rose-500/5 rounded-lg flex items-start gap-3">
                      <ShieldAlert size={18} className="text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-rose-400 mb-1">WARNING: LORE CONFLICT DETECTED</h4>
                        <p className="text-xs text-rose-400/80 leading-relaxed">
                          This fragment contradicts established timeline parameters. The Neutral Analyst has flagged this for manual review by the Lead Architect.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function StatusIcon({ status }: { status: Artifact['status'] }) {
  switch (status) {
    case 'VERIFIED': return <CheckCircle2 size={14} className="text-emerald-500" />;
    case 'CORRUPTED': return <AlertTriangle size={14} className="text-amber-500" />;
    case 'CONFLICTING_DATA': return <ShieldAlert size={14} className="text-rose-500" />;
  }
}

function StatusBadge({ status }: { status: Artifact['status'] }) {
  switch (status) {
    case 'VERIFIED':
      return <span className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">VERIFIED_INTEGRITY</span>;
    case 'CORRUPTED':
      return <span className="text-[10px] font-mono px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">DATA_CORRUPTION_DETECTED</span>;
    case 'CONFLICTING_DATA':
      return <span className="text-[10px] font-mono px-2 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">CONFLICTING_DATA</span>;
  }
}
