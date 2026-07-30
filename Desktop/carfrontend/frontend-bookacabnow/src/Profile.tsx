import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import DashboardSidebar, { DashboardBreadcrumb } from "./DashboardSidebar";

export const Profile: React.FC = () => {
  const { currentUser } = useAuth();

  const [name, setName] = useState(currentUser?.name || "");
  const [phone, setPhone] = useState(currentUser?.phone || "");
  const [saved, setSaved] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPassword("");
    setNewPassword("");
  };

  return (
    <div className="bg-[#F7F5F1] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <DashboardBreadcrumb page="Profile" />

        <div className="flex flex-col lg:flex-row gap-6">
          <DashboardSidebar active="profile" unreadNotifications={1} />

          <main className="flex-1 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
              <span className="inline-block text-[11px] font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
                Account
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-3">Profile</h2>
              <p className="text-slate-500 text-sm mt-1 max-w-md">
                Keep your contact information current so drivers and support can reach you during a trip.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                <p className="text-lg font-black text-emerald-600">Active</p>
                <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-wide">Account status</p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                <p className="text-lg font-black text-[#1b437e]">Basic</p>
                <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-wide">Identity level</p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                <p className="text-lg font-black text-[#1b437e]">
                  {phone ? "Added" : "Missing"}
                </p>
                <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-wide">Mobile number</p>
              </div>
            </div>

            {saved && (
              <div className="bg-emerald-50 text-emerald-700 text-sm font-bold px-4 py-3 rounded-xl">
                Profile updated.
              </div>
            )}

            <form
              onSubmit={handleSaveProfile}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7"
            >
              <p className="font-black text-slate-900 mb-1">Personal details</p>
              <p className="text-sm text-slate-400 mb-5">
                Used for booking confirmations and ride coordination.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">Full name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1b437e] text-sm"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">Shown on your bookings.</p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">Email address</label>
                  <input
                    type="email"
                    value={currentUser?.email || ""}
                    disabled
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 text-sm cursor-not-allowed"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">Email cannot be changed from this screen.</p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">Mobile number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Add phone number"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1b437e] text-sm"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">Drivers may use this for pickup coordination.</p>
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-sm rounded-xl shadow-sm transition-all active:scale-95"
              >
                Save profile
              </button>
            </form>

            <form
              onSubmit={handleChangePassword}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7"
            >
              <p className="font-black text-slate-900 mb-1">Password</p>
              <p className="text-sm text-slate-400 mb-5">Use at least 6 characters for better account security.</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">Current password</label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1b437e] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">New password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1b437e] text-sm"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">Minimum 6 characters.</p>
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-sm rounded-xl shadow-sm transition-all active:scale-95"
              >
                Change password
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;