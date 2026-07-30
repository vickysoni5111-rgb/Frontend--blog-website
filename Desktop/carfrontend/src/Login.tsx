import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email aur password dono bharein.");
      return;
    }

    const result = login(email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/");
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <h2 className="text-2xl font-black text-[#1b437e] mb-1">Welcome Back</h2>
        <p className="text-sm text-slate-500 mb-6">Apne account me login karein</p>

        {error && (
          <div className="mb-4 px-4 py-2.5 rounded-lg bg-red-50 text-red-600 text-sm font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label className="block text-sm font-bold text-slate-700 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Apna password likhein"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1b437e] text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#1b437e] hover:bg-[#123260] text-white font-bold text-sm rounded-xl shadow-sm transition-all active:scale-95"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Account nahi hai?{" "}
          <Link to="/register" className="text-[#1b437e] font-bold hover:underline">
            Register karein
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;