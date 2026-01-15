'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Play, CheckCircle2 } from 'lucide-react';


export function SolutionSection() {
    const audioRef = React.useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 md:px-12 bg-slate-900 border-t border-slate-800">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(16,185,129,0.05),transparent_60%)]" />

            <div className="max-w-5xl w-full mx-auto space-y-16 relative z-10">

                <div className="text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 mb-4"
                    >
                        <CheckCircle2 size={16} />
                        <span>The Solution is Here</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Stop Losing Revenue to Missed Calls.
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Our AI voice receptionist answers every call, 24/7, with human-like empathy and intelligence. It books appointments while you sleep.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Live Demo Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Phone className="text-blue-500" />
                                Test It Live Now
                            </h3>
                            <p className="text-slate-400 mb-8">
                                Call our demo line right now to hear exactly how it sounds. No robot voice, just seamless conversation.
                            </p>
                            <a
                                href="tel:+18443513621"
                                className="flex items-center justify-center gap-3 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-900/20"
                            >
                                <Phone size={24} />
                                Call (844) 351-3621
                            </a>
                            <p className="text-center text-xs text-slate-600 mt-4">
                                Available 24/7 • Standard rates apply
                            </p>
                        </div>
                    </motion.div>

                    {/* Audio Demo Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative"
                    >
                        <div className="w-full bg-slate-950 rounded-2xl border border-slate-800 p-8 shadow-2xl relative overflow-hidden group">
                            {/* Decorative Waveform BG */}
                            <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                                <div className="flex gap-1 items-center h-full">
                                    {[...Array(20)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: isPlaying ? [10, 40, 10] : 10 }}
                                            transition={{
                                                duration: 0.5,
                                                repeat: Infinity,
                                                delay: i * 0.05,
                                                ease: "easeInOut"
                                            }}
                                            className="w-2 bg-blue-500 rounded-full"
                                            style={{ height: 10 }}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                                <h3 className="text-xl font-bold text-white">Listen to a Sample Call</h3>
                                <p className="text-slate-400 text-sm">
                                    Experience the natural latency and human tone.
                                </p>

                                <button
                                    onClick={togglePlay}
                                    className="w-20 h-20 bg-emerald-500 hover:bg-emerald-400 rounded-full flex items-center justify-center transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20"
                                >
                                    {isPlaying ? (
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-8 bg-white rounded-full" />
                                            <div className="w-2 h-8 bg-white rounded-full" />
                                        </div>
                                    ) : (
                                        <Play className="text-white ml-2" fill="white" size={32} />
                                    )}
                                </button>

                                <audio
                                    ref={audioRef}
                                    src="/demo.mp3"
                                    onEnded={() => setIsPlaying(false)}
                                />

                                <p className="text-xs text-emerald-500 font-mono uppercase tracking-wider">
                                    {isPlaying ? 'Playing Now...' : 'Click to Play'}
                                </p>
                            </div>
                        </div>
                        {/* Decoration */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
