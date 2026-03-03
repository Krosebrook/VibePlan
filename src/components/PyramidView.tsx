import React from 'react';
import { motion } from 'motion/react';
import { Layers, Box, Hammer } from 'lucide-react';

export default function PyramidView() {
  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">VIBE Planning Pyramid</h2>
          <p className="text-sm text-zinc-400 mt-1">Systematic framework for AI application development.</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full gap-4">
        
        {/* Level 3 */}
        <PyramidLevel 
          level={3}
          title="The Build Plan (Execution)"
          subtitle="In what order will we execute the build?"
          icon={Hammer}
          width="w-1/3"
          color="bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
          delay={0.3}
          content="Spec-driven development, Epic-by-Epic execution, Automated testing."
        />

        {/* Level 2 */}
        <PyramidLevel 
          level={2}
          title="The Architecture"
          subtitle="How will we build it and where will components live?"
          icon={Box}
          width="w-2/3"
          color="bg-blue-500/10 border-blue-500/30 text-blue-400"
          delay={0.2}
          content="Tech stack specification, Data models, Backend functionality, Deployment strategy."
        />

        {/* Level 1 */}
        <PyramidLevel 
          level={1}
          title="The Foundation"
          subtitle="What are we building and why?"
          icon={Layers}
          width="w-full"
          color="bg-indigo-500/10 border-indigo-500/30 text-indigo-400"
          delay={0.1}
          content="Core problem definition, Feature prioritization, User stories, Success metrics."
        />

      </div>
    </div>
  );
}

function PyramidLevel({ level, title, subtitle, icon: Icon, width, color, delay, content }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`${width} border rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden group ${color.split(' ')[0]} ${color.split(' ')[1]} backdrop-blur-sm`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20" />
      
      <div className={`p-3 rounded-full bg-black/20 mb-4 ${color.split(' ')[2]}`}>
        <Icon size={24} />
      </div>
      
      <div className="text-xs font-mono font-bold tracking-widest uppercase mb-2 opacity-80">
        Level {level}
      </div>
      <h3 className="text-lg font-semibold text-zinc-100 mb-1">{title}</h3>
      <p className="text-sm text-zinc-300 mb-4">{subtitle}</p>
      
      <div className="text-xs text-zinc-400 max-w-md">
        {content}
      </div>
    </motion.div>
  );
}
