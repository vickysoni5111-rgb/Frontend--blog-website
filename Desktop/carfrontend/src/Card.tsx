import React, { useEffect, useState } from "react";
import { MapPin, Star, ShieldCheck, ArrowRight, Navigation2, ChevronLeft, ChevronRight } from "lucide-react";

// ============ BACKGROUND SLIDESHOW IMAGES ============
import bgTexi from "./assets/ture.png";
import bgDelhi from "./assets/delhi.png";
import bgJaipur from "./assets/jaipur.png";

// ============ CARD IMAGES (each company gets ONE fixed image) ============
import car1 from "./assets/car1.png";
import pic3 from "./assets/pic3.png";
import car2 from "./assets/car2.png";
import carpic from "./assets/carpic.png";
import travelBg from "./assets/travelbackgroundpic.png";
import texiCard from "./assets/texi.png";
import carCard from "./assets/car.png";
import taxiCard from "./assets/taxi.png";

// ============ DATA ============
const backgroundSlides = [
  { image: bgTexi, label: "On the highway" },
  { image: bgDelhi, label: "Delhi NCR" },
  { image: bgJaipur, label: "Jaipur, Rajasthan" },
];

const companies = [
  {
    id: 1,
    name: "Jaipur Prime Cabs",
    location: "Jaipur",
    rating: "4.9",
    verified: true,
    image: car1,
  },
  {
    id: 2,
    name: "Royal Route Taxi",
    location: "Delhi NCR",
    rating: "4.8",
    verified: true,
    image: car2,
  },
  {
    id: 3,
    name: "Desert Line Travels",
    location: "Jodhpur",
    rating: "4.7",
    verified: true,
    image: carpic,
  },
  {
    id: 4,
    name: "Pink City Movers",
    location: "Jaipur",
    rating: "4.6",
    verified: true,
    image: pic3,
  },
  {
    id: 5,
    name: "Metro Fleet Rides",
    location: "Udaipur",
    rating: "4.8",
    verified: true,
    image: travelBg,
  },
  {
    id: 6,
    name: "Highway Comfort Cabs",
    location: "Kota",
    rating: "4.7",
    verified: true,
    image: texiCard,
  },
  {
    id: 7,
    name: "Blue Star Taxi Co.",
    location: "Ajmer",
    rating: "4.9",
    verified: true,
    image: carCard,
  },
  {
    id: 8,
    name: "Sunrise Cab Network",
    location: "Ramganj Mandi",
    rating: "4.6",
    verified: true,
    image: taxiCard,
  },
];

const CARDS_PER_SLIDE = 3;

// ============ SINGLE STATIC CARD ============
const CompanyCard: React.FC<{ company: (typeof companies)[number] }> = ({ company }) => {
  return (
    <div className="group relative bg-white rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* IMAGE */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={company.image}
          alt={company.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* small floating badge (same photo, mini preview) */}
        <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60 flex items-center justify-center overflow-hidden">
          <img src={company.image} alt="thumb" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* CARD BODY */}
      <div className="p-6">
        <h3 className="font-extrabold text-lg text-[#0f2c59] mb-1">{company.name}</h3>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 mb-4">
          <MapPin size={14} />
          {company.location}
        </div>

        <div className="flex items-center gap-2 mb-5">
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 rounded-full text-[11px] font-bold">
            <ShieldCheck size={12} /> Verified
          </span>
          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-100 px-2.5 py-1 rounded-full text-[11px] font-bold">
            <Star size={12} className="fill-amber-500 text-amber-500" /> {company.rating}
          </span>
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#0f2c59] text-white rounded-xl text-sm font-bold shadow-md hover:bg-blue-900 hover:scale-[1.02] transition-all duration-300">
          Book from fleet <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
};

// ============ MAIN SECTION ============
const ListedCompanies: React.FC = () => {
  const [activeBg, setActiveBg] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const totalSlides = Math.ceil(companies.length / CARDS_PER_SLIDE);
  const slides = Array.from({ length: totalSlides }, (_, i) =>
    companies.slice(i * CARDS_PER_SLIDE, i * CARDS_PER_SLIDE + CARDS_PER_SLIDE)
  );

  // Auto-change BACKGROUND only, every 4.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBg((prev) => (prev + 1) % backgroundSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (i: number) => setSlideIndex(i);
  const goPrev = () => setSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const goNext = () => setSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  return (
    <section className="relative py-24 overflow-hidden">
      {/* ============ BACKGROUND SLIDESHOW (lighter overlay so photo shows clearly) ============ */}
      <div className="absolute inset-0 z-0">
        {backgroundSlides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            alt={slide.label}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
              i === activeBg ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* lighter overlay: just enough for text contrast, image stays visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2c59]/55 via-[#0f2c59]/30 to-gray-50" />
      </div>

      {/* background slideshow position dots (top-right, small, informational) */}
      <div className="absolute top-8 right-6 lg:right-16 z-10 flex items-center gap-1.5">
        {backgroundSlides.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeBg ? "w-6 bg-amber-400" : "w-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* ============ CONTENT ============ */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4" data-aos="fade-up">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-100/90 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase mb-4">
              <Navigation2 size={12} /> Listed Companies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Checkout our listed taxi companies
            </h2>
            <p className="text-gray-200 text-base sm:text-lg mt-3 max-w-xl font-medium">
              Discover verified taxi partners with service coverage, ratings, and fleet visibility.
            </p>
          </div>

          <button className="self-start md:self-auto px-6 py-3 bg-white/95 backdrop-blur border border-white/60 hover:bg-white text-[#0f2c59] rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-all duration-300 hover:scale-105">
            View companies
          </button>
        </div>

        {/* ============ CARD SLIDER (whole set of cards slides left/right, pushed down) ============ */}
        <div className="relative mt-16 sm:mt-20">
          {/* Prev / Next arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={goPrev}
                aria-label="Previous companies"
                className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-[#0f2c59] hover:bg-amber-50 hover:scale-110 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goNext}
                aria-label="Next companies"
                className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-[#0f2c59] hover:bg-amber-50 hover:scale-110 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              {slides.map((group, si) => (
                <div key={si} className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-1">
                  {group.map((company) => (
                    <CompanyCard key={company.id} company={company} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============ CAROUSEL DOTS — OUTSIDE the cards, slides whole card-sets ============ */}
        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-2.5 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === slideIndex ? "w-8 bg-[#0f2c59]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ListedCompanies;