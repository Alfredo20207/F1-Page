import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  // Fecha objetivo para la próxima carrera (ejemplo: 13 Septiembre 2026)
  const targetDate = new Date('2026-09-06T07:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col gap-10 sm:gap-12">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-red-950/40 border border-zinc-800 p-6 sm:p-10 md:p-14 flex flex-col items-start justify-center shadow-xl">
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 bg-red-950/60 border border-red-800/60 text-red-400 text-xs font-semibold px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          TEMPORADA F1 2026 EN VIVO
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black italic tracking-tight text-white mb-4 max-w-2xl leading-tight">
          LA VELOCIDAD <span className="text-red-600">HECHA</span> DATOS E HISTORIA
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mb-8 leading-relaxed">
          Portal integrado con OpenF1 API. Explora escuderías, circuitos y prepárate para la telemetría en tiempo real.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/teams"
            className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-red-600/20 active:scale-95"
          >
            Ver Escuderías
          </Link>
          <Link
            to="/circuits"
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold px-6 py-3 rounded-xl border border-zinc-700 transition-all active:scale-95"
          >
            Explorar Circuitos
          </Link>
        </div>
      </section>

      {/* NEXT RACE TIMER (REAL-TIME COUNTDOWN) */}
      <section className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-red-600/10 border border-red-600/30 p-3 rounded-xl text-red-500 font-black italic text-xl">
            LIVE
          </div>
          <div>
            <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-semibold block">Próximo Gran Premio</span>
            <h3 className="text-white font-bold text-base sm:text-lg">Gran Premio de Italia • Monza</h3>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 text-sm">
          <div className="text-center bg-zinc-900 border border-zinc-800 px-3 sm:px-4 py-2 rounded-xl min-w-[56px] sm:min-w-[64px]">
            <span className="block text-lg sm:text-2xl font-bold text-white font-mono">{timeLeft.days}</span>
            <span className="text-[10px] text-zinc-500 uppercase font-semibold">Días</span>
          </div>
          <span className="text-zinc-600 font-bold">:</span>
          <div className="text-center bg-zinc-900 border border-zinc-800 px-3 sm:px-4 py-2 rounded-xl min-w-[56px] sm:min-w-[64px]">
            <span className="block text-lg sm:text-2xl font-bold text-white font-mono">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-[10px] text-zinc-500 uppercase font-semibold">Horas</span>
          </div>
          <span className="text-zinc-600 font-bold">:</span>
          <div className="text-center bg-zinc-900 border border-zinc-800 px-3 sm:px-4 py-2 rounded-xl min-w-[56px] sm:min-w-[64px]">
            <span className="block text-lg sm:text-2xl font-bold text-white font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-[10px] text-zinc-500 uppercase font-semibold">Min</span>
          </div>
          <span className="text-zinc-600 font-bold">:</span>
          <div className="text-center bg-zinc-900 border border-zinc-800 px-3 sm:px-4 py-2 rounded-xl min-w-[56px] sm:min-w-[64px]">
            <span className="block text-lg sm:text-2xl font-bold text-white font-mono">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-[10px] text-zinc-500 uppercase font-semibold">Seg</span>
          </div>
        </div>
      </section>

      {/* QUICK NAVIGATION CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/history" className="group bg-zinc-950 border border-zinc-800 hover:border-red-600/50 p-6 rounded-2xl transition-all flex flex-col justify-between hover:bg-zinc-900/40">
          <div>
            <div className="text-red-500 font-bold text-xs mb-2 uppercase tracking-wider">Archivo</div>
            <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-500 transition-colors">Historia de la F1</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Desde los orígenes en 1950 hasta la nueva era de regulaciones 2026.</p>
          </div>
          <span className="mt-6 text-xs text-red-500 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Explorar historia →
          </span>
        </Link>
        <Link to="/teams" className="group bg-zinc-950 border border-zinc-800 hover:border-red-600/50 p-6 rounded-2xl transition-all flex flex-col justify-between hover:bg-zinc-900/40">
          <div>
            <div className="text-red-500 font-bold text-xs mb-2 uppercase tracking-wider">Paddock</div>
            <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-500 transition-colors">Escuderías y Pilotos</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Alineaciones oficiales, constructores y unidades de potencia.</p>
          </div>
          <span className="mt-6 text-xs text-red-500 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Ver equipos →
          </span>
        </Link>
        <Link to="/circuits" className="group bg-zinc-950 border border-zinc-800 hover:border-red-600/50 p-6 rounded-2xl transition-all flex flex-col justify-between hover:bg-zinc-900/40">
          <div>
            <div className="text-red-500 font-bold text-xs mb-2 uppercase tracking-wider">Trazados</div>
            <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-500 transition-colors">Circuitos Legendarios</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Autódromos mundiales, zonas DRS y récords de vuelta.</p>
          </div>
          <span className="mt-6 text-xs text-red-500 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Descubrir circuitos →
          </span>
        </Link>
      </section>
    </div>
  );
}