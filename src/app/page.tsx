import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ScrollProgress from "@/components/common/ScrollProgress";
import Contact from "@/components/modules/Contact";
import FAQComponent from "@/components/modules/FAQ";
import Hero from "@/components/modules/Hero";
import Offers from "@/components/modules/Offer";
import Problemes from "@/components/modules/Problemes";
import Process from "@/components/modules/Process";
import Projects from "@/components/modules/Projects";
import Solutions from "@/components/modules/Solutions";
import Trust from "@/components/modules/Trust";
import {
    getFAQs,
    getNavItems,
    getProjects,
    getOffers,
    getTrustItems,
    getProblemItems,
    getSolutionItems,
    getProcessSteps,
    getStaticTexts,
} from "@/lib/sanity.data";

export default async function Home() {
    const [
        faqs,
        navItems,
        projects,
        offers,
        trustItems,
        problemItems,
        solutionItems,
        processSteps,
        staticTexts,
    ] = await Promise.all([
        getFAQs(),
        getNavItems(),
        getProjects(),
        getOffers(),
        getTrustItems(),
        getProblemItems(),
        getSolutionItems(),
        getProcessSteps(),
        getStaticTexts(),
    ]);

    return (
        <div className="w-full overflow-hidden">
            <header>
                <ScrollProgress />
                <Header
                    navItems={navItems}
                    staticTexts={staticTexts}
                />
            </header>
            <main className="flex flex-col">
                <Hero staticTexts={staticTexts} />
                <Trust
                    items={trustItems}
                    staticTexts={staticTexts}
                />
                <Problemes
                    items={problemItems}
                    staticTexts={staticTexts}
                />
                <Solutions
                    items={solutionItems}
                    staticTexts={staticTexts}
                />
                <Offers
                    offers={offers}
                    staticTexts={staticTexts}
                />
                <Projects
                    projects={projects}
                    staticTexts={staticTexts}
                />
                <Process
                    steps={processSteps}
                    staticTexts={staticTexts}
                />
                <FAQComponent
                    faqs={faqs}
                    staticTexts={staticTexts}
                />
                <Contact
                    staticTexts={staticTexts}
                />
            </main>
            <footer>
                <Footer staticTexts={staticTexts} />
            </footer>
        </div>
    );
}
