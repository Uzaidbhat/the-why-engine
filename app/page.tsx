import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle, BookOpen, ChevronDown, Sparkles, Quote } from 'lucide-react';

const TheWhyPage = () => {
  const [showAI, setShowAI] = useState(false);

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 font-sans">
      
      {/* --- HEADER / NAV --- */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-white">THE <span className="text-indigo-500">WHY</span></div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition">Habits</a>
          <a href="#" className="hover:text-white transition">Books</a>
          <a href="#" className="hover:text-white transition">Tech</a>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-indigo-500/20">
          Subscribe
        </button>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        
        {/* --- HERO SECTION --- */}
        <motion.header {...fadeInUp} className="mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Why read <span className="italic text-indigo-400">Deep Work?</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-8">
            Read Deep Work if you want focused, meaningful output in a world designed to distract you. Here’s how it actually changes your day.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition flex items-center gap-2">
              Read Quick Summary <ChevronDown size={18} />
            </button>
            <button className="bg-slate-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-700 transition flex items-center gap-2">
              <Play size={18} fill="currentColor" /> Watch the Why
            </button>
          </div>
        </motion.header>

        {/* --- QUICK VERDICT BADGE --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-indigo-900/40 to-slate-800/40 border border-indigo-500/30 p-4 rounded-2xl mb-16 backdrop-blur-sm flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="text-emerald-400" />
            <span className="text-sm md:text-base font-medium">
              <span className="text-slate-400">Worth it for:</span> Knowledge workers, students, and creators.
            </span>
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-indigo-300 px-3 py-1 bg-indigo-500/10 rounded-lg">
            Impact: 4 Weeks
          </div>
        </motion.div>

        {/* --- CONTENT: THE SHORT ANSWER --- */}
        <section className="mb-20">
          <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">The Short Answer</h2>
          <p className="text-2xl text-slate-100 leading-snug">
            "We’ve lost the ability to focus. Deep Work isn't just a productivity tip; it's a rescue mission for your brain. If you’re tired of feeling 'busy' but producing nothing of value, this is the cognitive toolkit you’re missing."
          </p>
        </section>

        {/* --- REUSABLE COMPONENT: CHECKLIST --- */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 mb-20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <BookOpen className="text-indigo-500" /> How to implement this
          </h3>
          <ul className="space-y-4">
            {[
              "Schedule 90-minute 'No-Internet' blocks",
              "Quit social media for 30 days (as a test)",
              "Adopt a 'Fixed-Schedule' productivity mindset"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start text-slate-300">
                <span className="bg-indigo-500/20 text-indigo-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-1">{i+1}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* --- AI OPTIONAL SUGGESTION --- */}
        <section className="border-t border-slate-800 pt-12">
          <button 
            onClick={() => setShowAI(!showAI)}
            className="w-full flex items-center justify-between p-6 bg-slate-900 rounded-2xl border border-dashed border-slate-700 hover:border-indigo-500/50 transition"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="text-yellow-400" />
              <span className="font-bold text-white">Want a personalized 4-week plan?</span>
            </div>
            <ChevronDown className={`transition-transform ${showAI ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {showAI && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-slate-900/30 text-slate-400 italic">
                  "Based on your current 9-5 schedule, I suggest moving your 'Deep' block to 7:00 AM before the Slack messages start pouring in..."
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

      </main>
    </div>
  );
};

export default TheWhyPage;
