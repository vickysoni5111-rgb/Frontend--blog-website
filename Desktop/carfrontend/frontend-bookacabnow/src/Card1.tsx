import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Car,
  Building2,
  Calendar,
  User,
} from "lucide-react";

// ============ IMAGES ============
import car1 from "./assets/car1.png";
import pic3 from "./assets/pic3.png";
import car2 from "./assets/car2.png";
import carpic from "./assets/carpic.png";
import travelBg from "./assets/travelbackgroundpic.png";
import taxiCard from "./assets/taxi.png";
import pic1 from "./assets/car1.png";

/* ======================================================================
   SECTION 1 — GROW BOOKINGS CTA BANNER
   ====================================================================== */
export const GrowBookingCTA: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-0">
      <div
        data-aos="fade-up"
        className="relative max-w-[1400px] mx-auto bg-[#0b2853] rounded-3xl px-8 sm:px-12 py-12 sm:py-14 overflow-hidden shadow-2xl"
      >
        {/* decorative background image + circles */}
        <img
          src={pic1}
          alt=""
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-10 pointer-events-none"
        />
        <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute right-24 bottom-0 w-40 h-40 rounded-full border border-white/10 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* left content */}
          <div className="max-w-xl" data-aos="fade-right" data-aos-delay="100">
            <div className="inline-flex items-center gap-2 border border-amber-400/50 text-amber-400 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Rent your cab interested?
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
              Grow your bookings with BookACabNow
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
              List your car or company, showcase your fleet, and reach travelers who are already
              searching for verified taxi options.
            </p>
          </div>

          {/* right actions */}
          <div className="flex flex-col items-start lg:items-end gap-3" data-aos="fade-left" data-aos-delay="200">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
              <CheckCircle2 size={14} />
              Partner onboarding available
            </div>

            <Link
              to="/list-car"
              className="flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-xl text-sm font-extrabold shadow-lg transition-all duration-300 hover:scale-105 w-full lg:w-auto justify-center"
            >
              <Car size={16} /> List Your Car <ArrowRight size={15} />
            </Link>

            <Link
              to="/list-company"
              className="flex items-center gap-2 px-6 py-3 border border-white/25 text-white hover:bg-amber-400 hover:text-slate-900 hover:border-amber-400 rounded-xl text-sm font-extrabold transition-all duration-300 w-full lg:w-auto justify-center"
            >
              <Building2 size={16} /> List Your Company
            </Link>

            <p className="text-[11px] text-gray-400 font-medium max-w-[220px] text-left lg:text-right mt-1">
              Simple onboarding with profile, fleet, and verification support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ======================================================================
   SECTION 2 — TESTIMONIALS (auto-sliding + arrows)
   ====================================================================== */
const testimonials = [
  { id: 1, name: "Amit Sharma", role: "Outstation customer", quote: "Clean cab, polite driver, and the fare was clear before pickup." },
  { id: 2, name: "Pooja Mehta", role: "Airport transfer", quote: "The driver arrived early and helped with luggage. Smooth experience." },
  { id: 3, name: "Rahul Singh", role: "Business trip", quote: "Easy booking and responsive support throughout the round trip." },
  { id: 4, name: "Neha Verma", role: "City ride", quote: "Fair pricing and the tracking link made pickup stress-free." },
  { id: 5, name: "Suresh Yadav", role: "Wedding car booking", quote: "The decorated car arrived on time and looked exactly as promised." },
  { id: 6, name: "Kavita Joshi", role: "Family trip", quote: "Spacious SUV, careful driving, and great support for a long route." },
];

const TESTIMONIALS_PER_SLIDE = 3;

