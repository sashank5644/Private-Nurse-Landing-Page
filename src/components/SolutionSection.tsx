'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Play, CheckCircle2 } from 'lucide-react';

export function SolutionSection() {
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
                                href="tel:+15550000000"
                                className="flex items-center justify-center gap-3 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-900/20"
                            >
                                <Phone size={24} />
                                Call (555) 000-0000
                            </a>
                            <p className="text-center text-xs text-slate-600 mt-4">
                                Available 24/7 • Standard rates apply
                            </p>
                        </div>
                    </motion.div>

                    {/* Video Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative"
                    >
                        <div className="aspect-video bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center group overflow-hidden shadow-2xl relative">
                            {/* Placeholder Video Pattern */}
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />

                            <div className="space-y-4 text-center z-10 p-6">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm group-hover:scale-110 transition-transform">
                                    <Play className="text-white ml-1" fill="white" />
                                </div>
                                <p className="text-slate-300 font-medium">Watch the Demo</p>
                            </div>
                        </div>
                        {/* Decoration */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
