// src/components/FeatureSection.jsx
import { ShieldCheck, Sparkles, LayoutTemplate, Users, Search, Code, ArrowRight } from 'lucide-react';

// Reusable Feature Card Component for consistency
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg
                  hover:scale-105 hover:shadow-primary-red/10 transition-all duration-300 h-full">
    <div className="flex-shrink-0 mb-4 w-12 h-12 flex items-center justify-center bg-primary-red/10 rounded-lg">
      {icon}
    </div>
    <h3 className="text-xl font-bold font-heading text-white">{title}</h3>
    <p className="mt-2 text-slate-300">{description}</p>
  </div>
);

const FeatureSection = () => {
  // Data for the top row of cards
  const topRowFeatures = [
    {
      icon: <ShieldCheck size={28} className="text-primary-red" />,
      title: "Skill Verification",
      description: "Prove your expertise with hands-on challenges and quizzes, not just claims on a resume.",
    },
    {
      icon: <Sparkles size={28} className="text-primary-red" />,
      title: "User Trust Score",
      description: "A dynamic score based on your verified history, helping you stand out to recruiters.",
    },
    {
      icon: <Users size={28} className="text-primary-red" />,
      title: "Peer Endorsements",
      description: "Gain credibility as colleagues and managers validate your skills and contributions.",
    },
  ];

  // Data for the two small cards on the bottom right
  const bottomRowSmallFeatures = [
     {
      icon: <Search size={28} className="text-primary-red" />,
      title: "Advanced Search",
      description: "Recruiters find you based on verified data, not just keywords.",
    },
    {
      icon: <Code size={28} className="text-primary-red" />,
      title: "Custom Portfolios",
      description: "Generate a portfolio or upload your own React/HTML code.",
    },
  ];

  return (
    <section id="features" className="bg-black py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built for Authentic Developers
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-slate-300">
            Our entire platform is designed to help you prove your skills and build a career on trust.
          </p>
        </div>

        {/* == Top Row: 3 Equal Cards == */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topRowFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* == Bottom Row: Asymmetrical Layout == */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Left Side: Large Card (2/3 width) */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg
                          hover:shadow-primary-red/10 transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex-shrink-0 mb-4 w-16 h-16 flex items-center justify-center bg-primary-red/10 rounded-lg">
                <LayoutTemplate size={36} className="text-primary-red" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold font-heading text-white">
                The Ultimate Developer Portfolio
              </h3>
              <p className="mt-4 text-slate-300 text-lg">
                Showcase your verified projects, skills, and experience in a beautifully generated portfolio that speaks for itself.
              </p>
              <a href="#portfolio" className="inline-flex items-center gap-2 mt-6 text-primary-red font-semibold group">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
            <div className="flex-1 w-full mt-8 md:mt-0">
               {/* ==> IMPORTANT: Replace with your screenshot <== */}
              <img 
                src="/images/portfolio-ui.png" 
                alt="Portfolio UI Showcase" 
                className="w-full rounded-lg shadow-2xl shadow-black/50"
              />
            </div>
          </div>

          {/* Right Side: Two Small Cards Stacked (1/3 width) */}
          <div className="flex flex-col gap-8">
            {bottomRowSmallFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;