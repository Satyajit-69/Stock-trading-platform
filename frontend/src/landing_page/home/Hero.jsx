import React, { useEffect, useState } from "react";
import {
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  ArrowRight,
  Users,
  Activity,
} from "lucide-react";

export default function Hero() {
  const fullText = "Welcome to Stockmates";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  // TYPEWRITER EFFECT
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 90);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        {/* HERO TEXT */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Built for modern investors
          </div>

          {/* TYPEWRITER HEADING */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight min-h-[4.5rem]">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="animate-pulse">|</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mt-6 leading-relaxed max-w-3xl mx-auto">
            Trade stocks, ETFs, mutual funds, and build wealth using powerful
            analytics, social insights, and AI-driven risk control — all in one
            platform.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
              Start Trading Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Trust */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              Bank-grade security
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              Real-time data
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-purple-600" />
              Advanced analytics
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>
          <img
            src="/assets/ui.jpg"
            alt="Stockmates dashboard"
            className="relative w-full rounded-2xl shadow-2xl border border-gray-200 hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          <Feature icon={<TrendingUp />} title="Smart Investing" />
          <Feature icon={<Shield />} title="Secure Trading" />
          <Feature icon={<Zap />} title="Lightning Fast" />
          <Feature icon={<Users />} title="Social Trading" />
          <Feature icon={<Activity />} title="AI Risk Control" />
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-50px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
          100% { transform: translate(0,0) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}

/* Feature Card */
function Feature({ icon, title }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">
        Built for speed, clarity, and confidence in every trade
      </p>
    </div>
  );
}
