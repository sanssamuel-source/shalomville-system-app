
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, Loader2, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Login failed');

      // Success - Redirect based on role (for now just dashboard)
      router.push(data.user.role === 'ADMIN' ? '/admin/dashboard' : '/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-orange-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-primary-600 p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 flex flex-col items-center">
             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <img 
                  src="https://shalomvilleschoolsinternational.org/advert/17212338057fb9d49a72756b23e2dce42ffbe17a2b.png" 
                  alt="Shalomville" 
                  className="w-14 h-14 object-contain"
                />
             </div>
             <h1 className="text-2xl font-bold text-white mb-1">Parent Academy</h1>
             <p className="text-primary-100 text-sm">Shalomville Schools International</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
            <h2 className="text-xl font-bold text-gray-800 text-center mb-6">Welcome Back</h2>
            
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center border border-red-100 animate-in fade-in slide-in-from-top-2">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="parent@shalomville.com"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
                  <input 
                    type="password" 
                    required
                    value={formData.password}
                    onChange={e => setFormData({...formData, password: e.target.value})}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all"
                  />
                </div>
                <div className="text-right">
                    <a href="#" className="text-xs text-primary-600 font-medium hover:underline">Forgot Password?</a>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary-500/30 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-500">
                    Don't have an account? <span className="text-primary-600 font-bold cursor-pointer hover:underline">Request Access</span>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
