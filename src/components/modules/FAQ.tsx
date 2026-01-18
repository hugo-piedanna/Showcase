import { Card } from "@/components/ui/card";
import { FAQ, StaticTexts } from "@/lib/sanity.data";

interface FAQProps {
    faqs?: FAQ[];
    staticTexts?: StaticTexts | null;
}

export default function FAQComponent({ faqs, staticTexts }: FAQProps) {
    if (!faqs || faqs.length === 0) {
        return null;
    }

    return (
        <section
            id="faq"
            className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-3xl sm:text-4xl font-bold text-center mb-4"
                    dangerouslySetInnerHTML={{ __html: staticTexts?.faqTitle || "" }}
                />
                <p className="text-center text-gray-400 mb-12 text-base sm:text-lg">{staticTexts?.faqDescription}</p>

                <div className="flex flex-col gap-4 sm:gap-6">
                    {faqs.map((faq) => (
                        <Card
                            className="p-4 sm:p-6"
                            key={faq._id}>
                            <h3 className="font-bold mb-2 text-base sm:text-lg">{faq.question}</h3>
                            <p className="text-gray-400 text-sm sm:text-base">{faq.answer}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
