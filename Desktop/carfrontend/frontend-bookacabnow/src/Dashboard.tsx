import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Navigation,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Car,
  CheckCircle2,
  Wallet,
  BellRing,
  MapPin,
  TrendingUp,
  Compass,
  Home,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  RadialBarChart,
  RadialBar,
} from "recharts";
import { useAuth } from "./AuthContext";
import DashboardSidebar, { DashboardBreadcrumb } from "./DashboardSidebar";
import RouteAvailabilityCard from "./RouteAvailabilityCard";

export const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate(); // Hook for direct home navigation
  const firstName = currentUser?.name?.split(" ")[0] || "there";

  const stats = [
    { label: "Upcoming trips", value: "03", icon: <Car size={20} />, accent: "bg-blue-50 text-[#1b437e]" },
    { label: "Completed rides", value: "142", icon: <CheckCircle2 size={20} />, accent: "bg-emerald-50 text-emerald-600" },
    { label: "Total spent", value: "₹68,450", icon: <Wallet size={20} />, accent: "bg-amber-50 text-amber-600" },
    { label: "Unread alerts", value: "02", icon: <BellRing size={20} />, accent: "bg-rose-50 text-rose-600" },
  ];

  // Pie Chart Data — Service Breakdown
  const serviceBreakdown = [
    { name: "City Cab Pickup", value: 34200, color: "#1b437e" },
    { name: "Airport Shuttle", value: 18500, color: "#f59e0b" },
    { name: "Outstation Trips", value: 15750, color: "#10b981" },
  ];

  // Line Graph Data — 6-Month Travel Volume Trend
  const travelTrend = [
    { month: "Feb", volume: 18000 },
    { month: "Mar", volume: 24000 },
    { month: "Apr", volume: 29000 },
    { month: "May", volume: 34000 },
    { month: "Jun", volume: 45000 },
    { month: "Jul", volume: 68450 },
  ];

  // Gauge Chart Data — Satisfaction Rate
  const satisfactionRate = 96;
  const gaugeData = [{ name: "Satisfaction", value: satisfactionRate, fill: "#1b437e" }];

  // City-wise Dynamic Pricing Routes
  const cityRoutes = [
    { route: "Jaipur Central → Delhi Airport", distance: "280 km", category: "Sedan (Dzire)", price: "₹3,500" },
    { route: "Jaipur Station → Agra Fort", distance: "240 km", category: "SUV (Innova)", price: "₹4,800" },
    { route: "Udaipur Lake → Mount Abu", distance: "165 km", category: "Hatchback (Swift)", price: "₹2,600" },
    { route: "Jaipur Airport → City Center Hotel", distance: "14 km", category: "Luxury Sedan", price: "₹650" },
  ];

  return (
    <div className="bg-[#F7F5F1] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        
        {/* Bada aur Prominent Back / Home Button Header Section */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#1b437e] hover:bg-[#123260] text-white font-black text-sm rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-95 group"
          >
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:-translate-x-0.5 transition-transform">
              <ArrowLeft size={16} className="text-amber-300" />
            </div>
            <span>Back to Home Page</span>
          </button>
          
          <DashboardBreadcrumb page="Overview" />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <DashboardSidebar active="overview" unreadNotifications={2} />

          <main className="flex-1 space-y-6">
            
            {/* Welcome Hero Banner */}
            <div className="relative overflow-hidden rounded-3xl shadow-lg p-8 md:p-10 bg-gradient-to-br from-[#1b437e] via-[#204d8f] to-[#123260]">
              <div className="absolute -top-10 -right-10 w-52 h-52 bg-white/5 rounded-full" />
              <div className="absolute -bottom-16 -right-24 w-72 h-72 bg-amber-400/10 rounded-full" />

              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-black text-amber-300 bg-white/10 px-3 py-1.5 rounded-full uppercase tracking-wide backdrop-blur-sm">
                    <Sparkles size={12} /> Live Location Pickup Hub
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-white mt-4 leading-tight">
                    Welcome back, {currentUser?.name || firstName}! 🚖
                  </h2>
                  <p className="text-blue-100/80 text-sm mt-2 max-w-md">
                    Track your scheduled door-to-door pickups, live city cab pricing, earnings, and customer safety metrics seamlessly.
                  </p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <Link
                    to="/"
                    className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-sm rounded-xl shadow-md transition-all active:scale-95"
                  >
                    Book Cab Now →
                  </Link>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md p-6 transition-shadow"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${stat.accent}`}>
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Analytics Grid: Pie Chart, Line Graph, Gauge Chart Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* 1. Pie Chart Card */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-wide">Ride Distribution</p>
                    <span className="text-[10px] font-bold bg-blue-50 text-[#1b437e] px-2 py-0.5 rounded-md">Pie Chart</span>
                  </div>
                  <p className="text-sm font-bold text-slate-800">Bookings by Service Type</p>
                </div>
                <div className="h-48 w-full my-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={serviceBreakdown}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={75}
                        paddingAngle={5}
                      >
                        {serviceBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs font-bold text-slate-600">
                  {serviceBreakdown.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                        {item.name}
                      </span>
                      <span className="text-slate-900">₹{item.value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Line Graph Card */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-wide">Growth Trend</p>
                    <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <TrendingUp size={10} /> +18.4%
                    </span>
                  </div>
                  <p className="text-sm font-bold text-slate-800">6-Month Travel Volume</p>
                </div>
                <div className="h-48 w-full my-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={travelTrend} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                      <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
                      <Line type="monotone" dataKey="volume" stroke="#1b437e" strokeWidth={3} dot={{ fill: "#f59e0b", r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span>Peak Month: <strong className="text-slate-800">July (₹68.4k)</strong></span>
                  <span className="text-emerald-600 font-bold">Consistent Growth</span>
                </div>
              </div>

              {/* 3. Gauge Chart Card */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-wide">Quality Assurance</p>
                    <span className="text-[10px] font-bold bg-amber-50 text-amber-600 px-2 py-0.5 rounded-md">Gauge Chart</span>
                  </div>
                  <p className="text-sm font-bold text-slate-800">Passenger Satisfaction Rate</p>
                </div>
                <div className="h-48 w-full relative my-3 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart innerRadius="70%" outerRadius="100%" data={gaugeData} startAngle={90} endAngle={-270}>
                      <RadialBar background dataKey="value" cornerRadius={10} fill="#1b437e" />
                    </RadialBarChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-[#1b437e]">{satisfactionRate}%</span>
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded mt-0.5">⭐ EXCEPTIONAL</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 text-center text-xs text-slate-400 font-medium">
                  Calculated from your last 125 pickup trips
                </div>
              </div>

            </div>

            <RouteAvailabilityCard />

            {/* City-wise Dynamic Pricing & Routes Table Card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
              <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
                    <Compass size={15} className="text-[#1b437e]" /> Popular City Routes & Dynamic Pricing
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Live fare charts for direct door-to-door customer pickups across destinations.</p>
                </div>
                <span className="text-[11px] font-bold bg-amber-100 text-amber-800 px-3 py-1 rounded-full shadow-sm">
                  Updated Live (INR)
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 text-[11px] uppercase tracking-wider">
                      <th className="pb-3 font-black">Pickup / Route</th>
                      <th className="pb-3 font-black">Destination</th>
                      <th className="pb-3 font-black">Distance</th>
                      <th className="pb-3 font-black">Vehicle Category</th>
                      <th className="pb-3 font-black text-right">Fixed Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                    {cityRoutes.map((item, index) => {
                      const [pickup, dest] = item.route.split(" → ");
                      return (
                        <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3.5 font-bold text-slate-900 flex items-center gap-2">
                            <MapPin size={15} className="text-amber-500 shrink-0" />
                            {pickup}
                          </td>
                          <td className="py-3.5 text-slate-600">{dest}</td>
                          <td className="py-3.5 text-slate-500 text-xs font-semibold">{item.distance}</td>
                          <td className="py-3.5">
                            <span className="bg-blue-50 text-[#1b437e] text-xs font-bold px-2.5 py-1 rounded-md">
                              {item.category}
                            </span>
                          </td>
                          <td className="py-3.5 text-right font-black text-emerald-600 text-base">{item.price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Upcoming Trip & Action Bar */}
            <div className="bg-amber-400 rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-black shrink-0">
                  <Navigation size={22} />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 uppercase tracking-wide">Next Door-to-Door Pickup Scheduled</p>
                  <p className="text-slate-800 text-sm font-bold mt-0.5">Malviya Nagar, Jaipur → Jaipur International Airport (Cab arrives in 12 mins)</p>
                </div>
              </div>
              <Link
                to="/"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-black text-xs rounded-xl shadow transition-all active:scale-95 shrink-0"
              >
                Track Live Ride
              </Link>
            </div>

          </main>
        </div> 
      </div>
    </div>
  );
};

export default Dashboard;