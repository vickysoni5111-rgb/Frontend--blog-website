import React, { useEffect } from "react";
import Section1 from "./Section1";
import { typo } from "./typography";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  PhoneCall,
  MapPin,
  TrendingUp,
  Zap,
} from "lucide-react";

// AOS Animation Library
import AOS from "aos";
import "aos/dist/aos.css";

// Image Imports
import carPic from "./assets/carpic.png";
import delhiPic from "./assets/delhi.png";
import jaipurPic from "./assets/jaipur.png";
import turePic from "./assets/ture.png";
import mumbaiPic from "./assets/mumbai.png";
import gurugramPic from "./assets/gurugram.png";
import noidaPic from "./assets/noida.png";

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans overflow-hidden">
      
      {/* ================= 1. HERO / TOP SECTION ================= */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-slate-50 border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT SIDE: CONTENT */}
            <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-200 text-amber-900 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase shadow-sm">
                <Sparkles size={14} className="text-amber-600" />
                ABOUT BOOKACABNOW
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2c59] leading-tight">
                Redefining your journey with safety, comfort & reliability.
              </h1>

              {/* Detailed Paragraphs */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Welcome to <strong className="text-[#0f2c59]">BookACabNow</strong>, your premier destination for dependable, affordable, and seamless taxi services across India. Founded with a mission to eliminate travel uncertainties, we bridge the gap between discerning travelers and top-tier transport operators.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                Whether you require an immediate airport pickup, an intercity round-trip for family vacations, or corporate rentals for business delegations, we provide customized fleet solutions backed by round-the-clock customer support. We take immense pride in maintaining high service standards, featuring thoroughly inspected vehicles, background-checked chauffeurs, and upfront pricing without hidden charges.
              </p>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                  <span>100% Transparent Billing</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                  <span>Verified Professional Drivers</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                  <span>24/7 Roadside & Trip Assistance</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-800">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                  <span>Sanitized & Comfortable Cabs</span>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="/cars"
                  className="flex items-center gap-2 bg-[#0f2c59] hover:bg-blue-900 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-950/20 hover:scale-105 transition-all text-sm"
                >
                  Explore Our Fleet <ArrowRight size={16} />
                </a>
                <a
                  href="tel:+9188006780"
                  className="flex items-center gap-2 bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 font-bold px-6 py-3.5 rounded-xl shadow-sm hover:scale-105 transition-all text-sm"
                >
                  <PhoneCall size={16} className="text-amber-500" />
                  Call Support
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: CAR IMAGE */}
            <div className="lg:col-span-5" data-aos="fade-left">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-blue-600/20 rounded-3xl blur-2xl -z-10"></div>
                <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-2xl border border-slate-100 relative group overflow-hidden">
                  <img
                    src={carPic}
                    alt="BookACabNow Car Fleet"
                    className="w-full h-auto max-h-[500px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-400 text-[#0f2c59] flex items-center justify-center shrink-0 font-black text-xl shadow-md">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#0f2c59] text-base">
                        10+ Years Experience
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        Delivering excellence in road travel
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. MULTIPLE CARDS SECTION (Core Features) ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              OUR CORE STRENGTHS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f2c59] mt-3">
              Built for seamless travel experiences
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-medium mt-2">
              Advanced standards tailored to provide absolute comfort and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-gradient-to-br from-blue-50/40 to-white p-8 rounded-3xl border border-blue-100/80 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-black text-[#0f2c59] mb-3">
                Verified Cars, Partners & Trip Support
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                All vehicles are certified and thoroughly inspected. Our trusted transport partners and active trip managers ensure smooth operations from pickup to drop-off.
              </p>
            </div>

            {/* Card 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-gradient-to-br from-amber-50/40 to-white p-8 rounded-3xl border border-amber-100/80 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-amber-400 text-[#0f2c59] rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-amber-400/20 group-hover:scale-110 transition-transform">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-black text-[#0f2c59] mb-3">
                Transparent Fare & Route Context
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                No hidden toll fees or sudden price surges. We provide complete route insights, distance contexts, and clear fare expectations right before you confirm your booking.
              </p>
            </div>

            {/* Card 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-gradient-to-br from-purple-50/40 to-white p-8 rounded-3xl border border-purple-100/80 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-purple-600/20 group-hover:scale-110 transition-transform">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-black text-[#0f2c59] mb-3">
                Responsive Support & Fast Transportation
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Equipped with intelligent time management systems, our cabs optimize travel routes to guarantee fast and efficient transportation backed by 24/7 responsive helpdesks.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. TOURISM PURPOSE CARDS SECTION (3 UPPER & 3 LOWER = 6 CARDS) ================= */}
      <section className="py-20 bg-slate-100/60 border-t border-slate-200/60">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
              POPULAR DESTINATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f2c59] mt-3">
              A clear purpose for every journey
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-medium mt-2">
              Explore magnificent cities, tech hubs, and historical landmarks with our luxury cabs.
            </p>
          </div>

          {/* 3 Columns Grid for 3 Upper & 3 Lower Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Delhi Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={delhiPic}
                  alt="Delhi Tour Cab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                  <MapPin size={14} className="text-amber-400" /> Capital Hub
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-black text-[#0f2c59] mb-3">Delhi Darshan & Outstation</h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    Uncover historic monuments, bustling traditional markets, and seamless airport or intercity transit across the NCR region with customized chauffeur-driven cabs.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-blue-600">Starting @ ₹1,499</span>
                  <a href="/contact" className="text-xs font-black text-[#0f2c59] hover:text-blue-600 flex items-center gap-1">
                    Book Trip <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Jaipur Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={jaipurPic}
                  alt="Jaipur Tour Cab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                  <MapPin size={14} className="text-amber-400" /> Pink City
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-black text-[#0f2c59] mb-3">Jaipur Royal Heritage</h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    Experience majestic hilltop forts like Amber & Nahargarh, grand royal palaces, and authentic local bazaars with our highly knowledgeable driver partners.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-blue-600">Starting @ ₹1,299</span>
                  <a href="/contact" className="text-xs font-black text-[#0f2c59] hover:text-blue-600 flex items-center gap-1">
                    Book Trip <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Udaipur / Ture Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={turePic}
                  alt="Udaipur Lake Tour Cab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                  <MapPin size={14} className="text-amber-400" /> City of Lakes
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-black text-[#0f2c59] mb-3">Udaipur Scenic Lake Tours</h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    Enjoy serene lake tours, romantic sunset viewpoints, and exquisite palace architectures in full luxury and air-conditioned travel comfort.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-blue-600">Starting @ ₹1,799</span>
                  <a href="/contact" className="text-xs font-black text-[#0f2c59] hover:text-blue-600 flex items-center gap-1">
                    Book Trip <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* 4. Mumbai Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={mumbaiPic}
                  alt="Mumbai Coastal Drive Cab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                  <MapPin size={14} className="text-amber-400" /> Financial Capital
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-black text-[#0f2c59] mb-3">Mumbai Coastal Drives</h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    Cruise effortlessly along Marine Drive, Sea Link, iconic landmarks, and corporate business hubs with punctual and luxury ride solutions.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-blue-600">Starting @ ₹1,599</span>
                  <a href="/contact" className="text-xs font-black text-[#0f2c59] hover:text-blue-600 flex items-center gap-1">
                    Book Trip <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* 5. Gurugram Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={gurugramPic}
                  alt="Gurugram Corporate Cab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                  <MapPin size={14} className="text-amber-400" /> Millennium City
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-black text-[#0f2c59] mb-3">Gurugram Corporate Cabs</h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    Premium rentals for Cyber City, corporate parks, golf course road, and fast-track airport connections tailored for business professionals.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-blue-600">Starting @ ₹1,199</span>
                  <a href="/contact" className="text-xs font-black text-[#0f2c59] hover:text-blue-600 flex items-center gap-1">
                    Book Trip <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* 6. Noida Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={noidaPic}
                  alt="Noida City Cab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                  <MapPin size={14} className="text-amber-400" /> IT & Media Hub
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-black text-[#0f2c59] mb-3">Noida & Greater Noida Express</h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    Smooth city rentals and expressway rides connecting tech sectors, residential complexes, and upcoming international transport corridors.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-blue-600">Starting @ ₹1,149</span>
                  <a href="/contact" className="text-xs font-black text-[#0f2c59] hover:text-blue-600 flex items-center gap-1">
                    Book Trip <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* VIEW MORE / CONTACT BUTTON */}
          <div className="text-center mt-14" data-aos="fade-up">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#0f2c59] hover:bg-blue-900 text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-blue-950/20 hover:scale-105 transition-all text-base"
            >
              View More Destinations & Book Now <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>
<Section1/>
    </div>
  );
};

export default About;