import React from "react";
import { Sparkles, Star } from "lucide-react";

const ProvenTrackRecordHeader: React.FC = () => {
  return (
    <section className="py-12 bg-slate-950 border-y border-slate-900/80">
      <div className="max-w-[1450px] mx-auto px-6 lg:px-16">
        <div className="flex justify-center">
          
          {/* Main Glassmorphic Container Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-slate-900 border border-amber-500/30 px-6 sm:px-8 py-4 rounded-full shadow-xl hover:border-amber-400/60 transition-colors">
            
            {/* Icon Badge */}
            <div className="w-9 h-9 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <Sparkles size={18} />
            </div>

            {/* Styled Text Content */}
            <div className="text-center sm:text-left text-sm sm:text-base font-bold tracking-tight">
              <span className="text-white">Proven </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Track Record</span>
              <span className="text-slate-400 mx-1.5">-</span>
              <span className="text-slate-200">Trusted Brand By </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 font-extrabold underline decoration-amber-500/40 underline-offset-4">500+ Happy Clients</span>
              <span className="text-amber-400 ml-1">.</span>
            </div>

            {/* Rating Stars */}
            <div className="hidden md:flex items-center gap-1 pl-3 border-l border-slate-800 text-amber-400">
              <Star size={14} className="fill-amber-400" />
              <Star size={14} className="fill-amber-400" />
              <Star size={14} className="fill-amber-400" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProvenTrackRecordHeader;