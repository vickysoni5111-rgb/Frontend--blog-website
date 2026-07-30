import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const Register: React.FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Sabhi required fields bharein.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password match nahi ho raha.");
      return;
    }

    if (password.length < 6) {
      setError("Password kam se kam 6 characters ka hona chahiye.");
      return;
    }

    const result = register(name, email, password, phone);

    if (!result.success) {
      setError(result.message);
      return;
    }

    setSuccess(result.message);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <h2 className="text-2xl font-black text-[#1b437e] mb-1">Create Account</h2>
        <p className="text-sm text-slate-500 mb-6">BookACabNow par register karein</p>

        {error && (
          <div className="mb-4 px-4 py-2.5 rounded-lg bg-red-50 text-red-600 text-sm font-medium">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 px-4 py-2.5 rounded-lg bg-green-50 text-green-600 text-sm font-medium">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Apna naam likhein"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1b437e] text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1b437e] text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Optional"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1b437e] text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Kam se kam 6 characters"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1b437e] text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Password dobara likhein"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1b437e] text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#1b437e] hover:bg-[#123260] text-white font-bold text-sm rounded-xl shadow-sm transition-all active:scale-95"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Pehle se account hai?{" "}
          <Link to="/login" className="text-[#1b437e] font-bold hover:underline">
            Login karein
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;