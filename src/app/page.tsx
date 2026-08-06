import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Faq } from "@/components/faq";
import { Formations } from "@/components/formations";
import { Hero } from "@/components/hero";
import { HomeJsonLd } from "@/components/json-ld";
import { ParcoursPro } from "@/components/parcours-pro";
import { Services } from "@/components/services";
import { Transmission } from "@/components/transmission";

export default function Home() {
  return (
    <main id="contenu" className="min-h-screen text-foreground">
      <HomeJsonLd />
      <Hero />
      <About />
      <Services />
      <Formations />
      <ParcoursPro />
      <Experience />
      <Transmission />
      <Faq />
      <Contact />
    </main>
  );
}
