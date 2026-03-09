import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Sidebar from './components/Sidebar';
import PyramidView from './components/PyramidView';
import CouncilView from './components/CouncilView';
import AgentsView from './components/AgentsView';
import BrainView from './components/BrainView';
import ArtifactsView from './components/ArtifactsView';
import { TabID } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabID>('dashboard');

  return (
    <div className="flex h-screen w-full bg-[#050505] overflow-hidden text-zinc-100 font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 relative overflow-hidden flex flex-col">
        {/* Top subtle gradient for depth */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-900/20 to-transparent pointer-events-none" />
        
        <div className="flex-1 overflow-y-auto p-8 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full max-w-6xl mx-auto"
            >
              {activeTab === 'dashboard' && <PyramidView />}
              {activeTab === 'council' && <CouncilView />}
              {activeTab === 'agents' && <AgentsView />}
              {activeTab === 'brain' && <BrainView />}
              {activeTab === 'artifacts' && <ArtifactsView />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
