import React from 'react';
// Importing icons from lucide-react
import { Code2, Github, Linkedin, Twitter, Youtube, Disc } from 'lucide-react';

// Data for the link columns
const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#' },
      { name: 'Skills', href: '#' },
      { name: 'Projects', href: '#' },
      { name: 'Verification', href: '#' },
      { name: 'Portfolio', href: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Discord', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Contributors', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
];

// Data for social media links
const socialLinks = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Discord', href: '#', icon: Disc },
  { name: 'YouTube', href: '#', icon: Youtube },
];


const Footer = () => {
  return (
    <footer className="w-full bg-white/5 backdrop-blur-md border-t border-white/10 shadow-inner font-['Sora']">
      <div className="max-w-7xl mx-auto py-16 px-8 md:px-16 lg:px-20">
        
        {/* Top Section: Multi-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Logo, Tagline, and Newsletter */}
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2">
              <img src="/Logo.png" alt="Companion Logo" className="w-10" />
              <span className="text-xl font-semibold text-white">Companion</span>
            </a>
            <p className="text-white/70 text-sm">Your verified dev identity platform.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-white/10 text-white placeholder-white/60 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#D11F4E]/50 transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#D11F4E] text-white font-semibold rounded-md hover:bg-[#b51840] transition-colors duration-300 flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Columns 2, 3, 4: Link Categories */}
          {footerLinks.map((category) => (
            <div key={category.title} className="lg:justify-self-center">
              <h3 className="text-white font-semibold uppercase text-sm tracking-wider mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/70 hover:text-[#D11F4E] transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12"></div>

        {/* Bottom Section: Copyright and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-sm text-white/50">
            <span>© {new Date().getFullYear()} Companion, Inc.</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="text-white/70 hover:text-[#D11F4E] transition-colors duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;