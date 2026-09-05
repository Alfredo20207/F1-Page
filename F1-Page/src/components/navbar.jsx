import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Historia', path: '/history' },
    { name: 'Escuderías', path: '/teams' },
    { name: 'Circuitos', path: '/circuits' },
  ];

  const isActive = (path) => location.pathname === path;

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 text-white sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        
        {/* LOGO F1 HUB */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-red-600 text-white font-black italic px-3 py-1 text-xl tracking-tighter skew-x-[-12deg] group-hover:bg-red-500 transition-colors shadow-lg shadow-red-600/20">
            F1
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-widest text-lg sm:text-xl leading-none">PADDOCK</span>
            <span className="text-[10px] sm:text-xs text-red-500 tracking-widest font-semibold">HUB 2026</span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative py-2 transition-colors ${
                isActive(link.path)
                  ? 'text-red-500 font-bold'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* LIVE / STATUS INDICATOR (F1 Vibe) */}
        <div className="hidden lg:flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-full text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-zinc-400 font-medium">SYSTEM: <strong className="text-white">ONLINE</strong></span>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-zinc-900 transition-colors"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 sm:px-6 py-4 flex flex-col gap-2 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium px-3 py-2.5 rounded-lg transition-colors ${
                isActive(link.path)
                  ? 'bg-red-950/40 text-red-500 font-bold border-l-4 border-red-600'
                  : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 mt-1 border-t border-zinc-900 flex items-center justify-between px-3 text-xs text-zinc-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              STATUS: <strong className="text-white">ONLINE</strong>
            </span>
            <span className="text-[11px] text-zinc-500 font-mono">2026 SEASON</span>
          </div>
        </div>
      )}
    </nav>
  );
}