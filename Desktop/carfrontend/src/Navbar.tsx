import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Search,
  ChevronDown,
  Menu,
  X,
  User,
  LogOut,
  UserPlus,
  LogIn,
  LayoutGrid,
  UserCircle,
  CalendarDays,
} from "lucide-react";
import { useAuth } from "./AuthContext";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsUserDropdownOpen(false);
    navigate("/");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    
<header className="w-full font-sans sticky top-0 z-50">
      {/* 1. TOP BAR */}
      <div className="bg-[#0b2853] text-white text-[12px] py-2 px-4 md:px-12">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          {/* Left Info Links */}
          <div className="hidden lg:flex items-center gap-6 font-medium tracking-wide">
            <span className="flex items-center gap-2">
              <Phone size={13} className="stroke-[2.5]" />
              <span className="font-bold">+91 98765 43210</span>
            </span>

            <span className="flex items-center gap-2">
              <Mail size={13} className="stroke-[2.5]" />
              <span>support@bookacabnow.com</span>
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={13} className="stroke-[2.5]" />
              <span>Jaipur, Rajasthan</span>
            </span>

            <span className="flex items-center gap-2">
              <Clock size={13} className="stroke-[2.5]" />
              <span>24/7 taxi booking support</span>
            </span>
          </div>

          {/* Right Social Badges */}
          <div className="flex items-center gap-2 ml-auto lg:ml-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/20 hover:bg-amber-400 hover:text-slate-900 flex items-center justify-center transition-all text-[11px] font-extrabold"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/20 hover:bg-amber-400 hover:text-slate-900 flex items-center justify-center transition-all text-[10px] font-extrabold"
            >
              ig
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/20 hover:bg-amber-400 hover:text-slate-900 flex items-center justify-center transition-all text-[10px] font-extrabold"
            >
              in
            </a>
          </div>
        </div>
      </div>
{/* ================= Mini Premium Announcement Bar (Auto-scrolling Ticker) ================= */}

<section className="bg-white border-b border-slate-200 overflow-hidden py-1.5">
  <style>{`
    @keyframes marquee-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-track {
      animation: marquee-scroll 18s linear infinite;
    }
  `}</style>

  <div className="flex whitespace-nowrap marquee-track">
    {/* Content repeated twice back-to-back for seamless infinite loop */}
    {[0, 1].map((i) => (
      <div key={i} className="flex items-center shrink-0">
        {Array.from({ length: 6 }).map((_, idx) => (
          <span
            key={idx}
            className="text-xs sm:text-sm md:text-base font-bold leading-none mx-6"
          >
            ⭐ Premium{" "}
            <span className="text-blue-700">Proven Track Record</span>
            <span className="text-slate-700"> • Trusted Brand By </span>
            <span className="text-amber-500">500+</span>
            <span className="text-slate-700"> Happy Clients</span>
          </span>
        ))}
      </div>
    ))}
  </div>
