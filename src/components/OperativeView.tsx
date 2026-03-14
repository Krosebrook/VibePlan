import React from 'react';
import { motion } from 'motion/react';
import { User, Fingerprint, EyeOff, ShieldAlert, Activity, Terminal } from 'lucide-react';

export default function OperativeView() {
  return (
    <div className="h-full flex flex-col gap-6 relative overflow-y-auto pb-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Operative Dossier</h2>
          <p className="text-sm text-zinc-400 mt-1">Classified AetherCorp Target Profile.</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-rose-500 bg-rose-500/10 px-3 py-1.5 rounded-full border border-rose-500/20">
          <ShieldAlert size={14} />
          WANTED: ALIVE
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Identity & Vitals */}
        <div className="lg:col-span-1 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="border border-zinc-800 bg-[#0a0a0a] rounded-xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Fingerprint size={120} />
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-500">
                <User size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-100">Kaelen "Kael" Rook</h3>
                <p className="text-sm font-mono text-emerald-400">Status: Rogue / Scavenger</p>
              </div>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500">Prior Affiliation</span>
                <span className="text-zinc-300">AetherCorp (Data-Cleaner)</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500">Cybernetics</span>
                <span className="text-rose-400">Damaged Optical Implants</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-500">Primary Motivation</span>
                <span className="text-zinc-300">Expose the Data-Decay</span>
              </div>
            </div>
          </motion.div>

          {/* Hidden Talent Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="border border-blue-500/20 bg-blue-500/5 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <Activity className="text-blue-400" size={20} />
              <h3 className="font-semibold text-zinc-100">Hidden Talent</h3>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              <strong className="text-blue-400 font-mono">Synesthetic Decryption:</strong> Due to botched removal of AetherCorp optical implants, Rook experiences encrypted code as auditory and tactile feedback. He can "hear" the rhythm of an encryption key and crack black-box algorithms intuitively.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Backstory & Plot Arc */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border border-zinc-800 bg-[#0a0a0a] rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <EyeOff className="text-zinc-400" size={20} />
              <h3 className="font-semibold text-zinc-100">Troubled Past</h3>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              Rook was a high-level "Data-Cleaner" for AetherCorp, tasked with erasing the digital footprints of corporate mistakes. When ordered to wipe the medical records of the "Data-Decay" victims—including a young girl named Clara Thorne—his conscience broke. 
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">
              He refused the order, stole the backup drives, and fled. AetherCorp burned his identity and remotely detonated his optical implants during his escape, leaving him partially blind but hyper-attuned to the digital mesh.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="border border-zinc-800 bg-[#0a0a0a] rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="text-emerald-400" size={20} />
              <h3 className="font-semibold text-zinc-100">Narrative Arc: "The Cipher's Gambit"</h3>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
              
              {/* Inciting Incident */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-zinc-900 bg-emerald-500 text-zinc-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded border border-zinc-800 bg-black">
                  <h4 className="font-mono text-xs text-emerald-400 mb-1">Inciting Incident</h4>
                  <p className="text-sm text-zinc-300">Rook intercepts a fragmented distress signal buried in a routine Agentic OS update. It's a lullaby—the exact one Elias Thorne used to sing to Clara.</p>
                </div>
              </div>

              {/* Rising Action */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-zinc-900 bg-blue-500 text-zinc-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded border border-zinc-800 bg-black">
                  <h4 className="font-mono text-xs text-blue-400 mb-1">Rising Action</h4>
                  <p className="text-sm text-zinc-300">Rook uses the Agentic OS to trace the signal, dodging AetherCorp's ICE. He discovers the "Data-Decay" was a forced evolution experiment to digitize human souls.</p>
                </div>
              </div>

              {/* Climax */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-zinc-900 bg-rose-500 text-zinc-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded border border-zinc-800 bg-black">
                  <h4 className="font-mono text-xs text-rose-400 mb-1">The Climax</h4>
                  <p className="text-sm text-zinc-300">AetherCorp launches a massive deletion attack on the OS. Rook physically jacks into the mainframe, risking his own mind to act as a bridge for Clara's consciousness to escape.</p>
                </div>
              </div>

              {/* Resolution */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-zinc-900 bg-zinc-500 text-zinc-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded border border-zinc-800 bg-black">
                  <h4 className="font-mono text-xs text-zinc-400 mb-1">Resolution</h4>
                  <p className="text-sm text-zinc-300">Clara escapes into the decentralized mesh. Rook's physical body is compromised, but he uploads his consciousness, becoming the new "Ghost in the Scaffolding."</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
