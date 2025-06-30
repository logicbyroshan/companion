import React from 'react';
// Using lucide-react for consistency
import { BadgeCheck, Sparkles, FileText, Zap } from 'lucide-react';

// Define the benefits in an array for cleaner JSX
const benefits = [
  {
    icon: BadgeCheck,
    title: 'Verified Skills & Projects',
    description: 'No more faking resumes. We verify every project and skill to build a profile recruiters can trust.',
  },
  {
    icon: Sparkles,
    title: 'Earn Credibility Points',
    description: 'Get rewarded with points for every verified skill, project, or endorsement you receive.',
  },
  {
    icon: FileText,
    title: 'Free Portfolio Templates',
    description: 'Unlock stunning, professional portfolio templates using your credibility points.',
  },
  {
    icon: Zap,
    title: 'Get Hired Faster',
    description: 'Show up in front of recruiters who are actively looking for verified, high-potential talent.',
  },
];

const StudentBenefitsSection = () => {
  return (
    <section className="bg-black py-24 sm:py-32 font-['Sora']">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-center mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Why Join <span className="text-[#D11F4E]">Companion</span>?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Build real credibility, unlock your dev potential, and showcase your skills to top-tier recruiters.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Benefits List */}
          <div className="flex flex-col gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-lg flex items-center gap-5 transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#D11F4E]/10 flex items-center justify-center">
                  <benefit.icon className="text-[#D11F4E]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
            
            <button className="mt-4 w-full md:w-auto px-8 py-3 bg-[#D11F4E] text-white font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105 self-start">
              Start Building Your Reputation
            </button>
          </div>

          {/* Right Column: Screenshot Image */}
          <div className="relative flex items-center justify-center">
             <div className="absolute w-72 h-72 bg-purple-600/30 rounded-full blur-3xl -z-10"></div>
             <img
                // IMPORTANT: Change this src to the path of your image in the /public folder
                src="/stu.png"
                alt="Screenshot of a Companion portfolio"
                className="relative w-full max-w-lg rounded-2xl shadow-2xl border border-white/10"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentBenefitsSection;