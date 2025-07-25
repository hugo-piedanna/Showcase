"use client";

import { Button } from "@/components/ui/button";
import { IconMenu2 } from "@tabler/icons-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

interface items {
    libelle: string;
    id: string;
}

const itemsButtons: items[] = [
    { libelle: "Accueil", id: "home" },
    { libelle: "Mes offres", id: "offers" },
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
        }
    }

    return (
        <section className="border-b py-4 bg-background fixed top-0 left-0 w-full z-50">
            <nav className="container px-6 mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold inline-block gradient">
                    {"Hugo "}
                    <span className="inline-flex sm:hidden">P.</span>
                    <span className="hidden sm:inline-flex">Piedanna</span>
                </h1>
                <div className="flex items-center gap-4 xl:gap-8">
                    <ul className="hidden xl:flex items-center gap-8">
                        {itemsButtons.map((item, index) => (
                            <li
                                key={index}
                                className="text-muted-foreground cursor-pointer hover:text-primary transition-colors duration-300"
                                onClick={() => scrollToSection(item.id)}>
                                {item.libelle}
                            </li>
                        ))}
                    </ul>
                    <Sheet
                        open={isSheetOpen}
                        onOpenChange={setIsSheetOpen}>
                        <SheetTrigger
                            asChild
                            className="xl:hidden">
                            <Button
                                variant="outline"
                                size="icon">
                                <IconMenu2 size={18} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>{"Hugo Piedanna"}</SheetTitle>
                                <SheetDescription>{"Développeur web full-stack"}</SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col gap-2 mt-4">
                                {itemsButtons.map((item, index) => (
                                    <Button
                                        key={index}
                                        variant="ghost"
                                        className="justify-start"
                                        onClick={() => scrollToSection(item.id)}>
                                        {item.libelle}
                                    </Button>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </section>
    );
}
