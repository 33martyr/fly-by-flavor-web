export const Visit = () => {
  return (
    <section id="visit" className="py-32 bg-secondary/40">
      <div className="container grid lg:grid-cols-2 gap-12 items-stretch">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.4em] text-accent">Visite-nos</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 mb-10 leading-[1.05]">
            Encontre-nos
            <br />
            <span className="italic text-gradient-ember">no coração</span> da cidade.
          </h2>

          <dl className="space-y-8">
            {[
              { k: "Morada", v: "Rua das Flores, 42 · 1200-194 Lisboa" },
              { k: "Horário", v: "Quarta a Domingo · 19h00 — 23h30" },
              { k: "Contacto", v: "+351 211 234 567 · ola@thebird.pt" },
            ].map((b) => (
              <div key={b.k} className="grid grid-cols-[140px_1fr] gap-6 border-t border-border pt-6">
                <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{b.k}</dt>
                <dd className="text-lg">{b.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal aspect-square lg:aspect-auto overflow-hidden border border-border">
          <iframe
            title="Mapa do The Bird"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-9.145%2C38.708%2C-9.135%2C38.715&layer=mapnik"
            className="w-full h-full grayscale contrast-110"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
