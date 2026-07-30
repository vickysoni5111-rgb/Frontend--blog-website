import React from "react";
import { FileText } from "lucide-react";
import DashboardSidebar, { DashboardBreadcrumb } from "./DashboardSidebar";

export const Invoices: React.FC = () => {
  return (
    <div className="bg-[#F7F5F1] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <DashboardBreadcrumb page="Invoices" />

        <div className="flex flex-col lg:flex-row gap-6">
          <DashboardSidebar active="invoices" unreadNotifications={1} />

          <main className="flex-1 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
              <span className="inline-block text-[11px] font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
                Billing
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-3">Invoices</h2>
              <p className="text-slate-500 text-sm mt-1 max-w-md">
                Download receipts for completed rides, ready for expense claims.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-4 px-6 py-3 border-b border-slate-100 text-[11px] font-black text-slate-400 uppercase tracking-wide">
                <span>Invoice</span>
                <span>Date</span>
                <span>Amount</span>
                <span className="text-right">Download</span>
              </div>
              <div className="p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4">
                  <FileText size={20} className="text-slate-300" />
                </div>
                <p className="font-bold text-slate-700 mb-1">No invoices yet</p>
                <p className="text-sm text-slate-400">
                  A receipt is generated automatically after every completed ride.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Invoices;