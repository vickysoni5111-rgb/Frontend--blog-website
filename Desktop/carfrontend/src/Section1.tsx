import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Zap,
  Wifi,
  Navigation,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Car,
  Heart,
  Calendar,
  Clock,
  PhoneCall,
  ArrowRight,
  Gauge,
  SlidersHorizontal,
} from "lucide-react";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

// Image Imports (Check paths according to your project structure)
import car1Pic from "./assets/car1.png";
import texiPic from "./assets/texi.png";
import carPic from "./assets/car.png";
import taxiPic from "./assets/taxi.png";
import weddingCarPic from "./assets/wedingcarpic.png";

// FAQ Interface & Data
interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I book a cab with BookACabNow?",
    answer:
      "You can easily book a cab by visiting our booking form on the homepage, choosing your pickup/drop locations, selecting your vehicle tier, or calling our 24/7 support desk directly.",
  },
  {
    question: "Are there any hidden fees or extra charges?",
    answer:
      "No, we strictly follow a 100% transparent billing policy. Toll taxes, state taxes, and driver allowances are clearly mentioned upfront during booking.",
  },
  {
    question: "Are your cars sanitized and drivers background-verified?",
    answer:
      "Yes! Every vehicle undergoes strict hygiene and safety inspections before each trip, and all our chauffeurs are police-verified with professional driving licenses.",
  },
  {
    question: "Can I book a premium car for weddings and special events?",
    answer:
      "Absolutely! We offer decorated luxury sedans and premium SUVs specially tailored for wedding events, VIP transport, and family celebrations.",
  },
  {
    question: "What is your cancellation policy for outstation rides?",
    answer:
      "We offer hassle-free cancellations up to 2 hours before the scheduled pickup time with zero cancellation fee applied.",
  },
];

const Section1: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-slate-900 font-sans overflow-hidden">
      
      {/* ================= 1. CAR1 SHOWCASE & FUNCTIONALITIES ================= */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-600 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase">
              <Sparkles size={14} /> PREMIUM VEHICLE SPECS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 leading-tight">
              Next-Generation Travel Comfort & Tech
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium mt-3">
              Engineered for ultimate safety, smooth performance, and luxury highway rides.
            </p>
          </div>

          {/* Grid Layout: Left Features | Main Center Car Pic | Right Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Features Column */}
            <div className="lg:col-span-3 space-y-8" data-aos="fade-right">
              
              {/* Feature 1 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-400/60 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-3">
                  <ShieldCheck size={22} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Advanced ADAS Safety</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Dual airbags, ABS with EBD, and emergency braking for maximum passenger safety.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-400/60 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-3">
                  <Navigation size={22} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Real-Time GPS Tracking</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Live vehicle tracking synced directly with our 24/7 central trip management hub.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-400/60 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-3">
                  <SlidersHorizontal size={22} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Dual-Zone Climate</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Individual AC vents with high-efficiency air filters for clean, fresh cabin air.
                </p>
              </div>

            </div>

            {/* Center: BIG CAR1 PIC */}
            <div className="lg:col-span-6 text-center relative py-6" data-aos="zoom-in">
              {/* Background Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[480px] sm:h-[480px] bg-amber-400/20 rounded-full blur-3xl -z-10"></div>
              
              <img
                src={car1Pic}
                alt="BookACabNow Featured Car"
                className="w-full h-auto max-h-[480px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-700 mx-auto"
              />

              <div className="mt-6 inline-flex items-center gap-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-slate-200 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Gauge size={16} className="text-amber-500" /> High Efficiency
                </div>
                <div className="w-px h-4 bg-slate-200"></div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <ShieldCheck size={16} className="text-amber-500" /> 5-Star Safety
                </div>
              </div>
            </div>

            {/* Right Features Column */}
            <div className="lg:col-span-3 space-y-8" data-aos="fade-left">
              
              {/* Feature 4 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-400/60 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-3">
                  <Wifi size={22} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">In-Cab Wi-Fi & Charging</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Fast mobile charging ports and complimentary Wi-Fi for uninterrupted work on the go.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-400/60 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-3">
                  <Zap size={22} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Ultra-Quiet Cabin</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Soundproof acoustics ensuring a peaceful and fatigue-free long-distance trip.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-400/60 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-3">
                  <Sparkles size={22} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Leather Executive Seats</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Plush leather upholstery with extra legroom for maximum comfort during travel.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. FLEET & SERVICES CARDS SECTION ================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          
          <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              SPECIALIZED FLEET SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
              Choose the perfect ride for your trip
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium mt-2">
              From daily local rides to grand wedding arrivals, we have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1: Texi.png */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="relative h-56 bg-slate-100 flex items-center justify-center p-4">
                <img
                  src={texiPic}
                  alt="Outstation Taxi"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">City & Outstation Taxi</h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    Reliable point-to-point city cabs and intercity round trips with experienced chauffeurs at budget fares.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600">Punctual & Safe</span>
                  <a href="/contact" className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1">
                    Book Ride <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Car.png */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="relative h-56 bg-slate-100 flex items-center justify-center p-4">
                <img
                  src={carPic}
                  alt="Executive Sedan"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Executive Business Cabs</h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    Premium sedan options for corporate delegations, airport pick & drops, and business meetings.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600">Corporate Grade</span>
                  <a href="/contact" className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1">
                    Book Ride <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Taxi.png */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="relative h-56 bg-slate-100 flex items-center justify-center p-4">
                <img
                  src={taxiPic}
                  alt="Family SUV Taxi"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Family SUV Rentals</h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    Spacious 6-7 seater SUVs perfect for holiday trips, heavy luggage, and comfortable hill station drives.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600">Extra Luggage</span>
                  <a href="/contact" className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1">
                    Book Ride <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4: Wedingcarpic.png */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="relative h-56 bg-slate-100 flex items-center justify-center p-4">
                <img
                  src={weddingCarPic}
                  alt="Wedding & Special Event Car"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Wedding & Event Luxury</h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    Elegantly decorated luxury sedans and premium SUVs for bride & groom entries and VIP wedding guests.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
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

      {/* ================= 3. FAQ SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-16">
          
          <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              GOT QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium mt-2">
              Everything you need to know about our cabs, booking process, and pricing.
            </p>
          </div>

          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-amber-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="w-8 h-8 rounded-xl bg-slate-200 text-amber-600 flex items-center justify-center shrink-0">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed font-medium border-t border-slate-200 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Help CTA */}
          <div className="mt-12 text-center bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="font-extrabold text-slate-900 text-base">Still have questions?</h4>
              <p className="text-xs text-slate-600">Our customer team is available 24 hours a day to assist you.</p>
            </div>
            <a
              href="tel:+9188006780"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-6 py-3 rounded-xl shadow-md transition-all text-xs"
            >
              <PhoneCall size={16} /> Call Support Now
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Section1;