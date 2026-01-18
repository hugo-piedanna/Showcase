"use client";

import { useEffect, useState } from "react";
import { TrustItem, StaticTexts } from "@/lib/sanity.data";

interface TrustProps {
    items?: TrustItem[];
    staticTexts?: StaticTexts | null;
}

export default function Trust({ items }: TrustProps) {
    if (!items || items.length === 0) {
        return null;
    }

    const [animatedValues, setAnimatedValues] = useState<number[]>(items.map(() => 0));

    function updateNumber(index: number, end: number) {
        const interval = setInterval(() => {
            setAnimatedValues((prev) => {
                const newValues = [...prev];
                if (newValues[index] === end) {
                    clearInterval(interval);
                    return newValues;
                }
                newValues[index] = Math.min(newValues[index] + 1, end);
                return newValues;
            });
        }, 100);
    }

    useEffect(() => {
        items.forEach((item, index) => {
            updateNumber(index, item.value);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="bg-linear-to-b from-transparent to-violet-500/5">
            <section className="container px-6 w-full mx-auto p-20 gap-5 flex flex-col ">
                <div
                    className={`grid lg:grid-cols-${items.length} divide-y-2 lg:divide-x-2 lg:divide-y-0 lg:w-full divide-dashed divide-accent`}>
                    {items.map((item, index) => (
                        <div
                            className="flex flex-col items-center justify-center gap-4 p-3"
                            key={item._id}>
                            <span className="text-3xl lg:text-4xl font-bold">{item.label}</span>
                            <p className="text-2xl lg:text-3xl">
                                +{animatedValues[index]}
                                {item.label.toLowerCase().includes("expérience") ? " ans" : ""}
                            </p>
                            <span className="text-muted-foreground text-sm">{item.subtext}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
