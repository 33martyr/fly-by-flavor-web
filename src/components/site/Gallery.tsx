import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import interior from "@/assets/interior.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";

const items = [
  { src: g1, alt: "Chef a empratar", className: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { src: dish1, alt: "Frango crocante", className: "aspect-square" },
  { src: interior, alt: "Sala interior", className: "aspect-square" },
  { src: dish4, alt: "Cocktail de assinatura", className: "aspect-square" },
  { src: g2, alt: "Bartender em ação", className: "aspect-square" },
  { src: dish3, alt: "Sobremesa de chocolate", className: "md:col-span-2 aspect-[2/1]" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-32">
      <div className="container">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-accent">Atmosfera</span>
            <h2 className="font-display text-5xl md:text-6xl mt-4">
              Pequenos <span className="italic text-gradient-ember">momentos</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Detalhes da casa, mãos do chef e o brilho do fogo — fragmentos
            daquilo que se vive à mesa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 reveal">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden ${it.className}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-veil opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-4 left-4 right-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-xs uppercase tracking-[0.25em] text-foreground">
                {it.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
