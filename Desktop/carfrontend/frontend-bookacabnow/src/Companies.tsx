import React, { useState } from 'react';
import { 
  Car, 
  MapPin, 
  Calendar, 
  Filter, 
  ChevronDown, 
  XCircle, 
  Settings2,
  CheckCircle2,
  Users,
  ShieldCheck,
  Clock,
  ArrowRight
} from 'lucide-react';

function Cabs() {
  const [activeTab, setActiveTab] = useState('one-way');

  const tripTypes = [
    { id: 'one-way', label: 'One Way' },
    { id: 'round-trip', label: 'Round Trip' },
    { id: 'airport-transfer', label: 'Airport Transfer' },
    { id: 'local-rental', label: 'Local Rental' }
  ];

  // Fleet Cards Data using provided assets
  const cars = [
    {
      id: 1,
      name: 'Sedan Comfort',
      model: 'Dzire / Etios or similar',
      image: '/src/assets/car2.png',
      seats: 4,
      type: 'AC Sedan',
      price: '₹14 / km',
      tag: 'Most Popular'
    },
    {
      id: 2,
      name: 'SUV Premium',
      model: 'Ertiga / Carens or similar',
      image: '/src/assets/carpic.png',
      seats: 6,
      type: 'AC SUV',
      price: '₹18 / km',
      tag: 'Best Value'
    },
    {
      id: 3,
      name: 'Luxury Cruiser',
      model: 'Innova Crysta',
      image: '/src/assets/car.png',
      seats: 7,
      type: 'Premium SUV',
      price: '₹24 / km',
      tag: 'Top Rated'
    },
    {
      id: 4,
      name: 'Compact Hatchback',
      model: 'Wagon R / Swift or similar',
      image: '/src/assets/background1.png',
      seats: 4,
      type: 'Economy AC',
      price: '₹11 / km',
      tag: 'Budget Friendly'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
      
      {/* ---------------- 1. HERO SECTION (Mumbai Image) ---------------- */}
      <section className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="delhi.png" 
            alt="Mumbai Cityscape" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-[-50px]">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
            BookACabNow Premium
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
            Explore the city in <span className="text-amber-400">comfort.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 font-medium max-w-2xl mx-auto drop-shadow-md">
            Verified drivers, transparent pricing, and premium fleet options for your safe and seamless journey.
          </p>
        </div>
      </section>

      {/* ---------------- 2. PREMIUM FLEET & FILTERS SECTION ---------------- */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 pb-16">
        
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-slate-100 bg-gradient-to-r from-white to-slate-50">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Premium fleet
            </h2>
            <p className="text-slate-500 mt-1.5 text-sm sm:text-base">
              Find the right car for your journey. Compare verified cab options, driver-included fares and flexible taxi services.
            </p>
          </div>

          {/* Booking Types (Tabs) */}
          <div className="px-6 sm:px-8 pt-6 pb-2">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              {tripTypes.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Filters Bar */}
          <div className="px-6 sm:px-8 py-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
                {[
                  { label: "Service Type", default: "All service types" },
                  { label: "Brand", default: "All brands" },
                  { label: "Fuel", default: "All fuels" },
                  { label: "Transmission", default: "All transmissions" }
                ].map((filter, idx) => (
                  <div key={idx} className="relative group">
                    <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer transition-all hover:bg-slate-100">
                      <option>{filter.default}</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-hover:text-slate-600 transition-colors" />
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all">
                  <Settings2 className="w-4 h-4" />
                  Filters
                </button>
                <button className="flex items-center justify-center gap-2 bg-slate-100 text-slate-500 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-red-50 hover:text-red-600 transition-all">
                  <XCircle className="w-4 h-4" />
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="px-6 sm:px-8 py-3 bg-slate-50 border-t border-b border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><Car className="w-4 h-4 text-slate-400"/> {cars.length} Available cabs</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>All Vehicle brands</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Filter className="w-4 h-4 text-slate-400" />
              0 Active filters
            </div>
          </div>

          {/* ---------------- CAR CARDS GRID ---------------- */}
          <div className="p-6 sm:p-8 bg-slate-50/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cars.map((car) => (
                <div 
                  key={car.id} 
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Image Container with full-bleed display */}
                  <div className="relative w-full h-48 bg-slate-100 overflow-hidden flex items-center justify-center p-3">
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-amber-400 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-amber-400/20">
                      {car.tag}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                          {car.name}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 mb-4">{car.model}</p>

                      <div className="flex items-center gap-3 text-xs text-slate-600 mb-4">
                        <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md font-medium">
                          <Users className="w-3.5 h-3.5 text-slate-500" /> {car.seats} Seats
                        </span>
                        <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md font-medium">
                          <Car className="w-3.5 h-3.5 text-slate-500" /> {car.type}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-2">
                      <div>
                        <span className="text-xs text-slate-400 block">Starting from</span>
                        <span className="text-lg font-extrabold text-slate-900">{car.price}</span>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-blue-600/20">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- 3. HIGHWAY FULL BACKGROUND SECTION ---------------- */}
      <section className="relative w-full py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900">
        {/* Full Background Highway Image */}
        <div className="absolute inset-0">
          <img 
            src="/src/assets/backgroundpic.png" 
            alt="Highway Journey" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80";
            }}
          />
          {/* Overlay gradient for contrast */}
          <div className="absolute inset-0 bg-slate-950/75 via-slate-900/80 to-slate-950/90 backdrop-blur-[2px]"></div>
        </div>

        {/* Content over Highway background */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-blue-400" /> Outstation & Intercity Rides
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                Smooth highway rides for long journeys.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Whether it's a weekend getaway or an urgent business trip across cities, experience top-tier comfort with our clean fleet and professional highway drivers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <Clock className="w-6 h-6 text-amber-400 mb-2" />
                  <h4 className="text-white font-semibold text-sm">24/7 Service</h4>
                  <p className="text-xs text-slate-400 mt-1">Available day & night</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 mb-2" />
                  <h4 className="text-white font-semibold text-sm">Verified Drivers</h4>
                  <p className="text-xs text-slate-400 mt-1">Background checked</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <Car className="w-6 h-6 text-blue-400 mb-2" />
                  <h4 className="text-white font-semibold text-sm">Flat Rates</h4>
                  <p className="text-xs text-slate-400 mt-1">No hidden charges</p>
                </div>
              </div>
            </div>

            {/* Right Call-To-Action Box */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 sm:p-10 rounded-3xl shadow-2xl text-white">
              <h3 className="text-2xl font-bold mb-3">Plan your route now</h3>
              <p className="text-sm text-slate-300 mb-6">
                Get instant fare quotes for outstation highway trips with zero cancellation penalties.
              </p>

              <div className="space-y-4">
                <div className="bg-white/10 border border-white/15 rounded-xl p-3 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Pickup location" 
                    className="bg-transparent border-none text-white placeholder-slate-400 text-sm focus:outline-none w-full"
                  />
                </div>
                <div className="bg-white/10 border border-white/15 rounded-xl p-3 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Drop destination" 
                    className="bg-transparent border-none text-white placeholder-slate-400 text-sm focus:outline-none w-full"
                  />
                </div>
                <button className="w-full mt-2 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-extrabold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm tracking-wide">
                  Check Outstation Fares <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Cabs;