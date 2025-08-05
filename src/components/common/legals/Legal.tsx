import React from "react";

export type Section = {
    title: string;
    content: {
        type: "paragraph" | "list";
        text: string;
    }[];
};

interface LegalsProps {
    title: string;
    sections: Section[];
}
export function Legals({ title, sections }: LegalsProps) {
    return (
        <section className="container px-6 w-full mx-auto">
            <h1 className="text-3xl font-bold mb-8">{title}</h1>
            {sections.map((section, index) => (
                <div
                    key={index}
                    className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    {section.content.map((content, contentIndex) =>
                        content.type === "list" ? (
                            <ul
                                key={contentIndex}
                                className="list-disc pl-6 mb-2 text-muted-foreground">
                                <li>
                                    {content.text.includes("{a}") && (
                                        <React.Fragment>
                                            {content.text.split("{a}")[0]}
                                            <a
                                                className="hover:underline underline-offset-2 text-muted-foreground"
                                                href={process.env.NEXT_PUBLIC_APP_URL}>
                                                {process.env.NEXT_PUBLIC_APP_URL}
                                            </a>
                                            {content.text.split("{a}")[1]}
                                        </React.Fragment>
                                    )}
                                    {content.text.includes("{e}") && (
                                        <React.Fragment>
                                            {content.text.split("{e}")[0]}
                                            <a
                                                className="hover:underline underline-offset-2 text-muted-foreground"
                                                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                                                {process.env.NEXT_PUBLIC_EMAIL}
                                            </a>
                                            {content.text.split("{e}")[1]}
                                        </React.Fragment>
                                    )}
                                    {!content.text.includes("{e}") && !content.text.includes("{a}") && content.text}
                                </li>
                            </ul>
                        ) : (
                            <p
                                key={contentIndex}
                                className="mb-2 text-muted-foreground">
                                {content.text.includes("{a}") && (
                                    <React.Fragment>
                                        {content.text.split("{a}")[0]}
                                        <a
                                            className="hover:underline underline-offset-2 text-muted-foreground"
                                            href={process.env.NEXT_PUBLIC_APP_URL}>
                                            {process.env.NEXT_PUBLIC_APP_URL}
                                        </a>
                                        {content.text.split("{a}")[1]}
                                    </React.Fragment>
                                )}
                                {content.text.includes("{e}") && (
                                    <React.Fragment>
                                        {content.text.split("{e}")[0]}
                                        <a
                                            className="hover:underline underline-offset-2 text-muted-foreground"
                                            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                                            {process.env.NEXT_PUBLIC_EMAIL}
                                        </a>
                                        {content.text.split("{e}")[1]}
                                    </React.Fragment>
                                )}
                                {!content.text.includes("{e}") && !content.text.includes("{a}") && content.text}
                            </p>
                        ),
                    )}
                </div>
            ))}
        </section>
    );
}
