import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import DashboardSidebar, { DashboardBreadcrumb } from "./DashboardSidebar";

export const Wishlist: React.FC = () => {
  return (
    <div className="bg-[#F7F5F1] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <DashboardBreadcrumb page="Wishlist" />

        <div className="flex flex-col lg:flex-row gap-6">
          <DashboardSidebar active="wishlist" unreadNotifications={1} />

          <main className="flex-1 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
              <span className="inline-block text-[11px] font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
                Saved
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-3">Wishlist</h2>
              <p className="text-slate-500 text-sm mt-1 max-w-md">
                Cabs and companies you've saved to book again later.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-10 text-center">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4">
                <Heart size={20} className="text-slate-300" />
              </div>
              <p className="font-bold text-slate-700 mb-1">Your wishlist is empty</p>
              <p className="text-sm text-slate-400 mb-6">
                Tap the heart icon on any cab or company to save it here.
              </p>
              <Link
                to="/Pages/Cabs"
                className="inline-block px-6 py-2.5 bg-[#1b437e] hover:bg-[#123260] text-white font-bold text-sm rounded-xl shadow-sm transition-all active:scale-95"
              >
                Browse Cabs
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;