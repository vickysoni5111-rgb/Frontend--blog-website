import React from "react";
import { CreditCard, Plus } from "lucide-react";
import DashboardSidebar, { DashboardBreadcrumb } from "./DashboardSidebar";

export const Payment: React.FC = () => {
  return (
    <div className="bg-[#F7F5F1] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <DashboardBreadcrumb page="Payments" />

        <div className="flex flex-col lg:flex-row gap-6">
          <DashboardSidebar active="payments" unreadNotifications={1} />

          <main className="flex-1 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <span className="inline-block text-[11px] font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
                  Wallet
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-3">Payments</h2>
                <p className="text-slate-500 text-sm mt-1 max-w-md">
                  Manage saved cards and UPI for faster ride checkout.
                </p>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-sm rounded-xl shadow-sm transition-all active:scale-95 shrink-0">
                <Plus size={16} /> Add payment method
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                <p className="text-2xl font-black text-[#1b437e]">₹0</p>
                <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-wide">Total paid</p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                <p className="text-2xl font-black text-[#1b437e]">0</p>
                <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-wide">Saved methods</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-10 text-center">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4">
                <CreditCard size={20} className="text-slate-300" />
              </div>
              <p className="font-bold text-slate-700 mb-1">No payment methods saved</p>
              <p className="text-sm text-slate-400">
                Add a card or UPI ID so your next ride checks out in one tap.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Payment;