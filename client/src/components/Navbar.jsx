import React, { useState } from 'react';
import {
  Home,
  Sparkles,
  Users,
  Building2,
  Info,
  Menu,
  X,
  Code2, // A great replacement for the logo icon
} from 'lucide-react';

// Define navigation links with Lucide icons
const navLinks = [
  { name: 'Home', href: '#', icon: Home },
  { name: 'Features', href: '#', icon: Sparkles },
  { name: 'Students', href: '#', icon: Users },
  { name: 'Recruiters', href: '#', icon: Building2 },
  { name: 'About', href: '#', icon: Info },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navbar Container */}
      <nav className="fixed w-full top-0 z-50 p-4 font-['Sora']">
        <div className="max-w-7xl mx-auto bg-black/20 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl flex justify-between items-center px-6 py-3">
          
          {/* Left Side: Logo and Brand Name */}
          <a href="#" className="flex items-center gap-3">
            <img src="/Logo.png" alt="Companion Logo" className="w-10" />
            <span className="text-xl font-semibold text-white">Companion</span>
          </a>

          {/* Center: Main Navigation (Desktop) */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300">
                  {/* Lucide icons accept size props directly */}
                  <link.icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side: CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2 text-white/90 font-medium border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Sign In
            </button>
            <button className="px-5 py-2 bg-[#D11F4E] text-white font-medium rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105">
              Join Now
            </button>
          </div>

          {/* Hamburger Menu Icon (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {/* Lucide Menu/X icons */}
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[90px] z-40 bg-black/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}>
            <div 
                className="mx-4 bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-6"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
            >
                {/* Mobile Navigation Links */}
                <ul className="w-full flex flex-col items-center gap-4">
                    {navLinks.map((link) => (
                    <li key={link.name} className="w-full">
                        <a href={link.href} className="flex w-full justify-center items-center gap-3 py-3 text-lg text-white/80 hover:text-white transition-colors duration-300">
                            <link.icon className="h-5 w-5" />
                            <span>{link.name}</span>
                        </a>
                    </li>
                    ))}
                </ul>

                <hr className="w-full border-t border-white/10 my-2" />

                {/* Mobile CTA Buttons */}
                <div className="w-full flex flex-col items-center gap-4">
                    <button className="w-full py-3 text-white/90 font-medium border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300">
                        Sign In
                    </button>
                    <button className="w-full py-3 bg-[#D11F4E] text-white font-medium rounded-full hover:bg-opacity-90 transition-all duration-300">
                        Join Now
                    </button>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Navbar;