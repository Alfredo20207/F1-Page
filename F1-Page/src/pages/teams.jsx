export default function Teams() {
  const teamsData = [
    {
      id: "ferrari",
      name: "Scuderia Ferrari",
      base: "Maranello, Italia",
      powerUnit: "Ferrari",
      color: "border-red-600 bg-red-950/10",
      badgeColor: "bg-red-600 text-white",
      drivers: ["Charles Leclerc", "Lewis Hamilton"],
      championships: 16
    },
    {
      id: "redbull",
      name: "Oracle Red Bull Racing",
      base: "Milton Keynes, Reino Unido",
      powerUnit: "Honda RBPT",
      color: "border-blue-600 bg-blue-950/10",
      badgeColor: "bg-blue-600 text-white",
      drivers: ["Max Verstappen", "Liam Lawson"],
      championships: 6
    },
    {
      id: "mercedes",
      name: "Mercedes-AMG Petronas F1 Team",
      base: "Brackley, Reino Unido",
      powerUnit: "Mercedes",
      color: "border-cyan-500 bg-cyan-950/10",
      badgeColor: "bg-cyan-500 text-zinc-950 font-bold",
      drivers: ["George Russell", "Kimi Antonelli"],
      championships: 8
    },
    {
      id: "mclaren",
      name: "McLaren F1 Team",
      base: "Woking, Reino Unido",
      powerUnit: "Mercedes",
      color: "border-orange-500 bg-orange-950/10",
      badgeColor: "bg-orange-500 text-zinc-950 font-bold",
      drivers: ["Lando Norris", "Oscar Piastri"],
      championships: 9
    },
    {
      id: "astonmartin",
      name: "Aston Martin Aramco F1 Team",
      base: "Silverstone, Reino Unido",
      powerUnit: "Mercedes",
      color: "border-emerald-600 bg-emerald-950/10",
      badgeColor: "bg-emerald-600 text-white",
      drivers: ["Fernando Alonso", "Lance Stroll"],
      championships: 0
    },
    {
      id: "alpine",
      name: "BWT Alpine F1 Team",
      base: "Enstone, Reino Unido",
      powerUnit: "Renault",
      color: "border-blue-400 bg-blue-950/20",
      badgeColor: "bg-blue-400 text-zinc-950 font-bold",
      drivers: ["Pierre Gasly", "Jack Doohan"],
      championships: 2
    }
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Header de la sección */}
      <div className="border-b border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-2 bg-red-950/60 border border-red-800/60 text-red-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          PADDOCK OFICIAL
        </div>
        <h1 className="text-3xl md:text-5xl font-black italic tracking-tight text-white mb-3">
          ESCUDERÍAS Y <span className="text-red-600">PILOTOS</span>
        </h1>
        <p className="text-zinc-400 text-base max-w-2xl leading-relaxed">
          Conoce los equipos que forman parte de la máxima categoría, sus duplas de pilotos y la potencia técnica detrás de cada monoplaza.
        </p>
      </div>

      {/* Grid de Escuderías */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamsData.map((team) => (
          <div 
            key={team.id}
            className={`bg-zinc-950 border ${team.color} rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] shadow-xl`}
          >
            <div>
              {/* Encabezado de la Tarjeta */}
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs px-2.5 py-1 rounded-md font-semibold uppercase tracking-wider ${team.badgeColor}`}>
                  {team.powerUnit}
                </span>
                <span className="text-zinc-500 font-mono text-xs">
                  {team.championships} Títulos M.
                </span>
              </div>

              <h3 className="text-white font-bold text-xl mb-1">
                {team.name}
              </h3>
              <p className="text-zinc-400 text-xs mb-6 flex items-center gap-1">
                📍 {team.base}
              </p>

              {/* Alineación de Pilotos */}
              <div className="border-t border-zinc-800 pt-4 mb-4">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold block mb-2">
                  Alineación de Pilotos
                </span>
                <div className="flex flex-col gap-1.5">
                  {team.drivers.map((driver, idx) => (
                    <div key={idx} className="bg-zinc-900 border border-zinc-800/80 px-3 py-2 rounded-lg text-sm text-zinc-200 font-medium flex items-center justify-between">
                      <span>{driver}</span>
                      <span className="text-xs text-zinc-500 font-mono">0{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pie de tarjeta */}
            <div className="border-t border-zinc-900 pt-4 mt-2 flex justify-between items-center text-xs text-zinc-500">
              <span>Estado: <strong className="text-emerald-400">Homologado</strong></span>
              <span className="text-red-500 font-semibold hover:underline cursor-pointer">Ver telemetría →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}