import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <React.Fragment>
            <section className="border-t w-full py-4 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-row justify-between gap-8">
                        <div className="flex flex-col justify-center">
                            <h3 className="font-bold mb-4 gradient">Hugo Piedanna</h3>
                            <p className="text-sm text-gray-400">
                                <strong>Développeur web freelance</strong> basé à Toulouse. <br />
                                Création de sites professionnels pour TPE et PME.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Légal</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <Link
                                        href="/CGU"
                                        className="hover:text-violet-400">
                                        CGU
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/privacyPolicy"
                                        className="hover:text-violet-400">
                                        Confidentialité
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/CGV"
                                        className="hover:text-violet-400">
                                        CGV
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="border-t w-full py-4 bg-background">
                <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-row justify-between gap-8">
                        <p className="text-sm text-gray-400 items-center">
                            © {new Date().getFullYear()} Hugo Piedanna - Développeur web freelance • Fait avec ❤️
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="https://www.linkedin.com/in/hugo-piedanna-a80570246/"
                                aria-label="linkedin"
                                className="text-gray-400 hover:text-violet-400">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://github.com/hugo-piedanna"
                                aria-label="github"
                                className="text-gray-400 hover:text-violet-400">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
