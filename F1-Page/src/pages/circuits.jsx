export default function Circuits() {
  const circuitsData = [
    {
      id: "monza",
      name: "Autodromo Nazionale Monza",
      country: "Italia",
      length: "5.793 km",
      turns: 11,
      lapRecord: "1:21.046 (Rubens Barrichello, 2004)",
      type: "Alta Velocidad / Templo de la Velocidad",
      badge: "Clásico"
    },
    {
      id: "monaco",
      name: "Circuit de Monaco",
      country: "Mónaco",
      length: "3.337 km",
      turns: 19,
      lapRecord: "1:12.909 (Lewis Hamilton, 2021)",
      type: "Urbano / Máxima Exigencia",
      badge: "Icónico"
    },
    {
      id: "silverstone",
      name: "Silverstone Circuit",
      country: "Reino Unido",
      length: "5.891 km",
      turns: 18,
      lapRecord: "1:27.097 (Max Verstappen, 2020)",
      type: "Alta Carga Aerodinámica",
      badge: "Histórico"
    },
    {
      id: "spa",
      name: "Circuit de Spa-Francorchamps",
      country: "Bélgica",
      length: "7.004 km",
      turns: 19,
      lapRecord: "1:46.286 (Valtteri Bottas, 2018)",
      type: "Leyenda / Curvas Rápidas (Eau Rouge)",
      badge: "Legendario"
    },
    {
      id: "suzuka",
      name: "Suzuka International Racing Course",
      country: "Japón",
      length: "5.807 km",
      turns: 18,
      lapRecord: "1:30.983 (Lewis Hamilton, 2019)",
      type: "Trazado en O / Técnico",
      badge: "Pilotos"
    },
    {
      id: "interlagos",
      name: "Autódromo José Carlos Pace (Interlagos)",
      country: "Brasil",
      length: "4.309 km",
      turns: 15,
      lapRecord: "1:10.540 (Valtteri Bottas, 2018)",
      type: "Antihorario / Emoción Garantizada",
      badge: "Espectáculo"
    }
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Header de la sección */}
      <div className="border-b border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-2 bg-red-950/60 border border-red-800/60 text-red-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          CARTOGRAFÍA Y TRAZADOS
        </div>
        <h1 className="text-3xl md:text-5xl font-black italic tracking-tight text-white mb-3">
          CIRCUITOS <span className="text-red-600">LEGENDARIOS</span>
        </h1>
        <p className="text-zinc-400 text-base max-w-2xl leading-relaxed">
          Explora los autódromos que desafían la física, los límites de los monoplazas y la habilidad de los mejores pilotos del mundo.
        </p>
      </div>

      {/* Grid de Circuitos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {circuitsData.map((circuit) => (
          <div 
            key={circuit.id}
            className="bg-zinc-950 border border-zinc-800 hover:border-red-600/50 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group"
          >
            <div>
              {/* Insignia y País */}
              <div className="flex justify-between items-start mb-4">
                <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-md font-semibold">
                  🏁 {circuit.country}
                </span>
                <span className="text-[10px] bg-red-950/60 text-red-400 border border-red-800/40 px-2 py-0.5 rounded font-mono uppercase">
                  {circuit.badge}
                </span>
              </div>

              <h3 className="text-white font-bold text-xl mb-1 group-hover:text-red-500 transition-colors">
                {circuit.name}
              </h3>
              <p className="text-zinc-400 text-xs mb-6 font-mono">
                {circuit.type}
              </p>

              {/* Estadísticas del circuito */}
              <div className="grid grid-cols-2 gap-3 mb-6 bg-zinc-900/50 border border-zinc-800/60 p-3 rounded-lg">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">Longitud</span>
                  <span className="text-white font-mono font-bold text-sm">{circuit.length}</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">Curvas</span>
                  <span className="text-white font-mono font-bold text-sm">{circuit.turns}</span>
                </div>
              </div>

              {/* Récord de vuelta */}
              <div className="border-t border-zinc-800/80 pt-4 text-xs text-zinc-400">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1 font-semibold">
                  Récord de Vuelta Histórico
                </span>
                <p className="font-mono text-zinc-300 bg-zinc-900 p-2 rounded border border-zinc-800">
                  {circuit.lapRecord}
                </p>
              </div>
            </div>

            {/* Pie de tarjeta */}
            <div className="border-t border-zinc-900 pt-4 mt-6 flex justify-between items-center text-xs text-zinc-500">
              <span>Homologación FIA: <strong className="text-emerald-400">Grado 1</strong></span>
              <span className="text-red-500 font-semibold hover:underline cursor-pointer">Ver telemetría →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}