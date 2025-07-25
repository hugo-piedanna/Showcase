import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Contact from "@/components/modules/Contact";
import FAQ from "@/components/modules/FAQ";
import Hero from "@/components/modules/Hero";
import Offers from "@/components/modules/Offer";
import Trust from "@/components/modules/Trust";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
    return (
        <div className="w-full overflow-hidden">
            <TracingBeam>
                <header>
                    <Header />
                </header>
                <main className="flex flex-col lg:gap-10">
                    <Hero />
                    <Trust />
                    <Offers />
                    <FAQ />
                    <Contact />
                </main>
                <footer>
                    <Footer />
                </footer>
            </TracingBeam>
        </div>
    );
}