export const TestimonialsSection: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / TESTIMONIALS_PER_SLIDE);
  const slides = Array.from({ length: totalSlides }, (_, i) =>
    testimonials.slice(i * TESTIMONIALS_PER_SLIDE, i * TESTIMONIALS_PER_SLIDE + TESTIMONIALS_PER_SLIDE)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const goPrev = () => setSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const goNext = () => setSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
        <div className="mb-12" data-aos="fade-up">
          <div className="inline-block bg-amber-100/60 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase mb-3">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2c59] tracking-tight">
            Travelers trust us for timely, clean rides
          </h2>
        </div>

        <div className="relative">
          {totalSlides > 1 && (
            <>
              <button
                onClick={goPrev}
                aria-label="Previous testimonials"
                className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-[#0f2c59] hover:bg-amber-400 hover:text-slate-900 hover:border-amber-400 hover:scale-110 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goNext}
                aria-label="Next testimonials"
                className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-[#0f2c59] hover:bg-amber-400 hover:text-slate-900 hover:border-amber-400 hover:scale-110 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              {slides.map((group, si) => (
                <div key={si} className="w-full shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6 px-1">
                  {group.map((t, i) => (
                    <div
                      key={t.id}
                      data-aos="fade-up"
                      data-aos-delay={100 + i * 100}
                      className="bg-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center text-slate-900">
                          <Quote size={16} className="fill-slate-900" />
                        </div>
                        <div className="flex items-center gap-0.5 text-amber-500">
                          {Array.from({ length: 5 }).map((_, s) => (
                            <Star key={s} size={13} className="fill-amber-500" />
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-slate-700 leading-relaxed font-medium mb-6">
                        "{t.quote}"
                      </p>

                      <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          <User size={16} />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-extrabold text-sm text-[#0f2c59]">{t.name}</span>
                            <CheckCircle2 size={13} className="text-emerald-500" />
                          </div>
                          <p className="text-xs text-gray-500 font-medium">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-2.5 mt-9">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                aria-label={`Go to testimonial slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === slideIndex ? "w-8 bg-[#0f2c59]" : "w-2.5 bg-gray-300 hover:bg-amber-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

/* ======================================================================
   SECTION 3 — CONTACT / NEED HELP CHOOSING A CAB
   ====================================================================== */
export const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50/50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
        <div className="mb-12" data-aos="fade-up">
          <div className="inline-block bg-amber-100/60 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase mb-3">
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2c59] tracking-tight mb-2">
            Need help choosing a cab?
          </h2>
          <p className="text-gray-600 text-base font-medium">
            Talk to the team for route guidance, fleet help, and booking support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Call */}
          <a
            href="tel:+919876543210"
            data-aos="fade-up"
            data-aos-delay="100"
            className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-full bg-amber-400 group-hover:bg-amber-300 flex items-center justify-center text-slate-900 mb-5 transition-colors">
              <Phone size={18} />
            </div>
            <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">Call</p>
            <h3 className="font-extrabold text-base text-[#0f2c59] mb-4">+91 98765 43210</h3>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:text-amber-500 transition-colors">
              Get in touch <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:support@bookacabnow.com"
            data-aos="fade-up"
            data-aos-delay="200"
            className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-full bg-amber-50 group-hover:bg-amber-400 flex items-center justify-center text-amber-600 group-hover:text-slate-900 mb-5 transition-colors">
              <Mail size={18} />
            </div>
            <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">Email</p>
            <h3 className="font-extrabold text-base text-[#0f2c59] mb-4 break-all">support@bookacabnow.com</h3>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:text-amber-500 transition-colors">
              Get in touch <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          {/* Address */}
          <Link
            to="/contact"
            data-aos="fade-up"
            data-aos-delay="300"
            className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-full bg-amber-50 group-hover:bg-amber-400 flex items-center justify-center text-amber-600 group-hover:text-slate-900 mb-5 transition-colors">
              <MapPin size={18} />
            </div>
            <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">Address</p>
            <h3 className="font-extrabold text-base text-[#0f2c59] mb-4">Jaipur, Rajasthan</h3>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:text-amber-500 transition-colors">
              Get in touch <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* Support Desk (dark card) */}
          <Link
            to="/contact"
            data-aos="fade-up"
            data-aos-delay="400"
            className="group bg-[#0b2853] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-full bg-amber-400 group-hover:bg-amber-300 flex items-center justify-center text-slate-900 mb-5 transition-colors">
              <MessageCircle size={18} />
            </div>
            <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">Support Desk</p>
            <h3 className="font-extrabold text-base text-white mb-4">Send a detailed enquiry</h3>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
              Contact page <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ======================================================================
   SECTION 4 — BLOG (auto-sliding + arrows)
   ====================================================================== */
const blogPosts = [
  {
    id: 1,
    slug: "how-to-choose-outstation-cab",
    date: "Jan 10, 2026",
    title: "How to choose the right cab for an outstation ride",
    excerpt: "A practical checklist for seating, luggage, route timing and driver-included service.",
    image: car1,
  },
  {
    id: 2,
    slug: "airport-transfers-without-stress",
    date: "Jan 12, 2026",
    title: "Airport transfers without last-minute stress",
    excerpt: "Plan pickup buffers, luggage space and support details before your flight day.",
    image: carpic,
  },
  {
    id: 3,
    slug: "sedan-suv-or-muv",
    date: "Jan 15, 2026",
    title: "Sedan, SUV or MUV: what fits your route?",
    excerpt: "Compare comfort, pricing and seating choices for family and business travel.",
    image: taxiCard,
  },
  {
    id: 4,
    slug: "wedding-car-booking-checklist",
    date: "Jan 18, 2026",
    title: "Wedding car booking: what to check before you confirm",
    excerpt: "Decor, timing buffers, and backup options for the big day.",
    image: travelBg,
  },
  {
    id: 5,
    slug: "corporate-travel-multi-city",
    date: "Jan 20, 2026",
    title: "Corporate travel: managing multi-city cab requests",
    excerpt: "A simple approach for teams booking cabs across several cities at once.",
    image: car2,
  },
  {
    id: 6,
    slug: "local-rental-vs-outstation",
    date: "Jan 22, 2026",
    title: "Local rental vs outstation: choosing the right plan",
    excerpt: "How to decide between an hourly rental and a full outstation package.",
    image: pic3,
  },
];

const BLOGS_PER_SLIDE = 3;

export const BlogSection: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = Math.ceil(blogPosts.length / BLOGS_PER_SLIDE);
  const slides = Array.from({ length: totalSlides }, (_, i) =>
    blogPosts.slice(i * BLOGS_PER_SLIDE, i * BLOGS_PER_SLIDE + BLOGS_PER_SLIDE)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 5500);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const goPrev = () => setSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const goNext = () => setSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4" data-aos="fade-up">
          <div>
            <div className="inline-block bg-amber-100/60 border border-amber-200 text-amber-800 px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase mb-3">
              Blog
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f2c59] tracking-tight">
              Latest guides for smarter cab booking
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3 font-medium">
              Useful travel notes for routes, airport transfers, car choices, and trip planning.
            </p>
          </div>

          <Link
            to="/blog"
            className="self-start md:self-auto px-6 py-3 bg-white border border-gray-200 hover:border-amber-400 hover:bg-amber-50 text-[#0f2c59] rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all duration-300"
          >
            View all blogs
          </Link>
        </div>

        <div className="relative">
          {totalSlides > 1 && (
            <>
              <button
                onClick={goPrev}
                aria-label="Previous blog posts"
                className="hidden md:flex absolute -left-5 top-1/3 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-[#0f2c59] hover:bg-amber-400 hover:text-slate-900 hover:border-amber-400 hover:scale-110 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goNext}
                aria-label="Next blog posts"
                className="hidden md:flex absolute -right-5 top-1/3 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-[#0f2c59] hover:bg-amber-400 hover:text-slate-900 hover:border-amber-400 hover:scale-110 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              {slides.map((group, si) => (
                <div key={si} className="w-full shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6 px-1">
                  {group.map((post, i) => (
                    <Link
                      to={`/blog/${post.slug}`}
                      key={post.id}
                      data-aos="fade-up"
                      data-aos-delay={100 + i * 100}
                      className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[11px] font-bold text-[#0f2c59] shadow-sm">
                          Travel guide
                        </span>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-4 text-[11px] text-gray-500 font-semibold mb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} className="text-amber-500" /> {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <User size={12} className="text-amber-500" /> BookACabNow
                          </span>
                        </div>

                        <h3 className="font-extrabold text-base text-[#0f2c59] mb-2 group-hover:text-amber-600 transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{post.excerpt}</p>

                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f2c59] group-hover:text-amber-600 transition-colors">
                          Read More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-2.5 mt-9">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                aria-label={`Go to blog slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === slideIndex ? "w-8 bg-[#0f2c59]" : "w-2.5 bg-gray-300 hover:bg-amber-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

/* ======================================================================
   DEFAULT EXPORT — all four sections combined, in order
   ====================================================================== */
const Card1: React.FC = () => {
  return (
    <div>
      <GrowBookingCTA />
      <TestimonialsSection />
      <ContactSection />
      <BlogSection />
    </div>
  );
};

export default Card1;