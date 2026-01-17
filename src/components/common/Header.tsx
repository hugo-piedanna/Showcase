"use client";

import { Button } from "@/components/ui/button";
import { IconMenu2 } from "@tabler/icons-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import Link from "next/link";

interface items {
    libelle: string;
    id: string;
}

const itemsButtons: items[] = [
    { libelle: "Services", id: "services" },
    { libelle: "Réalisations", id: "realisations" },
    { libelle: "FAQ", id: "faq" },
    { libelle: "Contact", id: "contact" },
];

export default function Header() {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    function scrollToSection(section: string) {
        const el = document.getElementById(section);
        if (el) {
            if (isSheetOpen) setIsSheetOpen(false);
            const topOffset = el.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: topOffset - 100,
                behavior: "smooth",
            });
        } else {
            // Redirect to the home page if the section is not found
            window.location.href = `/#${section}`;
        }
    }

    return (
        <section className="border-b py-4 bg-card fixed top-0 left-0 w-full z-50">
            <nav className="container px-6 mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <h2 className="text-3xl font-bold inline-block gradient">
                        {"Hugo "}
                        <span className="inline-flex sm:hidden">P.</span>
                        <span className="hidden sm:inline-flex">Piedanna</span>
                    </h2>
                </Link>

                <div className="flex items-center gap-4 xl:gap-8">
                    <ul className="hidden xl:flex items-center gap-8">
                        {itemsButtons.map((item, index) => (
                            <li
                                key={index}
                                className="cursor-pointer hover:text-primary transition-colors duration-300"
                                onClick={() => scrollToSection(item.id)}>
                                {item.libelle}
                            </li>
                        ))}
                    </ul>
                </div>

                <Button
                    className="duration-300 transition-colors"
                    size={"lg"}
                    onClick={() => scrollToSection("contact")}>
                    Démarrer mon projet
                </Button>
            </nav>
        </section>
    );
}
