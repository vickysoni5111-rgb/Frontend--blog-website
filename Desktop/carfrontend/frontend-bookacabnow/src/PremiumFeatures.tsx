import React from "react";
import premiumVideoSectionData from "./Data";
import wedingcarpic from "./assets/wedingcarpic1.png";
import { Camera, Play, Calendar } from "lucide-react";

const PremiumFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 text-amber-900 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase mb-5 shadow-sm">
            <span>⭐</span> {premiumVideoSectionData.badge}
          </div>
          
          {/* Heading without underline under 'premium' */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0f2c59] tracking-tight leading-snug sm:leading-tight">
            See how{" "}
            <span className="text-amber-500">
              {premiumVideoSectionData.titleHighlight || "premium"}
            </span>{" "}
            cab booking feels
          </h2>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-4 font-medium max-w-2xl mx-auto leading-relaxed">
            {premiumVideoSectionData.subtitle}
          </p>

          <div className="w-16 h-1.5 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mt-5 rounded-full shadow-sm"></div>
        </div>

        {/* Main Showcase Banner Card - No extra black side space, full image view */}
        <div 
          className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-amber-100/50 bg-white mb-12 group"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          {/* Image Container with cover & proper centering so it shows completely without side black gaps */}
          <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[620px] overflow-hidden bg-gray-100">
            <img
              src={wedingcarpic}
              alt="Wedding Car Showcase"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Soft gradient overlay only at bottom/top for readability of buttons */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none"></div>
          </div>

          {/* Top Right Photo Count Badge */}
          <div className="absolute top-6 right-6 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-bold flex items-center gap-2 border border-white/20 shadow-xl">
            <Camera size={15} className="text-amber-400 animate-pulse" />
            <span>{premiumVideoSectionData.photoCount || "1 / 6"}</span>
          </div>

          {/* Overlay Content Box */}
          <div className="absolute inset-0 z-10 p-6 sm:p-10 lg:p-12 flex flex-col justify-between pointer-events-none">
            
            {/* Top Left Floating Features List */}
            <div className="max-w-md space-y-3 pointer-events-auto">
              {premiumVideoSectionData.featuresLeft.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/20 text-white shadow-2xl hover:bg-black/70 hover:border-amber-400/50 transition-all duration-300 group/item cursor-pointer"
                    data-aos="fade-right"
                    data-aos-delay={200 + index * 120}
                  >
                    <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0 text-amber-400 group-hover/item:bg-amber-400 group-hover/item:text-slate-950 transition-colors">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-white tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-gray-300 font-medium leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pointer-events-auto mt-auto pt-6">
              <button 
                className="flex items-center gap-2.5 px-7 py-4 bg-amber-400 hover:bg-amber-500 text-[#0f2c59] rounded-2xl text-xs sm:text-sm font-black shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-300"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Calendar size={18} /> BOOK YOUR RIDE NOW
              </button>

              <button 
                className="flex items-center gap-2.5 px-6 py-4 bg-black/50 hover:bg-black/70 backdrop-blur-xl border border-white/25 text-white rounded-2xl text-xs sm:text-sm font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group/btn"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-amber-400 group-hover/btn:text-slate-950 transition-colors">
                  <Play size={12} className="fill-current ml-0.5" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>

          </div>
        </div>

        {/* Bottom 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {premiumVideoSectionData.bottomCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white p-7 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-100 hover:shadow-2xl hover:border-amber-200 hover:-translate-y-1.5 transition-all duration-300 flex items-start gap-4 group"
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0 group-hover:bg-amber-400 group-hover:text-white transition-all duration-300 shadow-inner">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-[#0f2c59] mb-1.5 group-hover:text-amber-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PremiumFeatures;