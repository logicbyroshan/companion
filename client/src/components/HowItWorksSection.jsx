import React from 'react';
// Import icons from lucide-react
import { CodeXml, BadgeCheck, GraduationCap } from 'lucide-react';

// Updated the array to use Lucide icons.
const verificationSteps = [
  {
    icon: CodeXml,
    title: 'Project Verification',
    description: 'We analyze your GitHub repositories, commit history, and code quality to validate the projects you claim as your own.',
  },
  {
    icon: BadgeCheck,
    title: 'Skill Verification',
    description: 'Skills are cross-referenced with your project contributions and validated through peer reviews and optional coding assessments.',
  },
  {
    icon: GraduationCap,
    title: 'Education & Experience',
    description: 'We verify your educational background and work history through trusted third-party services to ensure authenticity.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-[#0c0c0c] py-24 sm:py-32 font-['Sora']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            No Fakes. Just Facts.
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Every skill, project, and experience is real — and we have the receipts. Here's how our multi-layered system builds a profile you can trust.
          </p>
        </div>

        {/* Verification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verificationSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg border border-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10"
            >
              {/* Icon with accent color background */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#D11F4E]/10 border border-[#D11F4E]/30 flex items-center justify-center">
                  {/* Lucide icons are now used here */}
                  <step.icon className="text-[#D11F4E]" size={32} />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white text-center mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-400 text-center text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;