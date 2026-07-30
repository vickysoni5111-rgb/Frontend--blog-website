import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  User,
  BookOpen,
  MapPin,
  Heart,
  CreditCard,
  FileText,
  HelpCircle,
  Bell,
  ShieldCheck,
  LogOut,
} from "lucide-react";
import { useAuth } from "./AuthContext";

export type DashboardPage =
  | "overview"
  | "profile"
  | "bookings"
  | "saved-addresses"
  | "wishlist"
  | "payments"
  | "invoices"
  | "support"
  | "notifications";

const menuItems: { key: DashboardPage; label: string; icon: React.ReactNode; to: string }[] = [
  { key: "overview", label: "Overview", icon: <LayoutGrid size={18} />, to: "/dashboard" },
  { key: "profile", label: "Profile", icon: <User size={18} />, to: "/dashboard/profile" },
  { key: "bookings", label: "Bookings", icon: <BookOpen size={18} />, to: "/dashboard/bookings" },
  { key: "saved-addresses", label: "Saved Addresses", icon: <MapPin size={18} />, to: "/dashboard/saved-addresses" },
  { key: "wishlist", label: "Wishlist", icon: <Heart size={18} />, to: "/dashboard/wishlist" },
  { key: "payments", label: "Payments", icon: <CreditCard size={18} />, to: "/dashboard/payments" },
  { key: "invoices", label: "Invoices", icon: <FileText size={18} />, to: "/dashboard/invoices" },
  { key: "support", label: "Support", icon: <HelpCircle size={18} />, to: "/dashboard/support" },
  { key: "notifications", label: "Notifications", icon: <Bell size={18} />, to: "/dashboard/notifications" },
];

interface DashboardSidebarProps {
  active: DashboardPage;
  unreadNotifications?: number;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  active,
  unreadNotifications = 0,
}) => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const userInitial = currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : "U";

  return (
    <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-4">
      {/* Top Profile Card */}
      <div className="bg-[#1b437e] text-white rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-900 font-black flex items-center justify-center text-lg shadow-md shrink-0">
          {userInitial}
        </div>
        <div className="overflow-hidden">
          <p className="font-extrabold text-sm truncate">{currentUser?.name || "Guest User"}</p>
          <p className="text-[11px] text-amber-300 flex items-center gap-1 font-semibold mt-0.5">
            <ShieldCheck size={12} /> Verified Member
          </p>
        </div>
      </div>

      {/* Main Navigation Sidebar Card */}
      <nav className="bg-white rounded-2xl border border-slate-100 shadow-sm p-3 flex flex-col gap-1.5 h-full">
        {menuItems.map((item) => {
          const isActive = item.key === active;
          return (
            <Link
              key={item.key}
              to={item.to}
              className={`flex items-center justify-between gap-2 px-4 py-3.5 rounded-xl text-sm font-bold transition-all ${
                isActive
                  ? "bg-amber-400 text-slate-900 shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-[#1b437e]"
              }`}
            >
              <span className="flex items-center gap-3">
                {item.icon}
                {item.label}
              </span>
              {item.key === "notifications" && unreadNotifications > 0 && (
                <span
                  className={`text-[11px] font-black px-2 py-0.5 rounded-full ${
                    isActive ? "bg-slate-900 text-amber-400" : "bg-[#1b437e] text-white"
                  }`}
                >
                  {unreadNotifications}
                </span>
              )}
            </Link>
          );
        })}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-2 flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold text-rose-600 hover:bg-rose-50 transition-all text-left w-full"
        >
          <LogOut size={18} />
          Logout
        </button>
      </nav>
    </aside>
  );
};

export const DashboardBreadcrumb: React.FC<{ page: string }> = ({ page }) => (
  <div className="mb-6">
    <h1 className="text-2xl font-black text-[#1b437e]">My Dashboard</h1>
    <p className="text-xs text-slate-400 font-medium mt-0.5">
      Welcome back <span className="mx-1">›</span> {page}
    </p>
  </div>
);

export default DashboardSidebar;