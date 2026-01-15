'use client';

import React from 'react';

export function BookingSection() {
    return (
        <section className="py-24 px-4 bg-slate-950 border-t border-slate-800 min-h-screen flex flex-col items-center">
            <div className="max-w-4xl w-full space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Ready to reclaim your lost revenue?
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Schedule a call with us to deploy your AI receptionist today.
                    </p>
                </div>

                <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:h-[800px] bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
                    <iframe
                        src="https://api.leadconnectorhq.com/widget/booking/gzNCy8e40o7y8qafZynN"
                        className="w-full h-full border-0"
                        title="Booking Calendar"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
