import React from 'react';

// Define your logos here. Make sure the 'src' path matches the file names in your /public folder.
const LOGOS = [
  { src: '/google.webp', alt: 'Google' },
  { src: '/github.png', alt: 'GitHub' },
  { src: '/mircosoft.webp', alt: 'Microsoft' },
  { src: '/netflix.png', alt: 'Netflix' },
  { src: '/vercel.webp', alt: 'Vercel' },
  { src: '/amzon.png', alt: 'Amazon' },
  { src: '/spotify.png', alt: 'Spotify' },
  { src: '/openai.png', alt: 'OpenAI' },
  { src: '/atlassion.png', alt: 'Atlassian' },
];

const TrustedBySection = () => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold text-gray-300 mb-10">
          Trusted by recruiters from these companies
        </h2>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          }}
        >
          <div className="flex w-max animate-infinite-scroll">
            {/* Render logos for the initial scroll */}
            <ul className="flex items-center justify-center">
              {LOGOS.map((logo, index) => (
                <li key={index} className="mx-8 md:mx-12 flex-shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 md:h-10 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </li>
              ))}
            </ul>
            {/* Render a second set of logos for the seamless loop */}
            <ul className="flex items-center justify-center" aria-hidden="true">
              {LOGOS.map((logo, index) => (
                <li key={`duplicate-${index}`} className="mx-8 md:mx-12 flex-shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 md:h-10 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;