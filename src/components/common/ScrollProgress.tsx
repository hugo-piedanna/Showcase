"use client";

import { useEffect } from "react";

export default function ScrollProgress() {
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
        <div className="scroll-indicator">
            <div className="scroll-progress" id="scrollProgress"></div>
        </div>
    );
}
