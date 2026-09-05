import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800 text-zinc-400 py-10 sm:py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Columna 1: Marca */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-red-600 text-white font-black italic px-3 py-1 text-lg tracking-tighter skew-x-[-12deg]">
                F1
              </div>
              <span className="font-extrabold tracking-widest text-white text-lg">PADDOCK HUB</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Tu portal definitivo de análisis, historia, escuderías y circuitos de la Fórmula 1. Diseñado para los amantes del automovilismo de alta velocidad y los datos.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-white font-semibold text-xs sm:text-sm tracking-wider uppercase mb-4 border-l-2 border-red-600 pl-2">
              Navegación Rápida
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-red-500 transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-red-500 transition-colors">Historia de F1</Link>
              </li>
              <li>
                <Link to="/teams" className="hover:text-red-500 transition-colors">Escuderías y Pilotos</Link>
              </li>
              <li>
                <Link to="/circuits" className="hover:text-red-500 transition-colors">Calendario de Circuitos</Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Plataforma */}
          <div>
            <h4 className="text-white font-semibold text-xs sm:text-sm tracking-wider uppercase mb-4 border-l-2 border-red-600 pl-2">
              Plataforma & Datos
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li className="flex items-center gap-2 text-zinc-400">
                <span>Telemetría en Vivo</span>
                <span className="text-[10px] bg-red-950/80 text-red-400 px-1.5 py-0.5 rounded border border-red-800/60">2026</span>
              </li>
              <li className="text-zinc-400">Reglamento Técnico 2026</li>
              <li className="text-zinc-400">Récords de Vuelta</li>
            </ul>
          </div>

          {/* Columna 4: Estado del Sistema */}
          <div>
            <h4 className="text-white font-semibold text-xs sm:text-sm tracking-wider uppercase mb-4 border-l-2 border-red-600 pl-2">
              Telemetría del Sitio
            </h4>
            <div className="bg-zinc-900/90 border border-zinc-800/80 p-3.5 rounded-xl text-xs flex flex-col gap-2.5">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Estado Servidor:</span>
                <span className="text-emerald-400 font-mono flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  ONLINE
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Temporada Activa:</span>
                <span className="text-zinc-200 font-mono font-medium">FIA F1 2026</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Latencia:</span>
                <span className="text-emerald-400 font-mono font-medium">12ms</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright y Aviso Legal */}
        <div className="pt-6 sm:pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-zinc-300">F1 Paddock Hub</strong>. Desarrollado con React & Tailwind CSS.
          </p>
          <p className="text-center sm:text-right max-w-lg text-[11px] text-zinc-600">
            Este sitio es un proyecto de desarrollo web independiente y no tiene afiliación oficial con la Formula 1 ni la FIA.
          </p>
        </div>

      </div>
    </footer>
  );
}