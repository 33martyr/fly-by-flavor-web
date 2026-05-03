import birdMark from "@/assets/bird-mark.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <a href="#top" className="flex items-center gap-2 mb-4">
              <img src={birdMark} alt="" width={36} height={36} className="h-9 w-9" />
              <span className="font-display text-xl tracking-wider">
                The <span className="italic text-accent">Bird</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Cozinha de autor centrada no fogo, na paciência e no produto.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Navegar</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Sobre", "Menu", "Galeria", "Reservas", "Visite"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="underline-grow hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Siga-nos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="underline-grow hover:text-foreground">Instagram</a></li>
              <li><a href="#" className="underline-grow hover:text-foreground">Facebook</a></li>
              <li><a href="#" className="underline-grow hover:text-foreground">TripAdvisor</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row gap-4 justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} The Bird Restaurante. Todos os direitos reservados.</p>
          <p>Lisboa · Portugal</p>
        </div>
      </div>
    </footer>
  );
};
