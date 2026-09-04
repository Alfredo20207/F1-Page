import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-zinc-950 border-b border-zinc-800 text-white px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-black tracking-wider text-red-600 flex items-center gap-2">
          F1 <span className="text-white text-sm font-normal tracking-normal border-l border-zinc-700 pl-2">HUB 2026</span>
        </Link>
        <div className="flex gap-6 text-sm font-medium text-zinc-300">
          <Link to="/" className="hover:text-red-500 transition-colors">Inicio</Link>
          <Link to="/history" className="hover:text-red-500 transition-colors">Historia</Link>
          <Link to="/teams" className="hover:text-red-500 transition-colors">Escuderías</Link>
          <Link to="/circuits" className="hover:text-red-500 transition-colors">Circuitos</Link>
        </div>
      </div>
    </nav>
  );
}