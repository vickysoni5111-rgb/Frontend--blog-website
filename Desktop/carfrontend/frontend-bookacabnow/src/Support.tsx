import React, { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import DashboardSidebar, { DashboardBreadcrumb } from "./DashboardSidebar";

export const Support: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setSubject("");
    setMessage("");
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <div className="bg-[#F7F5F1] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <DashboardBreadcrumb page="Support" />

        <div className="flex flex-col lg:flex-row gap-6">
          <DashboardSidebar active="support" unreadNotifications={1} />

          <main className="flex-1 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
              <span className="inline-block text-[11px] font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
                Help
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-3">Support</h2>
              <p className="text-slate-500 text-sm mt-1 max-w-md">
                Get help with a booking, payment, or account issue — we reply within 24 hours.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="tel:+919876543210"
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-center gap-3 hover:border-[#1b437e] transition-colors"
              >
                <Phone size={18} className="text-[#1b437e]" />
                <div>
                  <p className="text-sm font-bold text-slate-800">Call us</p>
                  <p className="text-xs text-slate-400">24/7 support line</p>
                </div>
              </a>
              <a
                href="mailto:support@bookacabnow.com"
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-center gap-3 hover:border-[#1b437e] transition-colors"
              >
                <Mail size={18} className="text-[#1b437e]" />
                <div>
                  <p className="text-sm font-bold text-slate-800">Email us</p>
                  <p className="text-xs text-slate-400">Reply in 24 hours</p>
                </div>
              </a>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-center gap-3">
                <MessageCircle size={18} className="text-[#1b437e]" />
                <div>
                  <p className="text-sm font-bold text-slate-800">Live chat</p>
                  <p className="text-xs text-slate-400">Use the chat icon below</p>
                </div>
              </div>
            </div>

            {sent && (
              <div className="bg-emerald-50 text-emerald-700 text-sm font-bold px-4 py-3 rounded-xl">
                Your ticket has been submitted. We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
              <p className="font-black text-slate-900 mb-1">Raise a ticket</p>
              <p className="text-sm text-slate-400 mb-5">Describe the issue and our team will follow up by email.</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Refund for cancelled ride"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1b437e] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Tell us what happened"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1b437e] text-sm resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-sm rounded-xl shadow-sm transition-all active:scale-95"
              >
                Submit ticket
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Support;