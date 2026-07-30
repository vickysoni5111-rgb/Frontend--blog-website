import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import DashboardSidebar, { DashboardBreadcrumb } from "./DashboardSidebar";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  unread: boolean;
}

export const Notifications: React.FC = () => {
  const { currentUser } = useAuth();

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Welcome to BookACabNow!",
      message: `Dear ${currentUser?.name || "customer"}, your account has been successfully registered. You can now explore, list, and book premium cars on our platform.`,
      time: "Just now",
      unread: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, unread: false } : n)));
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <div className="bg-[#F7F5F1] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <DashboardBreadcrumb page="Notifications" />

        <div className="flex flex-col lg:flex-row gap-6">
          <DashboardSidebar active="notifications" unreadNotifications={unreadCount} />

          <main className="flex-1 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <span className="inline-block text-[11px] font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
                  Updates
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-3">Notifications</h2>
                <p className="text-slate-500 text-sm mt-1 max-w-md">
                  Booking, payment, and support alerts from BookACabNow.
                </p>
              </div>
              {unreadCount > 0 && (
                <button
                  onClick={markAllRead}
                  className="px-5 py-2.5 border border-slate-300 text-[#1b437e] hover:bg-slate-50 font-bold text-sm rounded-xl transition-all shrink-0"
                >
                  Mark all read
                </button>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
              <p className="text-xl font-black text-slate-900 mb-1">
                {unreadCount > 0 ? `${unreadCount} unread notification${unreadCount > 1 ? "s" : ""}` : "You're all caught up"}
              </p>
              <p className="text-sm text-slate-400 mb-6">Unread items are highlighted.</p>

              <div className="space-y-3">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`rounded-xl p-5 border ${
                      n.unread ? "bg-amber-50 border-amber-100" : "bg-slate-50 border-slate-100"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-bold text-slate-800">{n.title}</p>
                      {n.unread && (
                        <span className="text-[11px] font-black text-amber-600 uppercase tracking-wide shrink-0">
                          Unread
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 mt-1">{n.message}</p>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-xs text-slate-400">{n.time}</p>
                      {n.unread && (
                        <button
                          onClick={() => markRead(n.id)}
                          className="text-xs font-bold text-[#1b437e] hover:underline"
                        >
                          Mark read
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Notifications;