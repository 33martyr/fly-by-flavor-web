import interior from "@/assets/interior.jpg";

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="reveal relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={interior}
              alt="Interior do restaurante The Bird com luz quente e ambiente íntimo"
              loading="lazy"
              width={1080}
              height={1350}
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden md:block bg-background border border-border p-8 max-w-xs shadow-soft">
            <p className="font-display italic text-2xl leading-snug">
              "O frango como nunca o provou."
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-accent">
              Time Out · 2024
            </p>
          </div>
        </div>

        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.4em] text-accent">A casa</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 mb-8 leading-[1.05]">
            Uma ode ao
            <br />
            <span className="italic text-gradient-ember">fogo & paciência.</span>
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Nascemos da convicção que o frango — humilde, universal — merece
              o palco principal. No The Bird, ele é tratado como ingrediente
              nobre: marinado durante 24 horas, assado em fogo de carvalho,
              servido com molhos que mudam ao ritmo das estações.
            </p>
            <p>
              O espaço foi pensado como um abraço: madeira escura, latão polido,
              luz que lembra uma vela. Um lugar onde se vem por uma dose e se
              fica para a sobremesa.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-8">
            {[
              { n: "24h", l: "marinada" },
              { n: "100%", l: "produção local" },
              { n: "5★", l: "TripAdvisor" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-gradient-ember">{s.n}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
