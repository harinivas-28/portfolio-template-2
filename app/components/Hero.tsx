import { Parallax } from 'react-scroll-parallax'
import { useState } from 'react';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setMenuOpen(false); // Close menu on link click
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://i.pinimg.com/originals/dd/29/4c/dd294ccf017f917bf833ce4605a4f881.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-900/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_60%)]"></div>

      {/* Main Content */}
      <div className="text-center z-10 px-4">
        <Parallax translateY={['-50px', '50px']} scale={[0.95, 1.05]}>
          <div className="relative inline-block">
            <div className="absolute inset-0 animate-pulse-slow bg-white/20 rounded-full blur-xl"></div>
            <img 
              src="https://avatars.githubusercontent.com/u/150525075?v=4" 
              alt="Harinivas" 
              className="w-44 h-44 rounded-full mx-auto mb-8 border-4 border-white/20 shadow-2xl transform transition-transform duration-500 hover:scale-105 relative z-10" 
            />
          </div>
          <h1 className="text-7xl font-serif mb-4 text-white tracking-wide">Harinivas</h1>
        </Parallax>
        <Parallax translateY={['30px', '-30px']}>
          <p className="text-2xl mb-6 font-serif text-stone-100 tracking-wider">Software Developer</p>
          <p className="text-xl max-w-2xl mx-auto text-stone-200 leading-relaxed font-serif">
            Crafting elegant, responsive, and user-friendly web experiences with a dedication to timeless design principles.
          </p>
        </Parallax>
      </div>

      {/* Enhanced Navigation Menu */}
      <div className="absolute bottom-12 z-20">
        <button
          className="block md:hidden px-4 py-2 bg-stone-900 text-white rounded-full"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Nav'}
        </button>
        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex gap-8 px-8 py-5 bg-gradient-to-r from-stone-900/70 via-stone-800/70 to-stone-900/70 backdrop-blur-md rounded-full border border-white/10 shadow-lg`}
        >
          {[
            { name: 'About', href: '#about' },
            { name: 'Technical Skills', href: '#skills' },
            { name: 'Projects', href: '#projects' },
            { name: 'Contact', href: '#contact' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-stone-200 hover:text-white font-serif text-lg transition-all duration-300 hover:scale-105 cursor-pointer relative group"
            >
              {item.name}
              <span className="absolute inset-x-0 -bottom-1 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}

