import { IconGitFork, IconStar } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
    return (
        <section className="border-t w-full py-4 bg-background mt-20">
            <div className="container px-6 mx-auto flex justify-between flex-wrap gap-2">
                <div className="flex justify-between flex-col text-sm text-muted-foreground">
                    <p className="text-sm text-muted-foreground">
                        {`© ${new Date().getFullYear()} Hugo Piedanna. Tous droits réservés.`}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Link
                            href="https://github.com/hugo-piedanna/portfolio"
                            target="_blank"
                            className="flex items-center gap-2 underline-offset-4 hover:underline ">
                            <IconStar size={16} />
                            {"Star"}
                        </Link>
                        <Link
                            href="https://github.com/hugo-piedanna/portfolio/fork"
                            target="_blank"
                            className="flex items-center gap-2 underline-offset-4 hover:underline">
                            <IconGitFork size={16} />
                            {"Fork"}
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                    <Link
                        href="/CGU"
                        className="flex items-center gap-2 underline-offset-4 hover:underline ">
                        {"Conditions Générales d'utilisation"}
                    </Link>
                    <Link
                        href="/CGV"
                        className="flex items-center gap-2 underline-offset-4 hover:underline">
                        {"Conditions Générales de vente"}
                    </Link>
                    <Link
                        href="/privacyPolicy"
                        className="flex items-center gap-2 underline-offset-4 hover:underline ">
                        {"Politique de confidentialité"}
                    </Link>
                </div>
            </div>
        </section>
    );
}
