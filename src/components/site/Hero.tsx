import heroDish from "@/assets/hero-dish.jpg";
import birdMark from "@/assets/bird-mark.png";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden grain">
      <img
        src={heroDish}
        alt="Frango assado dourado com ervas e laranja num prato de ardósia"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute inset-0 bg-gradient-fade" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_hsl(var(--ember)/0.25),_transparent_60%)]" />

      <div className="container relative z-10 pt-32 pb-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-accent" />
            <span className="text-xs uppercase tracking-[0.4em] text-accent">Est. 2019 · Lisboa</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.95] mb-8">
            Where flavor
            <br />
            <span className="italic text-gradient-ember">takes flight.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed">
            Cozinha de autor centrada no frango — fogo lento, especiarias raras
            e ingredientes do dia. Uma experiência íntima, sem cerimónia.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#reserve"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-ember text-primary-foreground text-sm uppercase tracking-[0.25em] hover:shadow-glow transition-all duration-500"
            >
              Reservar mesa
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-3 px-8 py-4 border border-foreground/30 text-foreground text-sm uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-all duration-500"
            >
              Ver menu
            </a>
          </div>
        </div>
      </div>

      <img
        src={birdMark}
        alt=""
        width={120}
        height={120}
        className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block w-32 opacity-60 animate-float-slow"
      />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/70">
        scroll ↓
      </div>
    </section>
  );
};
