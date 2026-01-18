export const faqQuery = `*[_type == "faq"] | order(order asc, _createdAt desc) {
    _id,
    question,
    answer,
    order
}`;

export const navItemsQuery = `*[_type == "navItem"] | order(order asc) {
    _id,
    label,
    sectionId,
    order
}`;

export const projectsQuery = `*[_type == "project"] | order(order asc, _createdAt desc) {
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    link,
    order
}`;

export const offersQuery = `*[_type == "offer"] | order(order asc, _createdAt desc) {
    _id,
    title,
    description,
    price,
    details,
    ideals,
    cta,
    order
}`;

export const trustItemsQuery = `*[_type == "trustItem"] | order(order asc) {
    _id,
    value,
    label,
    subtext,
    order
}`;

export const problemItemsQuery = `*[_type == "problemItem"] | order(order asc) {
    _id,
    title,
    description,
    order
}`;

export const solutionItemsQuery = `*[_type == "solutionItem"] | order(order asc) {
    _id,
    title,
    icon,
    description,
    order
}`;

export const processStepsQuery = `*[_type == "processStep"] | order(order asc) {
    _id,
    title,
    description,
    order
}`;

export const staticTextsQuery = `*[_type == "staticTexts"][0]`;