</section>
      {/* 2. MAIN NAVBAR */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 md:px-12 shadow-md transition-all duration-300">
  <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3.5 cursor-pointer">
            <div className="w-12 h-12 bg-[#1b437e] text-white font-black rounded-full flex items-center justify-center text-sm tracking-wider shadow-sm">
              BCN
            </div>
            <div>
              <h1 className="text-2xl font-black text-[#1b437e] leading-none tracking-tight">
                BookACabNow
              </h1>
              <p className="text-[12px] text-gray-500 font-medium tracking-wide mt-1">
                Premium taxi marketplace
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-bold text-[15px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#1b437e] relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-amber-400 after:rounded-full"
                  : "text-slate-700 hover:text-[#1b437e] transition-colors"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#1b437e] relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-amber-400 after:rounded-full"
                  : "text-slate-700 hover:text-[#1b437e] transition-colors"
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-[#1b437e] relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-amber-400 after:rounded-full"
                  : "text-slate-700 hover:text-[#1b437e] transition-colors"
              }
            >
              Services
            </NavLink>

            {/* Pages Dropdown */}
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsPagesDropdownOpen(true)}
              onMouseLeave={() => setIsPagesDropdownOpen(false)}
            >
              <div className="flex items-center gap-1 text-slate-700 hover:text-[#1b437e] transition-colors py-2">
                <span>Pages</span>
                <ChevronDown size={15} className={`transition-transform duration-200 ${isPagesDropdownOpen ? 'rotate-180' : ''}`} />
              </div>

              {isPagesDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-xl border border-slate-100 py-2 flex flex-col z-50">
                  <Link
                    to="/Pages/Cabs"
                    className="px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-[#1b437e] font-medium transition-colors"
                  >
                  Cabs
                  </Link>
                  <Link
                    to="/Pages/Companies"
                    className="px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-[#1b437e] font-medium transition-colors"
                  >
Companies
                  </Link>
                  <Link
                    to="/Pages/Blogs"
                    className="px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-[#1b437e] font-medium transition-colors"
                  >
           Blogs
                  </Link>
                  <Link
                    to="/Pages/Faq"
                    className="px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-[#1b437e] font-medium transition-colors"
                  >
                    FAQ
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#1b437e] relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-amber-400 after:rounded-full"
                  : "text-slate-700 hover:text-[#1b437e] transition-colors"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-700 hover:text-[#1b437e] transition-colors">
              <Search size={20} className="stroke-[2.2]" />
            </button>

            <Link
              to="/list-car"
              className="hidden sm:block px-6 py-2.5 bg-[#1b437e] hover:bg-[#123260] text-white font-bold text-sm rounded-xl shadow-sm transition-all active:scale-95"
            >
              List Your Car
            </Link>

            <Link
              to="/list-company"
              className="hidden xl:block px-6 py-2.5 border border-slate-300 text-[#1b437e] hover:bg-slate-50 font-bold text-sm rounded-xl transition-all"
            >
              List Your Company
            </Link>

            {/* Profile Pill Badge -> now functional */}
            <div
              className="relative"
              onMouseEnter={() => setIsUserDropdownOpen(true)}
              onMouseLeave={() => setIsUserDropdownOpen(false)}
            >
              {currentUser ? (
                <div className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-3 py-1.5 rounded-full shadow-sm cursor-pointer transition-all">
                  <span className="text-xs">{getInitials(currentUser.name)}</span>
                  <ChevronDown size={14} className="stroke-[3]" />
                </div>
              ) : (
                <div className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-[#1b437e] font-bold px-3 py-1.5 rounded-full shadow-sm cursor-pointer transition-all">
                  <User size={18} className="stroke-[2.2]" />
                  <ChevronDown size={14} className="stroke-[3]" />
                </div>
              )}

              {isUserDropdownOpen && (
                <div className="absolute top-full right-0 w-56 bg-white shadow-xl rounded-xl border border-slate-100 py-2 flex flex-col z-50">
                  {currentUser ? (
                    <>
                      <div className="px-4 py-2 border-b border-slate-100">
                        <p className="text-sm font-bold text-slate-800 truncate">{currentUser.name}</p>
                        <p className="text-xs text-slate-500 truncate">{currentUser.email}</p>
                      </div>
                      <Link
                        to="/dashboard"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-[#1b437e] font-medium transition-colors"
                      >
                        <LayoutGrid size={15} />
                        User Dashboard
                      </Link>
                      <Link
                        to="/dashboard/profile"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-[#1b437e] font-medium transition-colors"
                      >
                        <UserCircle size={15} />
                        My Profile
                      </Link>
                      <Link
                        to="/dashboard/bookings"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-[#1b437e] font-medium transition-colors"
                      >
                        <CalendarDays size={15} />
                        My Bookings
                      </Link>
                      <div className="border-t border-slate-100 my-1" />
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium transition-colors text-left"
                      >
                        <LogOut size={15} />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-[#1b437e] font-medium transition-colors"
                      >
                        <LogIn size={15} />
                        Login
                      </Link>
                      <Link
                        to="/register"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-[#1b437e] font-medium transition-colors"
                      >
                        <UserPlus size={15} />
                        Register
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Icon */}
            <button 
              className="lg:hidden p-2 text-slate-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-xl">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block font-bold text-slate-800 hover:text-[#1b437e] py-1.5"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block font-bold text-slate-800 hover:text-[#1b437e] py-1.5"
          >
            About Us
          </Link>
          <Link
            to="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block font-bold text-slate-800 hover:text-[#1b437e] py-1.5"
          >
            Services
          </Link>
          <div className="py-1.5 space-y-2 border-y border-slate-100 my-2">
            <span className="block font-extrabold text-xs text-gray-400 uppercase tracking-wider">Pages</span>
            <Link to="/Cabs" onClick={() => setIsMobileMenuOpen(false)} className="block font-medium text-slate-700 hover:text-[#1b437e] pl-3 py-1">Cabs</Link>
            <Link to="/Companies" onClick={() => setIsMobileMenuOpen(false)} className="block font-medium text-slate-700 hover:text-[#1b437e] pl-3 py-1">Companies</Link>
            <Link to="/Blogs" onClick={() => setIsMobileMenuOpen(false)} className="block font-medium text-slate-700 hover:text-[#1b437e] pl-3 py-1">Blogs</Link>
            <Link to="/Faq" onClick={() => setIsMobileMenuOpen(false)} className="block font-medium text-slate-700 hover:text-[#1b437e] pl-3 py-1">FAQ</Link>
          </div>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block font-bold text-slate-800 hover:text-[#1b437e] py-1.5"
          >
            Contact
          </Link>

          {/* Mobile Auth Links */}
          <div className="pt-2 border-t border-slate-100 space-y-2">
            {currentUser ? (
              <>
                <p className="text-sm font-bold text-slate-800">{currentUser.name}</p>
                <Link
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-[#1b437e] py-1"
                >
                  <LayoutGrid size={15} /> User Dashboard
                </Link>
                <Link
                  to="/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-[#1b437e] py-1"
                >
                  <UserCircle size={15} /> My Profile
                </Link>
                <Link
                  to="/dashboard/bookings"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-[#1b437e] py-1"
                >
                  <CalendarDays size={15} /> My Bookings
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-center py-2.5 bg-red-50 text-red-600 font-bold text-sm rounded-xl"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-2.5 border border-slate-300 text-[#1b437e] font-bold text-sm rounded-xl"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-2.5 bg-[#1b437e] text-white font-bold text-sm rounded-xl"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <Link
              to="/list-car"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 bg-[#1b437e] text-white font-bold text-sm rounded-xl shadow-sm"
            >
              List Your Car
            </Link>
            <Link
              to="/list-company"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 border border-slate-300 text-[#1b437e] font-bold text-sm rounded-xl"
            >
              List Your Company
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;