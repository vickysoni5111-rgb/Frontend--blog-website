import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Calendar, Clock, MapPin, CheckCircle2, XCircle, TrendingUp } from "lucide-react";

interface HistoricalRouteData {
  date: string;
  time: string;
  route: string;
  distanceKm: number;
  availableCount: number;
  notAvailableCount: number;
  status: "Available" | "Not Available";
}

export const RouteHistoryChart: React.FC = () => {
  // Historical data combining date, time, city routes, distance, and availability status
  const historyData: HistoricalRouteData[] = [
    { date: "10 Jul", time: "08:30 AM", route: "Jaipur → Delhi", distanceKm: 280, availableCount: 5, notAvailableCount: 1, status: "Available" },
    { date: "11 Jul", time: "02:00 PM", route: "Jaipur → Agra", distanceKm: 240, availableCount: 4, notAvailableCount: 2, status: "Available" },
    { date: "12 Jul", time: "06:15 AM", route: "Udaipur → Mt Abu", distanceKm: 165, availableCount: 1, notAvailableCount: 4, status: "Not Available" },
    { date: "13 Jul", time: "09:00 AM", route: "Jaipur → Jodhpur", distanceKm: 330, availableCount: 6, notAvailableCount: 1, status: "Available" },
    { date: "14 Jul", time: "11:00 AM", route: "Jaipur Airport → Hotel", distanceKm: 14, availableCount: 8, notAvailableCount: 0, status: "Available" },
    { date: "15 Jul", time: "04:45 PM", route: "Jodhpur → Jaisalmer", distanceKm: 290, availableCount: 2, notAvailableCount: 3, status: "Not Available" },
  ];

  const [selectedRoute, setSelectedRoute] = useState<HistoricalRouteData>(historyData[0]);

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6 md:p-8 w-full transition-all">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-black text-[#1b437e] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wide">
            <TrendingUp size={12} /> Historical Analytics
          </span>
          <h3 className="text-xl md:text-2xl font-black text-[#1b437e] mt-1.5">
            Route Availability & Travel Distance History
          </h3>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Historical breakdown of cab availability slots mapped against travel distances across dates.
          </p>
        </div>
        <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 flex items-center gap-2">
          <Calendar size={15} className="text-[#1b437e]" />
          <span>Active Period: July 2026</span>
        </div>
      </div>

      {/* Main Combined Bar & Line Chart Container */}
      <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 mb-6">
        <div className="flex items-center justify-between mb-3 px-2">
          <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
            Availability Slots (Bars) vs Distance in KM (Trend Line)
          </span>
          <div className="flex items-center gap-4 text-xs font-bold">
            <span className="flex items-center gap-1.5 text-[#1b437e]">
              <span className="w-3 h-3 rounded bg-[#1b437e]" /> Available Slots
            </span>
            <span className="flex items-center gap-1.5 text-rose-500">
              <span className="w-3 h-3 rounded bg-rose-400" /> Not Available
            </span>
            <span className="flex items-center gap-1.5 text-amber-600">
              <span className="w-3 h-1 bg-amber-500 rounded" /> Distance (km)
            </span>
          </div>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={historyData}
              margin={{ top: 10, right: 10, left: -20, bottom: 25 }}
              onClick={(e) => {
                if (e && e.activePayload && e.activePayload[0]) {
                  setSelectedRoute(e.activePayload[0].payload as HistoricalRouteData);
                }
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 11, fill: "#64748b", fontWeight: 700 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#64748b" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload as HistoricalRouteData;
                    return (
                      <div className="bg-slate-900 text-white p-3 rounded-xl shadow-lg text-xs space-y-1">
                        <p className="font-black text-amber-400">{data.date}, {data.time}</p>
                        <p className="font-bold text-blue-200">Route: {data.route}</p>
                        <p>Distance: <strong className="text-white">{data.distanceKm} km</strong></p>
                        <p>Available Cabs: <strong className="text-emerald-400">{data.availableCount}</strong></p>
                        <p>Not Available: <strong className="text-rose-400">{data.notAvailableCount}</strong></p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="availableCount" name="Available" fill="#1b437e" radius={[6, 6, 0, 0]} barSize={28} />
              <Bar dataKey="notAvailableCount" name="Not Available" fill="#f43f5e" radius={[6, 6, 0, 0]} barSize={28} />
              <Line
                type="monotone"
                dataKey="distanceKm"
                name="Distance (km)"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{ fill: "#1b437e", stroke: "#f59e0b", strokeWidth: 2, r: 5 }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Table Grid below Chart showing Date, Time, Routes & Status */}
      <div>
        <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">
          Historical Log Details (Click any row or bar to inspect)
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 text-[11px] uppercase tracking-wider">
                <th className="pb-3 font-black">Date & Time</th>
                <th className="pb-3 font-black">City Route</th>
                <th className="pb-3 font-black">Distance</th>
                <th className="pb-3 font-black text-right">Historical Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
              {historyData.map((item, index) => {
                const isSelected = selectedRoute.date === item.date && selectedRoute.route === item.route;
                return (
                  <tr
                    key={index}
                    onClick={() => setSelectedRoute(item)}
                    className={`cursor-pointer transition-colors ${
                      isSelected ? "bg-blue-50/80" : "hover:bg-slate-50"
                    }`}
                  >
                    <td className="py-3.5">
                      <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                        <Clock size={14} className="text-amber-500 shrink-0" />
                        {item.date}, {item.time}
                      </div>
                    </td>
                    <td className="py-3.5">
                      <div className="flex items-center gap-1.5 font-bold text-slate-800 text-xs">
                        <MapPin size={14} className="text-[#1b437e] shrink-0" />
                        {item.route}
                      </div>
                    </td>
                    <td className="py-3.5 text-xs font-bold text-slate-500">
                      {item.distanceKm} km
                    </td>
                    <td className="py-3.5 text-right">
                      {item.status === "Available" ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-emerald-50 text-emerald-600 border border-emerald-200">
                          <CheckCircle2 size={12} /> Available ({item.availableCount})
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-rose-50 text-rose-600 border border-rose-200">
                          <XCircle size={12} /> Not Available ({item.notAvailableCount})
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default RouteHistoryChart;