"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ThanksContent from "@/components/modules/Thanks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect, RedirectType, useSearchParams } from "next/navigation";
import { connection } from "next/server";
import { useEffect, useState } from "react";

type CheckoutData = {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    items: string[];
    price: number;
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
