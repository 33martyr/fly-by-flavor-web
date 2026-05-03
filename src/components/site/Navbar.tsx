import { useEffect, useState } from "react";
import birdMark from "@/assets/bird-mark.png";

const links = [
  { href: "#about", label: "Sobre" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Galeria" },
  { href: "#reserve", label: "Reservas" },
  { href: "#visit", label: "Visite" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={birdMark} alt="" width={36} height={36} className="h-9 w-9" />
          <span className="font-display text-xl tracking-wider">
            The <span className="italic text-accent">Bird</span>
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="underline-grow hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#reserve"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.2em] bg-gradient-ember text-primary-foreground hover:shadow-glow transition-all duration-500"
        >
          Reservar
        </a>
      </nav>
    </header>
  );
};
