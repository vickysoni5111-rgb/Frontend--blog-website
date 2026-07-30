import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  Car,
  ShieldCheck,
  Headphones,
  Compass,
  ArrowRight,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#050b14] via-[#03070e] to-[#010307] text-gray-300 pt-20 pb-10 border-t border-amber-500/20 font-sans relative overflow-hidden">
      
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* TOP / MAIN FOOTER CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          
          {/* COLUMN 1: BRAND & NEWSLETTER (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group cursor-pointer w-fit">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-black text-[#050b14] text-lg shadow-lg shadow-amber-500/20 transform group-hover:scale-105 transition-transform duration-300">
                BCN
              </div>
              <span className="text-xl font-black text-white tracking-wide group-hover:text-amber-400 transition-colors">
                BookACabNow
              </span>
            </Link>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Reliable taxi booking for one way, round trip, airport transfer,
              local rental, and premium Rajasthan tour packages.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="bg-[#0b1322]/80 backdrop-blur-md p-4 rounded-2xl border border-gray-800/80 shadow-xl max-w-sm hover:border-amber-500/30 transition-colors">
              <label className="block text-xs font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                Stay updated with latest offers
              </label>
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#050b14] border border-gray-700/80 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 pr-12 transition-all duration-300"
                />
                <button
                  type="button"
                  className="absolute right-1.5 p-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:scale-95 text-[#050b14] font-bold rounded-lg transition-all duration-200 shadow-md shadow-amber-500/20 cursor-pointer"
                >
                  <Send size={14} className="text-[#050b14]" />
                </button>
              </div>
            </div>

            {/* Pill Badges with Icons */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0d1829] border border-gray-800 text-gray-300 hover:border-amber-400/50 transition-colors">
                <Car size={12} className="text-amber-400" /> Verified Cars
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0d1829] border border-gray-800 text-gray-300 hover:border-amber-400/50 transition-colors">
                <ShieldCheck size={12} className="text-emerald-400" /> Secure Booking
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0d1829] border border-gray-800 text-gray-300 hover:border-amber-400/50 transition-colors">
                <Headphones size={12} className="text-blue-400" /> 24/7 Support
              </span>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white border-b-2 border-amber-500 pb-2 inline-block">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              {[
                { name: 'Home', path: '/' },
                { name: 'Cars', path: '/pages/cabs' },
                { name: 'Services', path: '/services' },
                { name: 'About', path: '/about' },
                { name: 'Blog', path: '/pages/blogs' },
                { name: 'Companies', path: '/pages/companies' },
                { name: 'FAQ', path: '/pages/faq' },
                { name: 'Contact', path: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-1.5 hover:text-amber-400 active:text-orange-400 active:scale-[0.98] transition-all duration-150 py-0.5"
                  >
                    <ChevronRight size={12} className="text-amber-500/50 group-hover:translate-x-0.5 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: OUR SERVICES (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white border-b-2 border-amber-500 pb-2 inline-block">
              OUR SERVICES
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              {['Outstation Taxi', 'Airport Transfer', 'Local Rental', 'Tour Packages'].map((srv, idx) => (
                <li key={idx}>
                  <Link
                    to="/services"
                    className="flex items-center gap-1.5 hover:text-amber-400 active:text-orange-400 active:scale-[0.98] transition-all duration-150 py-0.5 group"
                  >
                    <Compass size={12} className="text-gray-600 group-hover:text-amber-400" />
                    {srv}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: POPULAR ROUTES (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white border-b-2 border-amber-500 pb-2 inline-block">
              POPULAR ROUTES
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              {[
                'Jaipur to Delhi Taxi',
                'Jaipur to Udaipur Taxi',
                'Jaipur to Jodhpur Taxi',
                'Jaipur Airport Taxi',
                'Jaipur Local Cab',
              ].map((route, idx) => (
                <li key={idx}>
                  <Link
                    to="/services"
                    className="flex items-center gap-1.5 hover:text-amber-400 active:text-orange-400 active:scale-[0.98] transition-all duration-150 py-0.5"
                  >
                    <ArrowRight size={10} className="text-amber-500/60" />
                    {route}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 5: CONTACT US (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white border-b-2 border-amber-500 pb-2 inline-block">
              CONTACT US
            </h4>
            <ul className="space-y-3 text-xs font-medium text-gray-400">
              <li className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-blue-900/40 border border-blue-800/60 flex items-center justify-center text-blue-400 shrink-0 shadow-inner">
                  <Phone size={13} />
                </div>
                <a
                  href="tel:+919876543210"
                  className="hover:text-amber-400 active:text-orange-400 active:scale-[0.98] transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-emerald-900/40 border border-emerald-800/60 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
                  <MessageCircle size={13} />
                </div>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 active:text-orange-400 active:scale-[0.98] transition-colors flex items-center gap-1"
                >
                  WhatsApp Chat <ExternalLink size={10} />
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-amber-900/40 border border-amber-800/60 flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
                  <Mail size={13} />
                </div>
                <a
                  href="mailto:support@bookacabnow.com"
                  className="hover:text-amber-400 active:text-orange-400 active:scale-[0.98] transition-colors truncate"
                >
                  support@bookacabnow.com
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-gray-800/80 border border-gray-700/60 flex items-center justify-center text-gray-400 shrink-0 shadow-inner">
                  <MapPin size={13} />
                </div>
                <span className="text-gray-300">Delhi NCR, India</span>
              </li>

              <li className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-purple-900/40 border border-purple-800/60 flex items-center justify-center text-purple-400 shrink-0 shadow-inner">
                  <Clock size={13} />
                </div>
                <span className="text-gray-300">Mon-Sun, 8 AM-10 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-medium">
          <p>© 2026 BookACabNow. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {['Terms of Use', 'Privacy Policy', 'Refund Policy', 'Cancellation Policy'].map((policy, idx) => {
              const slug = policy.toLowerCase().split(' ')[0];
              return (
                <Link
                  key={idx}
                  to={`/${slug}`}
                  className="hover:text-amber-400 active:text-orange-400 active:scale-95 transition-colors"
                >
                  {policy}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;