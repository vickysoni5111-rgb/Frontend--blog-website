import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact1 from "./Contact1";
import Chat from "./Chat";
import Whatsapp from "./Whatsapp";
import ScrollToTop from "./ScrollToTop";

import ListCompany from "./ListCompany";
import Listcar from "./Listcar";
import Cabs from "./Cabs";
import Companies from "./Companies";
import Blogs from "./Blogs";
import FAQ from "./FAQ";

import Register from "./Register";
import Login from "./Login";

import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Bookings from "./Bookings";
import SavedAddresses from "./Save";
import Wishlist from "./Wishlist";
import Payment from "./Payment";
import Invoice from "./Invoice";
import Support from "./Support";
import Notification from "./Notification";

// Dummy placeholder components
const Fleet = () => <div className="p-12 text-3xl font-bold">Cabs</div>;
const Drivers = () => <div className="p-12 text-3xl font-bold">Companies</div>;
const Testimonials = () => <div className="p-12 text-3xl font-bold">Blogs</div>;
const Faq = () => <div className="p-12 text-3xl font-bold">FAQ</div>;

const AppLayout: React.FC = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-amber-400 selection:text-slate-900 flex flex-col justify-between">
      {/* Navbar hidden on dashboard routes */}
      {!isDashboardRoute && <Navbar />}

      <ScrollToTop />

      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact1 />} />

          {/* Listing & Info Pages */}
          <Route path="/list-car" element={<Listcar />} />
          <Route path="/list-company" element={<ListCompany />} />
          <Route path="/Pages/Cabs" element={<Cabs />} />
          <Route path="/Pages/Companies" element={<Companies />} />
          <Route path="/Pages/Blogs" element={<Blogs />} />
          <Route path="/Pages/Faq" element={<FAQ />} />

          {/* Auth Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/dashboard/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/dashboard/bookings" element={<ProtectedRoute><Bookings /></ProtectedRoute>} />
          <Route path="/dashboard/saved-addresses" element={<ProtectedRoute><SavedAddresses /></ProtectedRoute>} />
          <Route path="/dashboard/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
          <Route path="/dashboard/payments" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
          <Route path="/dashboard/invoices" element={<ProtectedRoute><Invoice /></ProtectedRoute>} />
          <Route path="/dashboard/support" element={<ProtectedRoute><Support /></ProtectedRoute>} />
          <Route path="/dashboard/notifications" element={<ProtectedRoute><Notification /></ProtectedRoute>} />
        </Routes>
      </main>

      {/* Footer hidden on dashboard routes */}
      {!isDashboardRoute && <Footer />}

      <Chat />
      <Whatsapp />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppLayout />
      </Router>
    </AuthProvider>
  );
};

export default App;