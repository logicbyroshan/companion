import React from 'react';
// Using lucide-react for consistency with other sections
import { BadgeCheck, Filter, Heart, FileCheck2, ShieldCheck } from 'lucide-react';

// Define the features in an array for easy management and clean code
const recruiterFeatures = [
  {
    icon: BadgeCheck,
    title: 'Assured Badge Visibility',
    description: 'Our verified badge is only shown to high-trust users, ensuring you connect with genuine talent.',
  },
  {
    icon: Filter,
    title: 'Smart Filtering',
    description: 'Filter candidates by verified skills, trust score, location, and specific project experience.',
  },
  {
    icon: Heart,
    title: 'Wishlist & Shortlist Tools',
    description: 'Save and organize your top candidates with intuitive tools, just like a shopping cart for talent.',
  },
  {
    icon: FileCheck2,
    title: 'Hire-Ready Profiles',
    description: 'Access complete portfolios with verified projects and skills, all in one place.',
  },
   {
    icon: ShieldCheck,
    title: 'No-BS Guarantee',
    description: 'Over 90% of active profiles are verified by our system, saving you from resume fraud.',
  },
];

const RecruiterBenefitsSection = () => {
  return (
    <section className="bg-black py-24 sm:py-32 font-['Sora'] relative overflow-hidden">
       {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-tr from-[#D11F4E]/20 to-transparent rounded-full blur-3xl opacity-30 -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Dashboard Image */}
          <div className="relative flex items-center justify-center order-last md:order-first">
             <img
                src="/rec.png" // IMPORTANT: Change this to your image path
                alt="Recruiter Dashboard"
                className="relative w-full max-w-lg rounded-2xl shadow-2xl border border-white/10"
             />
          </div>

          {/* Right Column: Features List */}
          <div className="flex flex-col">
            <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Made for Recruiters. <br/>Built for <span className="text-[#D11F4E]">Trust.</span>
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                    Stop wasting time on fake resumes. Companion connects you with verified, job-ready developers.
                </p>
            </div>

            <div className="space-y-6">
              {recruiterFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <feature.icon className="text-[#D11F4E]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-white/70 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
             
            <button className="mt-8 w-full md:w-auto px-8 py-3 bg-[#D11F4E] text-white font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105 self-start">
              Start Hiring Smarter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterBenefitsSection;