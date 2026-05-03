import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Menu } from "@/components/site/Menu";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Reserve } from "@/components/site/Reserve";
import { Visit } from "@/components/site/Visit";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "The Bird · Restaurante de autor em Lisboa";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "The Bird — cozinha de autor centrada no frango, fogo lento e ingredientes do dia. Reserve a sua mesa em Lisboa."
    );

    const ld = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "The Bird",
      servesCuisine: "Contemporary",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua das Flores, 42",
        addressLocality: "Lisboa",
        postalCode: "1200-194",
        addressCountry: "PT",
      },
      telephone: "+351 211 234 567",
      url: window.location.href,
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Reserve />
      <Visit />
      <Footer />
    </main>
  );
};

export default Index;
