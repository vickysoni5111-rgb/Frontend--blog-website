import React, { useEffect } from "react";
import TimeManagementSection from "./TimeManagementSection";
import PremiumFeatures from "./PremiumFeatures";
import StatsSection from "./StatsSection";
import Card from "./Card";

import Card1 from "./Card1";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  ShieldCheck,
  Car,
  MapPin,
  Users,
  Headphones,
  Clock,
  Layers,
  Plane,
  Building2,
  Search,
  CreditCard,
} from "lucide-react";

// AOS Animation Library Imports
import AOS from "aos";
import "aos/dist/aos.css";

import bgPic from "./assets/background1.png";
import texiPic from "./assets/texi.png";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-12 pb-16 lg:py-20">
        
        {/* BACKGROUND IMAGE WITH BALANCED OVERLAY */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgPic}
            alt="Background Car"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent/40"></div>
        </div>

        {/* MAIN CONTAINER */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
          
          {/* HERO CONTENT SECTION */}
          <div className="max-w-2xl text-left mb-14">
            
            {/* Badge */}
            <div 
              data-aos="fade-right" 
              data-aos-delay="100"
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-sm border border-blue-100 text-blue-900"
            >
              <span className="animate-bounce">⭐</span> PREMIUM TAXI BOOKING PLATFORM
            </div>

            {/* Heading */}
            <h1 
              data-aos="fade-right" 
              data-aos-delay="200"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2c59] leading-tight mb-5"
            >
              Book verified cabs for every{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                city, airport,
              </span>{" "}
              and outstation ride
            </h1>

            {/* Description */}
            <p 
              data-aos="fade-right" 
              data-aos-delay="300"
              className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed font-medium"
            >
              Compare trusted taxi partners, choose the right car, and travel
              with clear pricing, 24/7 driver support, and reliable pickup times.
            </p>

            {/* Action Buttons */}
            <div 
              data-aos="fade-right" 
              data-aos-delay="400"
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <button className="flex items-center gap-2 px-7 py-3.5 bg-[#0f2c59] text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-900 hover:scale-105 transition-all duration-300">
                Book a Cab <ArrowRight size={16} />
              </button>

              <button className="px-7 py-3.5 bg-white/90 backdrop-blur border border-gray-200 text-gray-800 rounded-xl text-sm font-bold shadow-sm hover:bg-white hover:scale-105 transition-all duration-300">
                List Your Car
              </button>
            </div>

            {/* FEATURES PILLS */}
            <div className="flex flex-wrap items-center gap-3">
              <div 
                data-aos="fade-up" 
                data-aos-delay="500"
                className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-sm border border-gray-100 text-xs sm:text-sm font-semibold text-gray-800"
              >
                <CheckCircle2 className="text-blue-600" size={16} />
                Verified Drivers
              </div>

              <div 
                data-aos="fade-up" 
                data-aos-delay="600"
                className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-sm border border-gray-100 text-xs sm:text-sm font-semibold text-gray-800"
              >
                <CheckCircle2 className="text-indigo-600" size={16} />
                Transparent Fares
              </div>

              <div 
                data-aos="fade-up" 
                data-aos-delay="700"
                className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-sm border border-gray-100 text-xs sm:text-sm font-semibold text-gray-800"
              >
                <Star className="text-yellow-500 fill-yellow-500" size={16} />
                Top Rated
              </div>
            </div>

          </div>

          {/* BOTTOM STATS BAR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl">
            
            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-gray-100 hover:scale-105 transition-all duration-300 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                <Car className="text-blue-600" size={22} />
              </div>
              <h3 className="font-extrabold text-2xl text-[#0f2c59]">50K+</h3>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">Rides Completed</p>
            </div>

            <div 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-gray-100 hover:scale-105 transition-all duration-300 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-3">
                <MapPin className="text-purple-600" size={22} />
              </div>
              <h3 className="font-extrabold text-2xl text-[#0f2c59]">200+</h3>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">Cities Covered</p>
            </div>

            <div 
              data-aos="fade-up" 
              data-aos-delay="400"
              className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-gray-100 hover:scale-105 transition-all duration-300 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-3">
                <Users className="text-green-600" size={22} />
              </div>
              <h3 className="font-extrabold text-2xl text-[#0f2c59]">25K+</h3>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">Happy Customers</p>
            </div>

            <div 
              data-aos="fade-up" 
              data-aos-delay="500"
              className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-gray-100 hover:scale-105 transition-all duration-300 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-3">
                <ShieldCheck className="text-amber-600" size={22} />
              </div>
              <h3 className="font-extrabold text-2xl text-[#0f2c59]">100%</h3>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">Verified & Trusted</p>
            </div>

          </div>

        </div>
      </section>
<TimeManagementSection/>
      {/* ================= ABOUT / FEATURE SHOWCASE SECTION ================= */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
          
          <div className="text-left mb-12" data-aos="fade-up">
            <div className="inline-block bg-amber-100/60 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase mb-3">
              ABOUT BOOKACABNOW
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2c59] tracking-tight">
              A cleaner way to book reliable taxi travel
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3 max-w-2xl font-medium">
              We connect travelers with verified cab partners, practical route choices, and a booking experience designed for confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7" data-aos="fade-right">
              <div className="relative p-4 bg-white rounded-3xl shadow-2xl border border-gray-100 group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={texiPic}
                    alt="Taxi Showcase"
                    className="w-full h-[400px] sm:h-[450px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3">
                    <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                      <ShieldCheck size={22} />
                    </div>
                    <div>
                      <p className="font-extrabold text-sm text-[#0f2c59]">Verified travel network</p>
                      <p className="text-xs text-gray-500">Built for safer cab discovery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5" data-aos="fade-left">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 space-y-6">
                
                <div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-amber-50/60 cursor-pointer border border-transparent hover:border-amber-200/60">
                  <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-amber-400 group-hover:border-amber-500 group-hover:shadow-md group-hover:text-white text-amber-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-[#0f2c59] group-hover:text-amber-900 transition-colors">
                      Verified Drivers
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                      All our drivers are background-checked and trained for professional service.
                    </p>
                  </div>
                </div>

                <hr className="border-gray-100 my-2" />

                <div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-amber-50/60 cursor-pointer border border-transparent hover:border-amber-200/60">
                  <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-amber-400 group-hover:border-amber-500 group-hover:shadow-md group-hover:text-white text-amber-600">
                    <Layers size={20} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-[#0f2c59] group-hover:text-amber-900 transition-colors">
                      Transparent Pricing
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                      No hidden charges. Know your fare before you book.
                    </p>
                  </div>
                </div>

                <hr className="border-gray-100 my-2" />

                <div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-amber-50/60 cursor-pointer border border-transparent hover:border-amber-200/60">
                  <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-amber-400 group-hover:border-amber-500 group-hover:shadow-md group-hover:text-white text-amber-600">
                    <Headphones size={20} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-[#0f2c59] group-hover:text-amber-900 transition-colors">
                      Wide Fleet
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                      Sedans, SUVs, MUVs — pick the right vehicle for every journey.
                    </p>
                  </div>
                </div>

                <hr className="border-gray-100 my-2" />

                <div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-amber-50/60 cursor-pointer border border-transparent hover:border-amber-200/60">
                  <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-amber-400 group-hover:border-amber-500 group-hover:shadow-md group-hover:text-white text-amber-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-[#0f2c59] group-hover:text-amber-900 transition-colors">
                      On-Time Guarantee
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                      We track your ride in real-time so you never miss a flight or meeting.
                    </p>
                  </div>
                </div>

              </div>

              <div className="flex items-center gap-4 mt-6">
                <button className="flex items-center gap-2 px-6 py-3 bg-[#0f2c59] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover:bg-blue-900 hover:scale-105 transition-all">
                  Learn more <ArrowRight size={14} />
                </button>
                <span className="text-xs sm:text-sm text-gray-500 font-medium">
                  Discover how BookACabNow works
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= TAXI SERVICES SECTION ================= */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
          
          <div className="text-left mb-12" data-aos="fade-up">
            <div className="inline-block bg-amber-100/60 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase mb-3">
              SERVICES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2c59] tracking-tight">
              Taxi services for every travel plan
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3 max-w-2xl font-medium">
              Choose cab services shaped for daily movement, long-distance trips, airports, and business travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Service 1 */}
            <div data-aos="fade-up" data-aos-delay="100" className="group relative bg-white p-7 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-amber-400 group-hover:border-amber-500 group-hover:text-white text-amber-600 shadow-sm">
                    <Layers size={22} />
                  </div>
                  <span className="text-xs font-extrabold text-gray-300 group-hover:text-amber-500 transition-colors">01</span>
                </div>
                <h3 className="font-extrabold text-xl text-[#0f2c59] mb-2 group-hover:text-amber-700 transition-colors">
                  Outstation Cabs
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  One way and round trip taxi bookings with route-ready drivers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-2 text-xs font-bold text-[#0f2c59] group-hover:text-amber-600 transition-colors">
                Explore route <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Service 2 */}
            <div data-aos="fade-up" data-aos-delay="200" className="group relative bg-white p-7 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-amber-400 group-hover:border-amber-500 group-hover:text-white text-amber-600 shadow-sm">
                    <Plane size={22} />
                  </div>
                  <span className="text-xs font-extrabold text-gray-300 group-hover:text-amber-500 transition-colors">02</span>
                </div>
                <h3 className="font-extrabold text-xl text-[#0f2c59] mb-2 group-hover:text-amber-700 transition-colors">
                  Airport Transfers
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  On-time pickup and drop for flights, luggage, and late arrivals.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-2 text-xs font-bold text-[#0f2c59] group-hover:text-amber-600 transition-colors">
                Explore route <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Service 3 */}
            <div data-aos="fade-up" data-aos-delay="300" className="group relative bg-white p-7 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-amber-400 group-hover:border-amber-500 group-hover:text-white text-amber-600 shadow-sm">
                    <Clock size={22} />
                  </div>
                  <span className="text-xs font-extrabold text-gray-300 group-hover:text-amber-500 transition-colors">03</span>
                </div>
                <h3 className="font-extrabold text-xl text-[#0f2c59] mb-2 group-hover:text-amber-700 transition-colors">
                  Local Rentals
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Hourly city rentals for meetings, errands, and shopping days.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-2 text-xs font-bold text-[#0f2c59] group-hover:text-amber-600 transition-colors">
                Explore route <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Service 4 */}
            <div data-aos="fade-up" data-aos-delay="400" className="group relative bg-white p-7 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-amber-400 group-hover:border-amber-500 group-hover:text-white text-amber-600 shadow-sm">
                    <Building2 size={22} />
                  </div>
                  <span className="text-xs font-extrabold text-gray-300 group-hover:text-amber-500 transition-colors">04</span>
                </div>
                <h3 className="font-extrabold text-xl text-[#0f2c59] mb-2 group-hover:text-amber-700 transition-colors">
                  Corporate Travel
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Reliable cabs for teams, guests, events, and executive movement.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-2 text-xs font-bold text-[#0f2c59] group-hover:text-amber-600 transition-colors">
                Explore route <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= STEPS TO BOOKING SECTION ================= */}
      <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
          
          <div className="text-left mb-12" data-aos="fade-up">
            <div className="inline-block bg-amber-100/60 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase mb-3">
              STEPS TO BOOKING
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2c59] tracking-tight">
              Book your cab in four simple steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div data-aos="fade-up" data-aos-delay="100" className="group relative bg-white p-7 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-amber-400 group-hover:border-amber-500 group-hover:text-white text-[#0f2c59] shadow-sm">
                    <Search size={22} />
                  </div>
                  <span className="text-xs font-extrabold tracking-wider text-gray-400 group-hover:text-amber-600 transition-colors">STEP 01</span>
                </div>
                <h3 className="font-extrabold text-xl text-[#0f2c59] mb-2 group-hover:text-amber-700 transition-colors">
                  Search route
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Add pickup, drop, schedule, and trip type.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 text-xs font-bold text-gray-400 group-hover:text-[#0f2c59] transition-colors">
                Quick & Easy Search
              </div>
            </div>

            {/* Step 2 */}
            <div data-aos="fade-up" data-aos-delay="200" className="group relative bg-white p-7 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-amber-400 group-hover:border-amber-500 group-hover:text-white text-[#0f2c59] shadow-sm">
                    <Car size={22} />
                  </div>
                  <span className="text-xs font-extrabold tracking-wider text-gray-400 group-hover:text-amber-600 transition-colors">STEP 02</span>
                </div>
                <h3 className="font-extrabold text-xl text-[#0f2c59] mb-2 group-hover:text-amber-700 transition-colors">
                  Choose cab
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Compare cars, seats, partner details, and pricing.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 text-xs font-bold text-gray-400 group-hover:text-[#0f2c59] transition-colors">
                Best Rates Available
              </div>
            </div>

            {/* Step 3 */}
            <div data-aos="fade-up" data-aos-delay="300" className="group relative bg-white p-7 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-amber-400 group-hover:border-amber-500 group-hover:text-white text-[#0f2c59] shadow-sm">
                    <CreditCard size={22} />
                  </div>
                  <span className="text-xs font-extrabold tracking-wider text-gray-400 group-hover:text-amber-600 transition-colors">STEP 03</span>
                </div>
                <h3 className="font-extrabold text-xl text-[#0f2c59] mb-2 group-hover:text-amber-700 transition-colors">
                  Confirm booking
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Submit a clean booking request without contract changes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 text-xs font-bold text-gray-400 group-hover:text-[#0f2c59] transition-colors">
                Instant Confirmation
              </div>
            </div>

            {/* Step 4 */}
            <div data-aos="fade-up" data-aos-delay="400" className="group relative bg-white p-7 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:bg-amber-400 group-hover:border-amber-500 group-hover:text-white text-[#0f2c59] shadow-sm">
                    <ShieldCheck size={22} />
                  </div>
                  <span className="text-xs font-extrabold tracking-wider text-gray-400 group-hover:text-amber-600 transition-colors">STEP 04</span>
                </div>
                <h3 className="font-extrabold text-xl text-[#0f2c59] mb-2 group-hover:text-amber-700 transition-colors">
                  Travel safely
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Ride with verified partners and support visibility.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 text-xs font-bold text-gray-400 group-hover:text-[#0f2c59] transition-colors">
                24/7 Support
              </div>
            </div>

          </div>

        </div>
      </section>

<StatsSection/>

      {/* ================= CHOOSE CARS SECTION ================= */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4" data-aos="fade-up">
            <div>
              <div className="inline-block bg-amber-100/60 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase mb-3">
                CHECKOUT OUR CABS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2c59] tracking-tight">
                Choose from clean, route-ready cars
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mt-3 font-medium">
                Browse featured cabs with seating, fuel, and pricing details.
              </p>
            </div>

            <button className="self-start md:self-auto px-6 py-3 bg-white border border-gray-200 hover:border-amber-400 text-[#0f2c59] hover:bg-amber-400/10 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all duration-300">
              View all cars
            </button>
          </div>

          {/* Listings Container Card */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="bg-white rounded-3xl p-10 sm:p-16 border border-gray-100 shadow-xl text-center flex flex-col items-center justify-center min-h-[300px]"
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 mb-4 shadow-inner">
              <Car size={32} />
            </div>
            <h3 className="font-extrabold text-xl text-[#0f2c59] mb-1">No listings available yet.</h3>
            <p className="text-sm text-gray-500 max-w-sm">
              Our partner fleet listings will appear here shortly. Check back soon or explore our available routes!
            </p>
          </div>

        </div>
         </section>

      <PremiumFeatures />
      <Card/>
      <Card1/>
    </div>
  );
};

export default Home;