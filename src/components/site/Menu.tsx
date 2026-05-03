import { useState } from "react";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";

type Item = { name: string; desc: string; price: string; signature?: boolean };

const data: Record<string, { img: string; items: Item[] }> = {
  Entradas: {
    img: dish2,
    items: [
      { name: "Paté de fígado de aves", desc: "Brioche tostado, cebola caramelizada, micro-ervas.", price: "9" },
      { name: "Asas vidradas no mel & gochujang", desc: "Sésamo torrado, cebolinho, lima.", price: "11", signature: true },
      { name: "Caldo de galinha velha", desc: "Massinha caseira, gengibre, coentros.", price: "8" },
    ],
  },
  Principais: {
    img: dish1,
    items: [
      { name: "The Bird — frango do carvalho", desc: "Meia ave marinada 24h, batata assada na gordura, molho da casa.", price: "24", signature: true },
      { name: "Korean fried chicken", desc: "Crocante duplo, glaze de soja & alho negro, picles.", price: "19" },
      { name: "Coxa desossada confitada", desc: "Puré de aipo, espinafres salteados, jus de tomilho.", price: "21" },
      { name: "Risotto de cogumelos & frango caipira", desc: "Carnaroli, parmesão 24 meses, óleo de trufa.", price: "22" },
    ],
  },
  Sobremesas: {
    img: dish3,
    items: [
      { name: "Fondant de chocolate negro 70%", desc: "Folha de ouro, gelado de baunilha bourbon.", price: "9", signature: true },
      { name: "Crème brûlée de açafrão", desc: "Tuile de amêndoa.", price: "8" },
      { name: "Tarte de maçã reineta", desc: "Caramelo salgado, chantilly de canela.", price: "8" },
    ],
  },
  Bebidas: {
    img: dish4,
    items: [
      { name: "Smoked Old Fashioned", desc: "Bourbon, bitters de laranja, fumo de macieira.", price: "12", signature: true },
      { name: "Negroni da casa", desc: "Gin artesanal, vermute rubi, Campari.", price: "10" },
      { name: "Carta de vinhos", desc: "Selecção de pequenos produtores nacionais.", price: "—" },
    ],
  },
};

const tabs = Object.keys(data);

export const Menu = () => {
  const [active, setActive] = useState(tabs[1]);
  const current = data[active];

  return (
    <section id="menu" className="py-32 bg-secondary/40 relative">
      <div className="container">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-accent">A carta</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 mb-6">
            Pratos que <span className="italic text-gradient-ember">contam</span> uma história
          </h2>
          <p className="text-muted-foreground">
            Uma selecção sazonal. O menu muda discretamente todas as semanas — pergunte ao chef.
          </p>
        </div>

        <div className="reveal flex flex-wrap justify-center gap-2 md:gap-8 mb-16 border-b border-border">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`relative pb-4 px-2 text-sm uppercase tracking-[0.25em] transition-colors duration-300 ${
                active === t ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
              {active === t && (
                <span className="absolute -bottom-px left-0 right-0 h-px bg-gradient-ember" />
              )}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 reveal">
            <div className="aspect-[4/5] overflow-hidden sticky top-24">
              <img
                key={active}
                src={current.img}
                alt={active}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover animate-[fade-in_0.6s_ease-out]"
              />
            </div>
          </div>

          <div className="lg:col-span-3 reveal">
            <ul className="divide-y divide-border">
              {current.items.map((it) => (
                <li key={it.name} className="py-7 group">
                  <div className="flex items-baseline gap-4">
                    <h3 className="font-display text-2xl flex items-center gap-3">
                      {it.name}
                      {it.signature && (
                        <span className="text-[10px] uppercase tracking-[0.3em] text-accent border border-accent/40 px-2 py-0.5">
                          assinatura
                        </span>
                      )}
                    </h3>
                    <span className="flex-1 border-b border-dashed border-border/60 translate-y-[-4px]" />
                    <span className="font-display text-2xl text-gradient-ember">
                      {it.price}{it.price !== "—" && <span className="text-sm">€</span>}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2 max-w-xl">{it.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
