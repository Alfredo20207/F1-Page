import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-red-950/40 border border-zinc-800 p-8 md:p-16 flex flex-col items-start justify-center">
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 bg-red-950/60 border border-red-800/60 text-red-400 text-xs font-semibold px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          TEMPORADA F1 2026 EN VIVO
        </div>

        <h1 className="text-4xl md:text-6xl font-black italic tracking-tight text-white mb-4 max-w-2xl">
          LA VELOCIDAD <span className="text-red-600">HECHA</span> DATOS E HISTORIA
        </h1>

        <p className="text-zinc-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
          Sumérgete en el mundo de la máxima categoría del automovilismo. Explora las escuderías legendarias, recorre los circuitos más emblemáticos y prepárate para la telemetría definitiva.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/teams"
            className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-red-600/20"
          >
            Ver Escuderías
          </Link>
          <Link
            to="/circuits"
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold px-6 py-3 rounded-lg border border-zinc-700 transition-colors"
          >
            Explorar Circuitos
          </Link>
        </div>
      </section>

      {/* NEXT RACE BANNER (WIDGET MOCKUP) */}
      <section className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-red-600/10 border border-red-600/30 p-3 rounded-lg text-red-500 font-black italic text-xl">
            R16
          </div>
          <div>
            <span className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Próximo Gran Premio</span>
            <h3 className="text-white font-bold text-lg">Gran Premio de Italia • Monza</h3>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="text-center">
            <span className="block text-xl font-bold text-white font-mono">03</span>
            <span className="text-xs text-zinc-500">Días</span>
          </div>
          <span className="text-zinc-600 font-bold">:</span>
          <div className="text-center">
            <span className="block text-xl font-bold text-white font-mono">14</span>
            <span className="text-xs text-zinc-500">Horas</span>
          </div>
          <span className="text-zinc-600 font-bold">:</span>
          <div className="text-center">
            <span className="block text-xl font-bold text-white font-mono">45</span>
            <span className="text-xs text-zinc-500">Min</span>
          </div>
        </div>
      </section>

      {/* QUICK NAVIGATION CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/history"
          className="group bg-zinc-950 border border-zinc-800 hover:border-red-600/50 p-6 rounded-xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="text-red-500 font-bold text-sm mb-2 uppercase tracking-wider">Archivo</div>
            <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-500 transition-colors">Historia de la F1</h3>
            <p className="text-zinc-400 text-sm">Desde los orígenes en 1950 hasta la era moderna y sus leyendas inolvidables.</p>
          </div>
          <span className="mt-6 text-xs text-red-500 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Explorar historia →
          </span>
        </Link>

        <Link
          to="/teams"
          className="group bg-zinc-950 border border-zinc-800 hover:border-red-600/50 p-6 rounded-xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="text-red-500 font-bold text-sm mb-2 uppercase tracking-wider">Paddock</div>
            <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-500 transition-colors">Escuderías y Pilotos</h3>
            <p className="text-zinc-400 text-sm">Conoce los equipos actuales, monoplazas y las alineaciones que compiten por el título.</p>
          </div>
          <span className="mt-6 text-xs text-red-500 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Ver equipos →
          </span>
        </Link>

        <Link
          to="/circuits"
          className="group bg-zinc-950 border border-zinc-800 hover:border-red-600/50 p-6 rounded-xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="text-red-500 font-bold text-sm mb-2 uppercase tracking-wider">Trazados</div>
            <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-500 transition-colors">Circuitos Legendarios</h3>
            <p className="text-zinc-400 text-sm">Analiza las curvas, longitudes y récords de pista de los autódromos más difíciles del mundo.</p>
          </div>
          <span className="mt-6 text-xs text-red-500 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Descubrir circuitos →
          </span>
        </Link>
      </section>
    </div>
  );
}