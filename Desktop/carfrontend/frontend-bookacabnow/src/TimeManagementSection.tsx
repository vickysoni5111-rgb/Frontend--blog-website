import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Car, MapPin, Calendar, Clock, Search, ChevronDown } from "lucide-react";

const TimeManagementSection: React.FC = () => {
  const navigate = useNavigate();

  // Form state management
  const [tripType, setTripType] = useState("One Way");
  const [isTripDropdownOpen, setIsTripDropdownOpen] = useState(false);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const tripOptions = ["One Way", "Round Trip", "Airport Transfer", "Local Rental"];

  // Handle Find Taxi Click -> Navigate to Fleet/Search page
  const handleFindTaxi = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/fleet", { 
      state: { tripType, pickupLocation, dropLocation, pickupDate, pickupTime } 
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white px-4 md:px-12 relative overflow-hidden">
      
      {/* Left Side Subtle Blue Curved Glow / Design Element */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Container with Single AOS Animation for Whole Section */}
      <div 
        className="max-w-[1400px] mx-auto relative z-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center shadow-md text-slate-950">
              <Clock size={24} className="stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-amber-600 tracking-wider uppercase bg-amber-100 px-3 py-1 rounded-full">
                PLAN YOUR RIDE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0b2853] mt-1 tracking-tight">
                Search cabs by route, date, and trip type
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Flexible scheduling available
          </div>
        </div>

        {/* Main Booking Form Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-6 sm:p-10 relative overflow-hidden">
          
          {/* Subtle blue accent line on the left border of the card */}
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent"></div>

          <form onSubmit={handleFindTaxi} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* 1. Trip Type Dropdown */}
              <div className="relative">
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Car size={15} className="text-amber-500" /> Trip Type
                </label>
                
                <div 
                  onClick={() => setIsTripDropdownOpen(!isTripDropdownOpen)}
                  className="w-full bg-slate-50 border border-slate-200 hover:border-amber-400 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-800 flex justify-between items-center cursor-pointer transition-all shadow-sm"
                >
                  <span>{tripType}</span>
                  <ChevronDown size={18} className={`text-slate-500 transition-transform ${isTripDropdownOpen ? 'rotate-180' : ''}`} />
                </div>

                {/* Dropdown Menu */}
                {isTripDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-30">
                    {tripOptions.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setTripType(option);
                          setIsTripDropdownOpen(false);
                        }}
                        className={`px-4 py-2.5 text-sm font-bold cursor-pointer transition-colors ${
                          tripType === option 
                            ? "bg-[#0b2853] text-white" 
                            : "text-slate-700 hover:bg-amber-50 hover:text-[#0b2853]"
                        }`}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 2. Pickup Location */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin size={15} className="text-amber-500" /> Pickup Location
                </label>
                <input
                  type="text"
                  required
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="Pickup city, station, or airport"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-amber-400 focus:bg-white rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-800 outline-none transition-all shadow-sm"
                />
              </div>

              {/* 3. Drop Location */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin size={15} className="text-amber-500" /> Drop Location
                </label>
                <input
                  type="text"
                  required
                  value={dropLocation}
                  onChange={(e) => setDropLocation(e.target.value)}
                  placeholder="Drop city or destination"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-amber-400 focus:bg-white rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-800 outline-none transition-all shadow-sm"
                />
              </div>

            </div>

            {/* Second Row: Date, Time & Submit Button */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end pt-2">
              
              {/* Pickup Date */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar size={15} className="text-amber-500" /> Pickup Date
                </label>
                <input
                  type="date"
                  required
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-amber-400 focus:bg-white rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-800 outline-none transition-all shadow-sm"
                />
              </div>

              {/* Pickup Time */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock size={15} className="text-amber-500" /> Pickup Time
                </label>
                <input
                  type="time"
                  required
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-amber-400 focus:bg-white rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-800 outline-none transition-all shadow-sm"
                />
              </div>

              {/* Find Taxi Button (Navigates to page) */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-[#0b2853] hover:bg-[#153e7d] text-white font-black text-sm rounded-2xl shadow-xl flex items-center justify-center gap-2.5 transition-all active:scale-95 cursor-pointer"
                >
                  <Search size={18} className="stroke-[2.5]" />
                  <span>Find Taxi</span>
                </button>
              </div>

            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default TimeManagementSection;