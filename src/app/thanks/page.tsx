"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect, RedirectType, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type CheckoutData = {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    items: string[];
    price: number;
};

export default function Home() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const [data, setData] = useState<CheckoutData | null>(null);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

    useEffect(() => {
        if (sessionId) {
            fetch(`/api/checkout-session?session_id=${sessionId}`)
                .then(async (res) => {
                    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                    return res.json();
                })
                .then(setData)
                .catch(() => redirect("/", RedirectType.push));

            fetch(`/api/download?session_id=${sessionId}`)
                .then(async (res) => {
                    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                    return res.json();
                })
                .then((data) => setDownloadUrl(data.url))
                .catch(() => redirect("/", RedirectType.push));
        }
    }, [sessionId]);

    return (
        <div className="w-full overflow-hidden">
            <header>
                <Header />
            </header>
            <main className="flex flex-col lg:gap-10 h-[80vh] w-full">
                <div className="container w-full px-6 mx-auto relative">
                    <div className="w-[500px] lg:w-[700px] h-[350px] bg-gradient-to-tr z-10 from-violet-500 to-rose-500 rounded-[100%] absolute top-[50%] left-[25%] opacity-50 translate-x-[-50%] lg:translate-x-[-70%] translate-y-[-70%] blur-[100px]"></div>

                    {data ? (
                        <div className="flex flex-col h-full justify-center z-20 gap-8 pt-[15vh]">
                            <div className="flex flex-col lg:col-span-2 gap-5 h-full justify-center z-20">
                                <h1 className="text-3xl lg:text-5xl font-bold leading-[2.3rem] lg:leading-[3.5rem] hidden sm:inline-flex">
                                    Merci {data.firstName}, pour ta commande !
                                </h1>
                                <p className="text-md lg:text-lg">
                                    Ton paiement a bien été enregistré. <br />
                                    Tu vas recevoir ta facture à{" "}
                                    <a
                                        className="font-medium"
                                        href={`https://mail.google.com/mail/u/?authuser=${data.email}`}>
                                        {data.email}
                                    </a>
                                    , et tu peux déjà retrouver tes formations disponibles plus bas.{" "}
                                </p>
                                {data.price / 100 > 200 && (
                                    <div className="flex items-center flex-wrap gap-3 lg:gap-4">
                                        <p>
                                            Pour lancer la création de ton site, nous aurons besoin d’échanger
                                            rapidement.
                                            <br />
                                            Je t'invite à réserver un créneau dès maintenant afin que je recueille
                                            toutes les informations nécessaires et démarre ton projet.
                                        </p>
                                    </div>
                                )}
                                <div className="flex items-center flex-wrap gap-3 lg:gap-4">
                                    {downloadUrl ? (
                                        <Link
                                            href={downloadUrl}
                                            target="_blank">
                                            <Button
                                                className="duration-300 transition-colors"
                                                size="lg">
                                                <span className="text-center">{"Télécharger les formations"}</span>
                                            </Button>
                                        </Link>
                                    ) : (
                                        <Button
                                            className="duration-300 transition-colors"
                                            size="lg">
                                            <span className="text-center">{"Télécharger les formations"}</span>
                                        </Button>
                                    )}

                                    <Link
                                        href="https://calendly.com/hugo-piedanna/session"
                                        target="_blank">
                                        <Button
                                            className="duration-300 transition-colors"
                                            size="lg"
                                            variant="outline">
                                            <span className="text-center">{"Me contacter"}</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col h-full justify-center z-20 gap-8 pt-[15vh]">
                            <p>Chargement des données...</p>
                        </div>
                    )}
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
