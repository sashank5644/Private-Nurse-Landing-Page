'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Slider } from './ui/Slider';

export function CalculatorSection() {
    const [missedCalls, setMissedCalls] = useState(30);
    const [conversionRate, setConversionRate] = useState(20);
    const [avgPrice, setAvgPrice] = useState(250);

    const missedProfit = useMemo(() => {
        // Formula: Calls * (Rate/100) * Price
        return Math.floor(missedCalls * (conversionRate / 100) * avgPrice);
    }, [missedCalls, conversionRate, avgPrice]);

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-24 px-6 md:px-12 bg-slate-950 text-white overflow-hidden">

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,_rgba(59,130,246,0.1),transparent_50%)]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative max-w-4xl w-full mx-auto space-y-16"
            >
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-white to-slate-500 bg-clip-text text-transparent pb-2">
                        How Much Is Your Business Losing?
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                        Every missed call is a missed opportunity. Use the calculator below to see the reality of your potential revenue loss.
                    </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

                        {/* Inputs */}
                        <div className="space-y-10">
                            <Slider
                                label="Missed Calls Per Month"
                                value={missedCalls}
                                onChange={setMissedCalls}
                                min={0}
                                max={200}
                                step={1}
                            />
                            <Slider
                                label="Conversion Rate"
                                description="Percentage of callers that become paying clients"
                                unit="%"
                                value={conversionRate}
                                onChange={setConversionRate}
                                min={0}
                                max={100}
                                step={1}
                            />
                            <Slider
                                label="Avg. Price Per Client"
                                description="Average revenue generated from a single new client"
                                unit="$"
                                value={avgPrice}
                                onChange={setAvgPrice}
                                min={0}
                                max={30000}
                                step={100}
                            />
                        </div>

                        {/* Result */}
                        <div className="flex flex-col items-center justify-center space-y-2 text-center p-8 bg-slate-950/80 rounded-2xl border border-red-900/30 shadow-[0_0_50px_rgba(220,38,38,0.1)]">
                            <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold">Estimated Monthly Loss</p>
                            <div className="relative">
                                <span className="text-6xl md:text-7xl font-bold text-red-500 tabular-nums tracking-tighter drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                                    ${missedProfit.toLocaleString()}
                                </span>
                            </div>
                            <p className="text-red-400/80 text-sm mt-4 font-medium">
                                That's ${(missedProfit * 12).toLocaleString()} per year gone.
                            </p>
                        </div>

                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex justify-center pt-8"
                >
                    <div className="animate-bounce text-slate-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
