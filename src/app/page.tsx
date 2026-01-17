"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Contact from "@/components/modules/Contact";
import FAQ from "@/components/modules/FAQ";
import Hero from "@/components/modules/Hero";
import Offers from "@/components/modules/Offer";
import Problemes from "@/components/modules/Problemes";
import Process from "@/components/modules/Process";
import Projects from "@/components/modules/Projects";
import Solutions from "@/components/modules/Solutions";
import Trust from "@/components/modules/Trust";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            const scrollProgress = document.getElementById("scrollProgress");
            if (scrollProgress) {
                scrollProgress.style.width = scrolled + "%";
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full overflow-hidden">
            <header>
                <div className="scroll-indicator">
                    <div
                        className="scroll-progress"
                        id="scrollProgress"></div>
                </div>
                <Header />
            </header>
            <main className="flex flex-col">
                <Hero />
                <Trust />
                <Problemes />
                <Solutions />
                <Offers />
                <Projects />
                <Process />
                <FAQ />
                <Contact />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
