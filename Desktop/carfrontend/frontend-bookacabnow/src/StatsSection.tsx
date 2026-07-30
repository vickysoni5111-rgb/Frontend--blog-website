import React, { useState, useEffect, useRef } from "react";
import { Users, MapPin, Car, Headphones, ShieldCheck, Sparkles } from "lucide-react";

// Reusable Counter Component for Scroll-triggered Animation
const CounterItem: React.FC<{ end: number; suffix?: string; label: string; icon: React.ReactNode }> = ({ end, suffix = "+", label, icon }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2200; // Animation duration in milliseconds

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Smooth easing curve
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(easeOutQuart * end));

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, end]);

  return (
    <div 
      ref={itemRef} 
      className="group relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-md"
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 shrink-0 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-1">
            <span>{count}</span>
            <span className="text-amber-400">{suffix}</span>
          </h3>
          <p className="text-xs text-slate-300 font-bold mt-1 uppercase tracking-wider">{label}</p>
        </div>
      </div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
        
        <div 
          data-aos="fade-up"
          data-aos-duration="1000"
          className="bg-gradient-to-br from-[#0b2853] via-[#0f2c59] to-[#061935] text-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden border border-blue-900/80"
        >
          {/* Background Ambient Glow Effects */}
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Header Badge inside Card */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-6 border-b border-white/10 relative z-10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="text-lg font-black tracking-tight text-white">Our Milestones</h4>
                <p className="text-xs text-slate-300 font-medium">Empowering thousands of safe & reliable road trips across the country.</p>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-xs font-bold text-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              Verified Performance Stats
            </div>
          </div>

          {/* Grid Cards for Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            
            {/* Stat 1 */}
            <CounterItem 
              end={500} 
              suffix="+" 
              label="Happy Customers" 
              icon={<Users size={26} className="stroke-[2.5]" />} 
            />

            {/* Stat 2 */}
            <CounterItem 
              end={50} 
              suffix="+" 
              label="Cities Covered" 
              icon={<MapPin size={26} className="stroke-[2.5]" />} 
            />

            {/* Stat 3 */}
            <CounterItem 
              end={100} 
              suffix="+" 
              label="Verified Cabs" 
              icon={<Car size={26} className="stroke-[2.5]" />} 
            />

            {/* Stat 4: Support */}
            <div className="group relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-md flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-slate-950 shrink-0 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300">
                <Headphones size={26} className="stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-1">
                  <span>24/7</span>
                </h3>
                <p className="text-xs text-slate-300 font-bold mt-1 uppercase tracking-wider">Customer Support</p>
              </div>
            </div>

          </div>

          {/* Bottom Trust Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-slate-300 font-medium flex items-center justify-center gap-2 relative z-10">
            <ShieldCheck size={16} className="text-amber-400" /> 
            <span>Trusted journeys backed by verified partners, professional drivers, and responsive 24/7 assistance.</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StatsSection;