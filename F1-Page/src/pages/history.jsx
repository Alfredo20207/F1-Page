export default function History() {
  const milestones = [
    {
      year: "1950",
      title: "El Nacimiento de la Leyenda",
      description: "Se disputa la primera carrera oficial del Campeonato Mundial de Fórmula 1 en el circuito de Silverstone (Gran Bretaña). El italiano Giuseppe Farina (Alfa Romeo) se corona como el primer campeón mundial de la historia.",
      tag: "Orígenes"
    },
    {
      year: "1957",
      title: "El Maestro Fangio y la Consagración",
      description: "Juan Manuel Fangio logra su quinto campeonato mundial con Maserati, un récord que se mantuvo imbatible durante casi medio siglo, consolidándose como el piloto más dominante de la era clásica.",
      tag: "Leyendas"
    },
    {
      year: "1980s",
      title: "La Era Turbo y la Rivalidad Senna vs. Prost",
      description: "Los motores turbocompresores superan los 1,000 caballos de fuerza. La feroz rivalidad entre Ayrton Senna y Alain Prost en McLaren redefine la intensidad deportiva, técnica y psicológica de la categoría.",
      tag: "Época Dorada"
    },
    {
      year: "2000 - 2004",
      title: "La Dinastía Roja de Schumacher",
      description: "Michael Schumacher y la Scuderia Ferrari rompen todos los récords históricos al ganar 5 campeonatos de pilotos y constructores de forma consecutiva, estableciendo un dominio sin precedentes en el automovilismo.",
      tag: "Dominio"
    },
    {
      year: "2014 - Presente",
      title: "La Era Híbrida y los Récords Modernos",
      description: "Introducción de unidades de potencia híbridas altamente eficientes y sostenibles. Lewis Hamilton empata e incluso supera el récord de títulos mundiales, dando paso a una nueva generación de jóvenes talentos que dominan la parrilla actual.",
      tag: "Era Moderna"
    }
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Header de la sección */}
      <div className="border-b border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-2 bg-red-950/60 border border-red-800/60 text-red-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          ARCHIVOS OFICIALES DE LA F1
        </div>
        <h1 className="text-3xl md:text-5xl font-black italic tracking-tight text-white mb-3">
          HISTORIA Y <span className="text-red-600">EVOLUCIÓN</span>
        </h1>
        <p className="text-zinc-400 text-base max-w-2xl leading-relaxed">
          Un recorrido cronológico por los momentos más icónicos, las rivalidades históricas y la evolución tecnológica que forjaron la categoría reina del automovilismo mundial.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-8 pl-6 md:pl-10 flex flex-col gap-12">
        {milestones.map((item, index) => (
          <div key={index} className="relative group">
            {/* Punto indicador en la línea temporal */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-red-600 group-hover:bg-red-600 group-hover:scale-125 transition-all duration-300" />

            {/* Tarjeta del evento */}
            <div className="bg-zinc-950 border border-zinc-800 group-hover:border-red-600/50 p-6 rounded-xl transition-all duration-300 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-red-500 font-mono font-bold text-lg tracking-wider">
                  {item.year}
                </span>
                <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-semibold px-2.5 py-1 rounded-md">
                  {item.tag}
                </span>
              </div>
              
              <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-500 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}