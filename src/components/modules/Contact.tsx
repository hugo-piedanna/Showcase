"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Contact() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <section
            id="contact"
            className="py-20 bg-linear-to-b from-violet-500/5 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                    Prêt à Lancer Votre <span className="gradient">Projet</span> ?
                </h2>
                <p className="text-center text-gray-400 mb-12 text-base sm:text-lg">
                    Contactez-moi directement par le canal qui vous convient. Je vous réponds sous 24h.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <Card className="text-center gap-0">
                        <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-4 ">
                            <svg
                                className="w-8 h-8 text-violet-400"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2">LinkedIn</h3>
                        <p className="text-gray-400 text-sm mb-4">Pour un contact professionnel</p>
                        <Link
                            href="https://www.linkedin.com/in/hugo-piedanna-a80570246"
                            className="text-violet-400 font-semibold hover:underline"
                            target="_blank">
                            Me contacter sur LinkedIn →
                        </Link>
                    </Card>

                    <Card className="text-center gap-0">
                        <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8 text-violet-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Email</h3>
                        <p className="text-gray-400 text-sm mb-4">Pour une demande détaillée</p>
                        <Link
                            href="mailto:hugo@piedanna.dev"
                            className="text-violet-400 font-semibold hover:underline break-all">
                            hugo@piedanna.dev
                        </Link>
                    </Card>

                    <Card className="text-center gap-0">
                        <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8 text-violet-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Téléphone</h3>
                        <p className="text-gray-400 text-sm mb-4">Pour un échange rapide</p>
                        {visible === false ? (
                            <button
                                onClick={() => setVisible(true)}
                                id="phoneBtn"
                                className="text-violet-400 font-semibold hover:underline cursor-pointer">
                                Afficher le numéro →
                            </button>
                        ) : (
                            <Link
                                href="tel:+33617424794"
                                id="phoneNumber"
                                className="text-violet-400 font-semibold hover:underline">
                                06 17 42 47 94
                            </Link>
                        )}
                    </Card>
                </div>

                <Card className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                        <div className="flex-1">
                            <h3 className="text-lg sm:text-xl font-bold mb-2">📍 Basé à Toulouse, Haute-Garonne</h3>
                            <p className="text-sm sm:text-base text-gray-400">
                                J'interviens sur <strong>Toulouse</strong>, <strong>Haute-Garonne</strong> et toute la{" "}
                                <strong>France</strong> en télétravail. Disponibilité pour des rendez-vous en visio ou
                                en présentiel selon votre localisation.
                            </p>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-xs sm:text-sm text-gray-400 mb-2">Disponibilité</p>
                            <p className="text-sm sm:text-base font-semibold">Lundi - Samedi</p>
                            <p className="text-sm sm:text-base text-gray-400">9h30 - 18h00</p>
                            <div className="mt-2 inline-flex items-center gap-2 px-2 sm:px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                <span className="text-xs sm:text-sm text-green-400">
                                    Disponible pour nouveaux projets
                                </span>
                            </div>
                        </div>
                    </div>
                </Card>

                <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center justify-between">
                    <div className="flex flex-row items-center justify-center gap-2">
                        <svg
                            className="w-5 h-5 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className="text-sm font-semibold">Premier échange gratuit</p>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <svg
                            className="w-5 h-5 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className="text-sm font-semibold">Réponse sous 24h</p>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <svg
                            className="w-5 h-5 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className="text-sm font-semibold">Sans engagement</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
