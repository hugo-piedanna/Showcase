import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ThanksContent from "@/components/modules/Thanks";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Merci !",
    robots: {
        index: false,
        follow: false,
    },
};

export default function Thanks() {
    return (
        <div className="w-full overflow-hidden">
            <header>
                <Header />
            </header>
            <main className="flex flex-col lg:gap-10 h-[80vh] w-full">
                <ThanksContent />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
