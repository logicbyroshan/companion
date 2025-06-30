import React from 'react';
// You can use any icon library, or none at all. Lucide is kept for consistency.
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative w-full bg-[#0c0c0c] py-24 sm:py-32 font-['Sora'] overflow-hidden">
      
      {/* Background Glows for visual depth */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#D11F4E]/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse animation-delay-3000"></div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col items-center text-center p-8 md:p-16">
          
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Start Building Real Reputation Today
          </h2>
          
          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            Join 3,000+ developers and recruiters already building verified dev identities on the most trusted platform.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-[#D11F4E] text-white font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105">
              <span>Join Now</span>
              <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/20 text-white/90 font-medium rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
              See How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;