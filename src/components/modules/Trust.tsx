"use client";

import { useEffect, useState } from "react";

export default function Trust() {
    const [experiences, setExperiences] = useState<number>(0);
    const [projects, setProjects] = useState<number>(0);
    const [clients, setClients] = useState<number>(0);

    function updateNumber(end: number, setter: React.Dispatch<React.SetStateAction<number>>) {
        const interval = setInterval(() => {
            setter((prev) => {
                if (prev === end) {
                    clearInterval(interval);
                    return prev;
                }
                return Math.min(prev + 1, end);
            });
        }, 100);
    }

    useEffect(() => {
        updateNumber(3, setExperiences);
        updateNumber(10, setProjects);
        updateNumber(15, setClients);
    }, []);

    return (
        <section className="container px-6 w-full mx-auto mt-20 gap-5 flex flex-col">
            <div className="grid lg:grid-cols-3 divide-y-2 lg:divide-x-2 lg:divide-y-0 lg:w-full w-1/2 mx-auto divide-dashed divide-accent">
                <div className="flex flex-col items-center justify-center gap-4 p-3">
                    <span className="text-4xl font-bold">Projets</span>
                    <p className="text-3xl">+{projects}</p>
                    <span className="text-muted-foreground text-sm">en freelance</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-3">
                    <span className="text-4xl font-bold">Expériences</span>
                    <p className="text-3xl">+{experiences} ans</p>
                    <span className="text-muted-foreground text-sm">en développement web en entreprise</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-3">
                    <span className="text-4xl font-bold">Utilisateurs</span>
                    <p className="text-3xl">+{clients}</p>
                    <span className="text-muted-foreground text-sm">en freelance</span>
                </div>
            </div>
        </section>
    );
}
