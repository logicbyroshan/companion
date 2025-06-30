import React from 'react';
// Importing icons from lucide-react for consistency
import { GraduationCap, Code, Rocket, GitMerge, Search, Users } from 'lucide-react';

// An array to hold the persona data, making the component clean and easy to update.
const personas = [
  {
    icon: GraduationCap,
    title: 'Students',
    description: 'Build trust and showcase verified skills and projects to stand out to recruiters.',
  },
  {
    icon: Code,
    title: 'Self-Taught Developers',
    description: 'Prove your real-world knowledge through verified projects, not just traditional credentials.',
  },
  {
    icon: Rocket,
    title: 'Bootcamp Graduates',
    description: 'Get a dev-focused portfolio that highlights your intensive training and practical skills.',
  },
  {
    icon: GitMerge,
    title: 'Open Source Contributors',
    description: 'Turn your passion for open source into a career advantage with verified contributions.',
  },
  {
    icon: Search,
    title: 'Tech Recruiters',
    description: 'Hire with confidence and speed from a pre-vetted, job-ready, and trustworthy talent pool.',
  },
  {
    icon: Users,
    title: 'Hiring Managers',
    description: 'Find dependable developers whose skills are backed by real data, not just claims.',
  },
];

const WhoIsItForSection = () => {
  return (
    <section className="bg-[#0c0c0c] py-24 sm:py-32 font-['Sora']">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Who Is Companion For?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Whether you're just starting out or hiring your next star engineer — Companion is built for you.
          </p>
        </div>

        {/* Persona Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white/10"
            >
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 rounded-full bg-black/20 flex items-center justify-center">
                  <persona.icon className="text-[#D11F4E]" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{persona.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{persona.description}</p>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-20">
          <p className="text-lg text-gray-300 mb-4">Ready to see where you fit in?</p>
          <button className="px-8 py-3 bg-[#D11F4E] text-white font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;