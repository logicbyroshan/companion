import React, { useState } from 'react';
// Using lucide-react for consistency
import { ChevronDown } from 'lucide-react';

// An array to hold FAQ data, making it easy to manage.
const faqs = [
  {
    question: 'What makes Companion different from LinkedIn or GitHub?',
    answer: 'Companion focuses on verification. While LinkedIn relies on self-reported data and GitHub shows code, Companion cross-references both to validate your skills, projects, and experience, creating a high-trust profile for recruiters.',
  },
  {
    question: 'How are projects and skills actually verified?',
    answer: 'Our system analyzes commit history, code contributions, and project complexity. Skills are verified by mapping them to your project code and through optional peer reviews and technical assessments.',
  },
  {
    question: 'Can I customize my public portfolio?',
    answer: 'Absolutely. You can earn points for verified achievements, which you can use to unlock premium, professionally designed portfolio templates. You can then customize the layout, colors, and content to match your personal brand.',
  },
  {
    question: 'Is this platform free for developers to use?',
    answer: 'Yes, the core platform is completely free for students and developers. You can build your verified profile, access standard portfolios, and be discovered by recruiters at no cost. We offer optional paid features for advanced customization.',
  },
  {
    question: 'How do recruiters find and trust my profile?',
    answer: 'Recruiters use our smart filters to search for candidates with specific verified skills. The "Verified by Companion" badge on your profile acts as a powerful signal of trust, making you stand out from the crowd.',
  },
    {
    question: 'What happens if I fake a project or skill?',
    answer: 'Our system is designed to detect fraudulent claims. If an unverifiable or plagiarized project is detected, it will be flagged, and repeated attempts can lead to a permanent ban. We are committed to maintaining a high-trust ecosystem.',
  },
];

// A reusable accordion item component
const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left p-6"
      >
        <span className="text-lg font-semibold text-white">{faq.question}</span>
        <ChevronDown
          className={`transform transition-transform duration-300 text-white/70 ${
            isOpen ? 'rotate-180 text-[#D11F4E]' : ''
          }`}
          size={24}
        />
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="text-white/70 text-base leading-relaxed px-6 pb-6">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-24 sm:py-32 font-['Sora']">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;