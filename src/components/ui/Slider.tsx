'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SliderProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    label?: string;
    description?: string;
    unit?: string;
    className?: string;
}

export function Slider({
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    label,
    description,
    unit = '',
    className,
}: SliderProps) {
    const constraintsRef = useRef<HTMLDivElement>(null);
    const handleRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const width = useMotionValue(0);

    // Convert value to x position
    useEffect(() => {
        if (constraintsRef.current) {
            const bounds = constraintsRef.current.getBoundingClientRect();
            const range = max - min;
            const percentage = (value - min) / range;
            const targetX = percentage * bounds.width;

            // Update motion values without trigger onChange
            x.set(targetX);
            width.set(targetX);
        }
    }, [value, min, max, x, width]);

    const handleDrag = () => {
        if (constraintsRef.current) {
            const bounds = constraintsRef.current.getBoundingClientRect();
            const currentX = x.get();
            const percentage = Math.min(Math.max(currentX / bounds.width, 0), 1);

            let newValue = min + percentage * (max - min);

            if (step) {
                newValue = Math.round(newValue / step) * step;
            }

            // Clamp
            newValue = Math.min(Math.max(newValue, min), max);

            if (newValue !== value) {
                onChange(newValue);
            }

            width.set(currentX);
        }
    };

    return (
        <div className={cn('w-full select-none touch-none', className)}>
            {label && (
                <div className="mb-4">
                    <div className="flex justify-between items-end text-slate-100">
                        <span className="text-lg font-medium">{label}</span>
                        <span className="text-2xl font-bold font-mono text-blue-400">
                            {unit}{value.toLocaleString()}
                            {unit === '%' ? '%' : ''}
                        </span>
                    </div>
                    {description && (
                        <p className="text-sm text-slate-500 mt-1">{description}</p>
                    )}
                </div>
            )}

            <div
                className="relative h-12 flex items-center cursor-pointer group"
                onClick={(e) => {
                    // Click to seek functionality
                    if (constraintsRef.current) {
                        const bounds = constraintsRef.current.getBoundingClientRect();
                        const clickX = e.clientX - bounds.left;
                        const percentage = Math.min(Math.max(clickX / bounds.width, 0), 1);
                        let newValue = min + percentage * (max - min);
                        if (step) newValue = Math.round(newValue / step) * step;
                        onChange(newValue);
                    }
                }}
            >
                {/* Track Background */}
                <div ref={constraintsRef} className="absolute w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    {/* Progress Fill */}
                    <motion.div
                        className="h-full bg-blue-500"
                        style={{ width }}
                    />
                </div>

                {/* Drag Handle */}
                <motion.div
                    ref={handleRef}
                    className="absolute top-1/2 -translate-y-1/2 -ml-3 w-8 h-8 rounded-full bg-white shadow-[0_0_20px_rgba(59,130,246,0.5)] z-10 flex items-center justify-center cursor-grab active:cursor-grabbing border-4 border-slate-950"
                    style={{ x }}
                    drag="x"
                    dragConstraints={constraintsRef}
                    dragElastic={0}
                    dragMomentum={false}
                    onDrag={handleDrag}
                >
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                </motion.div>
            </div>
        </div>
    );
}
