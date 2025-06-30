import React from 'react';

const VercelIcon = () => (
  <svg height="24" viewBox="0 0 75 65" fill="#fff" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.59.25l36.95 64H.64l36.95-64z" />
  </svg>
);

const ReactIcon = () => (
  <svg height="28" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-black font-['Sora'] text-white flex items-center justify-center overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(209,31,78,0.15),black_70%)]"></div>

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight font-serif">
          Build and showcase real skills, not fake resumes.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl">
          The new standard for developers to connect, build, and get hired.
          Stop grinding LeetCode. Start building a portfolio that stands out.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 w-full max-w-md flex flex-col items-center gap-4">
          {/* Google Button */}
          <button
            type="button"
            className="w-full flex items-center justify-between px-4 py-3 rounded-md bg-[#0a66c2] text-white font-medium hover:bg-[#004182] transition"
          >
            <div className="flex items-center gap-2">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="h-5 w-5"
              />
              <span>Continue as Compi</span>
            </div>
            <span className="text-sm opacity-80">officialcompibusiness@gmail.com</span>
          </button>

          {/* Microsoft Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-white/30 text-white rounded-md font-medium hover:bg-[#D11F4E] hover:border-[#D11F4E] transition-all"
          >
            <img
              src="https://img.icons8.com/color/48/000000/microsoft.png"
              alt="Microsoft"
              className="h-5 w-5"
            />
            Continue with Microsoft
          </button>

          {/* Email Button */}
          <button
            type="button"
            className="w-full px-4 py-3 border border-white/30 text-white rounded-md font-medium hover:bg-[#D11F4E] hover:border-[#D11F4E] transition-all"
          >
            Sign in with email
          </button>

          <p className="text-sm text-gray-400 text-center mt-2">
            New to Companion?{' '}
            <a href="#" className="text-[#D11F4E] font-semibold hover:underline">Join now</a>
          </p>
        </div>

        {/* Code Snippet Section */}
        <div className="relative mt-20 md:mt-28 w-full max-w-5xl">
          {/* Background Elements */}
          <div className="absolute -top-24 -left-12 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
          <div className="absolute -top-10 right-10 text-7xl opacity-30 -z-10">🦆</div>
          <div className="absolute -top-16 -right-16 -z-10"><ReactIcon /></div>

          {/* Code Block UI */}
          <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl drop-shadow-[0_0_20px_rgba(209,31,78,0.25)]">
            <div className="flex items-center gap-2 p-4 border-b border-white/10">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <div className="ml-4 flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-md">
                  <VercelIcon />
                  <span>project.jsx</span>
                </div>
                <span className="opacity-50">index.js</span>
              </div>
            </div>

            <div className="p-4 md:p-6 text-left font-['JetBrains_Mono'] text-sm overflow-x-auto">
              <pre>
                <code className="text-gray-400">
                  <span className="text-purple-400">import</span> React <span className="text-purple-400">from</span>{' '}
                  <span className="text-green-400">'react'</span>;<br /><br />
                  <span className="text-purple-400">const</span> <span className="text-blue-400">PortfolioCard</span> = (
                  &#123;<span className="text-orange-400"> project </span>&#125;) =&gt; &#123;<br />
                  {'  '}<span className="text-purple-400">return</span> (<br />
                  {'    '}&lt;<span className="text-red-400">div</span> <span className="text-sky-300">className</span>=
                  <span className="text-green-400">"card"</span>&gt;<br />
                  {'      '}&lt;<span className="text-red-400">img</span> <span className="text-sky-300">src</span>=&#123;<span className="text-orange-400">project</span>.imageUrl&#125; <span className="text-sky-300">alt</span>=&#123;<span className="text-orange-400">project</span>.name&#125; /&gt;<br />
                  {'      '}&lt;<span className="text-red-400">h3</span>&gt;&#123;<span className="text-orange-400">project</span>.name&#125;&lt;/<span className="text-red-400">h3</span>&gt;<br />
                  {'      '}&lt;<span className="text-red-400">p</span>&gt;&#123;<span className="text-orange-400">project</span>.description&#125;&lt;/<span className="text-red-400">p</span>&gt;<br />
                  {'      '}&lt;<span className="text-red-400">a</span> <span className="text-sky-300">href</span>=&#123;<span className="text-orange-400">project</span>.url&#125;&gt;View Project&lt;/<span className="text-red-400">a</span>&gt;<br />
                  {'    '}&lt;/<span className="text-red-400">div</span>&gt;<br />
                  {'  '});<br />
                  &#125;;<br /><br />
                  <span className="text-purple-400">export default</span> <span className="text-blue-400">PortfolioCard</span>;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
