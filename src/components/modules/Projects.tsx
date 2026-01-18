import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Project, StaticTexts } from "@/lib/sanity.data";

interface ProjectsProps {
    projects?: Project[];
    staticTexts?: StaticTexts | null;
}

export default function Projects({ projects, staticTexts }: ProjectsProps) {
    if (!projects || projects.length === 0) {
        return null;
    }

    return (
        <section
            id="realisations"
            className="py-20 bg-linear-to-b from-violet-500/5 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-3xl sm:text-4xl font-bold text-center mb-4"
                    dangerouslySetInnerHTML={{ __html: staticTexts?.projectsTitle || "" }}
                />
                <p
                    className="text-center text-gray-400 mb-12 text-base sm:text-lg"
                    dangerouslySetInnerHTML={{ __html: staticTexts?.projectsDescription || "" }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project) => (
                        <Card
                            className="overflow-hidden p-0 gap-0 hover:translate-y-1 transition-transform duration-300"
                            key={project._id}>
                            {project.imageUrl && (
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className="rounded-xl h-55 w-full"
                                    style={{ objectFit: "cover" }}
                                />
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                                {project.link === "#" || !project.link ? (
                                    <p className="text-muted-foreground italic mb-4 text-sm">
                                        {staticTexts?.projectsUnavailableText}
                                    </p>
                                ) : (
                                    <a
                                        href={project.link}
                                        className="text-violet-400 hover:text-violet-300 text-sm font-semibold"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        {staticTexts?.projectsViewText}
                                    </a>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
