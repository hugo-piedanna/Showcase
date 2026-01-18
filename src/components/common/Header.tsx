"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { NavItem, StaticTexts } from "@/lib/sanity.data";

interface HeaderProps {
    navItems?: NavItem[];
    staticTexts?: StaticTexts | null;
}

export default function Header({ navItems, staticTexts }: HeaderProps) {
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
                        <span className="inline-flex sm:hidden">{staticTexts?.headerLogoTextMobile}</span>
                        <span className="hidden sm:inline-flex">{staticTexts?.headerLogoText}</span>
                    </h2>
                </Link>

                <div className="flex items-center gap-4 xl:gap-8">
                    <ul className="hidden xl:flex items-center gap-8">
                        {navItems &&
                            navItems.map((item) => (
                                <li
                                    key={item._id}
                                    className="cursor-pointer hover:text-primary transition-colors duration-300"
                                    onClick={() => scrollToSection(item.sectionId)}>
                                    {item.label}
                                </li>
                            ))}
                    </ul>
                </div>

                <Button
                    className="duration-300 transition-colors"
                    size={"lg"}
                    onClick={() => scrollToSection("contact")}>
                    {staticTexts?.headerCtaButton}
                </Button>
            </nav>
        </section>
    );
}
