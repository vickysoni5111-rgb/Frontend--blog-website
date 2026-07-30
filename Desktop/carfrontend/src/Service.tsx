import React, { useEffect } from "react";
import { typo } from "./typography";
import { 
  ShieldCheck, 
  Zap, 
  Clock, 
  ArrowRight, 
  Plane, 
  MapPin, 
  Briefcase,
  CheckCircle2
} from "lucide-react";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

// Image Imports
import homePicService from "./assets/homepicservice.png";
import taxiPicBanner from "./assets/taxi.png";
import texiPic from "./assets/texi.png";
import carPic from "./assets/car.png";
import taxiPic from "./assets/taxi.png";
import weddingCarPic from "./assets/wedingcarpic.png";

const Service: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,

    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white text-slate-900 font-sans overflow-hidden selection:bg-amber-400 selection:text-slate-950">
      
      {/* ================= HERO / FULL-SCREEN HEADER SECTION WITH homepicservice.png ================= */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1450px] mx-auto px-6 lg:px-16 w-full relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left" data-aos="fade-right" data-aos-duration="1200">
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-600 px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                PREMIUM CAB & FLEET SERVICES
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Your Journey, Our Commitment to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500">Excellence</span>
              </h1>

              <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Experience world-class transportation tailored for every route, schedule, and comfort tier. From punctual airport transfers to luxurious wedding convoys, BookACabNow guarantees absolute safety and transparent pricing.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-2xl text-center">
                  <span className="block text-amber-500 text-lg font-black">100%</span>
                  <span className="text-slate-600 text-[11px] font-semibold uppercase">Verified Drivers</span>
                </div>
                <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-2xl text-center">
                  <span className="block text-amber-500 text-lg font-black">24/7</span>
                  <span className="text-slate-600 text-[11px] font-semibold uppercase">Live Support</span>
                </div>
                <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-2xl text-center">
                  <span className="block text-amber-500 text-lg font-black">50k+</span>
                  <span className="text-slate-600 text-[11px] font-semibold uppercase">Happy Rides</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
                >
                  Book Your Ride Now <ArrowRight size={18} />
                </a>
                <a
                  href="#services-grid"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold px-7 py-4 rounded-2xl transition-all duration-300 text-sm shadow-sm"
                >
                  Explore Fleets
                </a>
              </div>
            </div>

            {/* Right Image Column (homePicService featured prominently) */}
            <div className="lg:col-span-6 relative" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 to-blue-500 rounded-[32px] blur-xl opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              
              <div className="relative rounded-[28px] overflow-hidden border border-slate-200 bg-white shadow-2xl p-2 sm:p-4">
                <img
                  src={homePicService}
                  alt="BookACabNow Service Showcase"
                  className="w-full h-auto max-h-[500px] object-contain rounded-2xl transform hover:scale-[1.02] transition-transform duration-700 mx-auto"
                />
                
                {/* Floating badge over image */}
                <div className="absolute bottom-6 left-6 bg-white/95 border border-slate-200 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-md sm:flex items-center gap-3 hidden">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Verified Safety</p>
                    <p className="text-sm font-bold text-slate-900">Sanitized & Insured Cabs</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= EXTENSIVE SERVICES HIGHLIGHT SECTION ================= */}
      <section id="services-grid" className="py-24 bg-slate-50 border-t border-slate-200 relative">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-16">
          
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              OUR CORE EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
              Choose by route, schedule & comfort tier
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-4 font-normal">
              Each service is meticulously designed to provide seamless transit with clear customer expectations and simple booking paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 01 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 hover:-translate-y-1 transition-all duration-500 group flex flex-col justify-between" data-aos="fade-up" data-aos-delay="100">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-amber-300 group-hover:text-amber-400 transition-colors">01</span>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Plane size={24} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Airport Transfers</h3>
                <p className="text-slate-500 text-sm font-normal leading-relaxed mb-6">
                  Flight-friendly pickup planning with real-time flight tracking, luggage-aware cab choices, and zero wait-time guarantee at arrivals.
                </p>
                <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  <li className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <CheckCircle2 size={15} className="text-amber-500 flex-shrink-0" /> Free 60-min wait time at airport
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <CheckCircle2 size={15} className="text-amber-500 flex-shrink-0" /> Meet & Greet service available
                  </li>
                </ul>
              </div>
              <a href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-500">
                Book Airport Cab <ArrowRight size={14} />
              </a>
            </div>

            {/* Service 02 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 hover:-translate-y-1 transition-all duration-500 group flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-amber-300 group-hover:text-amber-400 transition-colors">02</span>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Outstation Cabs</h3>
                <p className="text-slate-500 text-sm font-normal leading-relaxed mb-6">
                  Driver-included sedans, premium SUVs, and MUVs tailored for comfortable intercity round trips and one-way holiday journeys across states.
                </p>
                <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  <li className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <CheckCircle2 size={15} className="text-amber-500 flex-shrink-0" /> Experienced highway chauffeurs
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <CheckCircle2 size={15} className="text-amber-500 flex-shrink-0" /> Transparent per-km outstation fares
                  </li>
                </ul>
              </div>
              <a href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-500">
                Book Outstation Ride <ArrowRight size={14} />
              </a>
            </div>

            {/* Service 03 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 hover:-translate-y-1 transition-all duration-500 group flex flex-col justify-between" data-aos="fade-up" data-aos-delay="300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-amber-300 group-hover:text-amber-400 transition-colors">03</span>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase size={24} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Corporate Travel</h3>
                <p className="text-slate-500 text-sm font-normal leading-relaxed mb-6">
                  Reliable cab support for business movement, client delegations, employee monthly commutes, and recurring corporate travel management.
                </p>
                <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  <li className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <CheckCircle2 size={15} className="text-amber-500 flex-shrink-0" /> GST invoices & corporate billing
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <CheckCircle2 size={15} className="text-amber-500 flex-shrink-0" /> Dedicated account manager
                  </li>
                </ul>
              </div>
              <a href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-500">
                Partner With Us <ArrowRight size={14} />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ================= TRUST & QUALITY METRICS SECTION ================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-16">
          
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4">
              Built on trust, precision and speed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Reliability */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-400 group-hover:text-white transition-colors">
                <ShieldCheck size={30} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Total Reliability</h3>
              <p className="text-slate-500 text-sm font-normal leading-relaxed">
                Count on verified chauffeurs, meticulously inspected fleets, and transparent scheduling for every single trip you book across cities.
              </p>
            </div>

            {/* Accuracy */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-400 group-hover:text-white transition-colors">
                <Zap size={30} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Absolute Accuracy</h3>
              <p className="text-slate-500 text-sm font-normal leading-relaxed">
                Precise GPS route tracking, exact travel time estimations, and upfront fare calculation with zero hidden tolls or surprise charges.
              </p>
            </div>

            {/* Fast Dispatch */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-300 group" data-aos="fade-up" data-aos-delay="300">
              <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-400 group-hover:text-white transition-colors">
                <Clock size={30} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Instant Dispatch</h3>
              <p className="text-slate-500 text-sm font-normal leading-relaxed">
                Smart automated cab dispatch system ensuring rapid driver assignment and quick pickup right at your doorstep within minutes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FLEET OPTIONS SHOWCASE SECTION ================= */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-16">
          
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              EXPLORE OUR FLEET
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4">
              Vehicles tailored for every journey
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-4 font-normal">
              Select from our diverse range of immaculate cars maintained to highest safety and luxury standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-500 group flex flex-col justify-between" data-aos="fade-up" data-aos-delay="100">
              <div className="relative h-64 bg-slate-50 flex items-center justify-center p-6 border-b border-slate-100">
                <img src={texiPic} alt="City & Outstation Taxi" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">City & Outstation Taxi</h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                    Reliable point-to-point city cabs and intercity round trips with experienced chauffeurs at affordable fares.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600">Punctual & Safe</span>
                  <a href="/contact" className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1">
                    Book Ride <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-500 group flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200">
              <div className="relative h-64 bg-slate-50 flex items-center justify-center p-6 border-b border-slate-100">
                <img src={carPic} alt="Executive Business Cabs" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Executive Business Cabs</h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                    Premium sedan options designed for corporate delegations, VIP airport pick-ups, and executive meetings.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600">Corporate Grade</span>
                  <a href="/contact" className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1">
                    Book Ride <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-500 group flex flex-col justify-between" data-aos="fade-up" data-aos-delay="300">
              <div className="relative h-64 bg-slate-50 flex items-center justify-center p-6 border-b border-slate-100">
                <img src={taxiPic} alt="Family SUV Rentals" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Family SUV Rentals</h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                    Spacious 6-7 seater SUVs ideal for family holiday trips, heavy luggage, and comfortable hill station drives.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600">Extra Luggage</span>
                  <a href="/contact" className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1">
                    Book Ride <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-500 group flex flex-col justify-between" data-aos="fade-up" data-aos-delay="400">
              <div className="relative h-64 bg-slate-50 flex items-center justify-center p-6 border-b border-slate-100">
                <img src={weddingCarPic} alt="Wedding & Event Luxury" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Wedding & Event Luxury</h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                    Elegantly decorated luxury sedans and premium SUVs for bride & groom entries and VIP wedding guests.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600">Royal Experience</span>
                  <a href="/contact" className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1">
                    Book Ride <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= BIG BANNER CARD WITH taxi.png ================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-16">
          <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 rounded-[36px] p-8 sm:p-16 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12" data-aos="zoom-in">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>
            
            <div className="max-w-xl z-10 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-amber-400/15 text-amber-400 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-6 border border-amber-400/30">
                ULTIMATE TRAVEL PARTNER
              </span>
              <h3 className="text-3xl sm:text-5xl font-black leading-[1.1] mb-6 tracking-tight text-white">
                Experience Seamless Road Travel Across India With BookACabNow
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed mb-8">
                From spontaneous weekend getaways to planned corporate itineraries, our premium fleet and professional drivers deliver safety, comfort, and unmatched punctuality every single time.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/20 transition-all duration-300 text-sm transform hover:-translate-y-0.5"
              >
                Book Your Ride Today <ArrowRight size={18} />
              </a>
            </div>

            <div className="z-10 w-full lg:w-auto text-center">
              <img
                src={taxiPicBanner}
                alt="BookACabNow Featured Taxi"
                className="w-full max-w-[500px] h-auto object-contain drop-shadow-[0_25px_40px_rgba(251,191,36,0.25)] hover:scale-105 transition-transform duration-700 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Service;