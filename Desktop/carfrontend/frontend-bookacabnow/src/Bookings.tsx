import React from "react";
import { Link } from "react-router-dom";
import DashboardSidebar, { DashboardBreadcrumb } from "./DashboardSidebar";

export const Bookings: React.FC = () => {
  return (
    <div className="bg-[#F7F5F1] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <DashboardBreadcrumb page="Bookings" />

        <div className="flex flex-col lg:flex-row gap-6">
          <DashboardSidebar active="bookings" unreadNotifications={1} />

          <main className="flex-1 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
              <span className="inline-block text-[11px] font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
                Rides
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-3">Bookings</h2>
              <p className="text-slate-500 text-sm mt-1 max-w-md">
                Every ride you've booked or completed on BookACabNow, in one place.
              </p>
            </div>

            <div className="flex gap-2">
              {["All", "Upcoming", "Completed", "Cancelled"].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    i === 0
                      ? "bg-[#1b437e] text-white shadow-sm"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-10 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1b437e]" />
                  <span className="w-10 border-t-2 border-dashed border-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                </div>
              </div>
              <p className="font-bold text-slate-700 mb-1">No bookings yet</p>
              <p className="text-sm text-slate-400 mb-6">
                Once you book a ride, your pickup, drop, and fare details will show up here.
              </p>
              <Link
                to="/"
                className="inline-block px-6 py-2.5 bg-[#1b437e] hover:bg-[#123260] text-white font-bold text-sm rounded-xl shadow-sm transition-all active:scale-95"
              >
                Book Taxi Now
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Bookings;