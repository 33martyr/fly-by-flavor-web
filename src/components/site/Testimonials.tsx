const quotes = [
  {
    text: "O melhor frango que já comi em Lisboa. Ponto. A sala é um sonho de luz quente e o serviço impecável.",
    name: "Maria Tavares",
    role: "Crítica gastronómica",
  },
  {
    text: "Saímos de lá em silêncio — daquele silêncio bom, de quem acabou de viver algo memorável.",
    name: "João Pedro Almeida",
    role: "Cliente habitual",
  },
  {
    text: "Cada prato tem uma intenção clara. Sente-se o cuidado em tudo, do pão ao último gole de vinho.",
    name: "Ana Sofia Ribeiro",
    role: "Chef convidada",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-secondary/40">
      <div className="container">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-accent">Vozes</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4">
            Aquilo que <span className="italic text-gradient-ember">dizem</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className="reveal group bg-card border border-border p-10 hover-lift relative"
            >
              <div className="font-display text-7xl text-accent/30 leading-none mb-4">"</div>
              <blockquote className="font-display text-xl italic leading-relaxed mb-8">
                {q.text}
              </blockquote>
              <figcaption className="border-t border-border pt-5">
                <div className="text-sm">{q.name}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                  {q.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
