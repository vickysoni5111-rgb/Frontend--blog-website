import React, { useState } from 'react';
import { 
  Car, 
  MapPin, 
  Calendar, 
  Filter, 
  ChevronDown, 
  XCircle, 
  SearchX,
  Settings2,
  CheckCircle2
} from 'lucide-react';

function Cabs() {
  const [activeTab, setActiveTab] = useState('one-way');
  
  // Filter States
  const [serviceType, setServiceType] = useState('all');
  const [brand, setBrand] = useState('all');
  const [fuel, setFuel] = useState('all');
  const [transmission, setTransmission] = useState('all');

  const tripTypes = [
    { id: 'one-way', label: 'One Way' },
    { id: 'round-trip', label: 'Round Trip' },
    { id: 'airport-transfer', label: 'Airport Transfer' },
    { id: 'local-rental', label: 'Local Rental' }
  ];

  const handleClearFilters = () => {
    setServiceType('all');
    setBrand('all');
    setFuel('all');
    setTransmission('all');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
      
      {/* ---------------- 1. HERO SECTION (Mumbai Image Fully Visible) ---------------- */}
      <section className="relative w-full h-[65vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/mumbai.png" 
            alt="Mumbai Cityscape" 
            className="w-full h-full object-cover object-center brightness-90"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=80";
            }}
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-[#F8FAFC]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-12">
          <span className="inline-block py-1 px-3.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md shadow-sm">
            BookACabNow Premium
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
            Explore the city in <span className="text-amber-400">comfort.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-medium max-w-2xl mx-auto drop-shadow">
            Verified drivers, transparent pricing, and premium fleet options for your safe and seamless journey.
          </p>
        </div>
      </section>

      {/* ---------------- 2. PREMIUM FLEET & FILTERS SECTION ---------------- */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-20">
        
        {/* Main Search & Filter Card */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-300/60 border border-slate-100 overflow-hidden backdrop-blur-xl">
          
          {/* Top Header */}
          <div className="p-6 sm:p-8 border-b border-slate-100 bg-gradient-to-r from-white to-slate-50/50">
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
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Filters Bar with Options Added */}
          <div className="px-6 sm:px-8 py-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              {/* Dropdowns with Options */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
                
                {/* Service Type */}
                <div className="relative group">
                  <select 
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer transition-all hover:bg-slate-100"
                  >
                    <option value="all">All service types</option>
                    <option value="sedan">Sedan Comfort</option>
                    <option value="suv">SUV Luxury</option>
                    <option value="hatchback">Mini / Hatchback</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-hover:text-slate-600 transition-colors" />
                </div>

                {/* Brand */}
                <div className="relative group">
                  <select 
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer transition-all hover:bg-slate-100"
                  >
                    <option value="all">All brands</option>
                    <option value="toyota">Toyota</option>
                    <option value="honda">Honda</option>
                    <option value="hyundai">Hyundai</option>
                    <option value="mahindra">Mahindra</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-hover:text-slate-600 transition-colors" />
                </div>

                {/* Fuel */}
                <div className="relative group">
                  <select 
                    value={fuel}
                    onChange={(e) => setFuel(e.target.value)}
                    className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer transition-all hover:bg-slate-100"
                  >
                    <option value="all">All fuels</option>
                    <option value="cng">CNG</option>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric (EV)</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-hover:text-slate-600 transition-colors" />
                </div>

                {/* Transmission */}
                <div className="relative group">
                  <select 
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                    className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer transition-all hover:bg-slate-100"
                  >
                    <option value="all">All transmissions</option>
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-hover:text-slate-600 transition-colors" />
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all shadow-sm">
                  <Settings2 className="w-4 h-4" />
                  Filters
                </button>
                <button 
                  onClick={handleClearFilters}
                  className="flex items-center justify-center gap-2 bg-slate-100 text-slate-500 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-red-50 hover:text-red-600 transition-all"
                >
                  <XCircle className="w-4 h-4" />
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="px-6 sm:px-8 py-3 bg-slate-50/80 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><Car className="w-4 h-4 text-slate-400"/> 0 Available cabs</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>All Vehicle brands</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Filter className="w-4 h-4 text-slate-400" />
              0 Active filters
            </div>
          </div>

          {/* ---------------- 3. EMPTY STATE RESULTS ---------------- */}
          <div className="p-10 sm:p-16 text-center flex flex-col items-center justify-center bg-white min-h-[320px]">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-5 border border-slate-100 shadow-inner">
              <SearchX className="w-10 h-10 text-slate-300 animate-pulse" />
            </div>
            
            <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-[10px] font-extrabold tracking-widest uppercase mb-3">
              BCN Alert
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              No cars match your search
            </h3>
            
            <p className="text-slate-500 text-sm max-w-sm mb-6">
              Try clearing a filter or selecting a different service type to find available cabs in your area.
            </p>
            
            <button 
              onClick={handleClearFilters}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Clear all filters
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Cabs;