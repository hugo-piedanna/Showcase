import { sanityClient } from "./sanity";
import {
    faqQuery,
    navItemsQuery,
    projectsQuery,
    offersQuery,
    trustItemsQuery,
    problemItemsQuery,
    solutionItemsQuery,
    processStepsQuery,
    staticTextsQuery,
} from "./sanity.queries";

export interface FAQ {
    _id: string;
    question: string;
    answer: string;
    order?: number;
}

export interface NavItem {
    _id: string;
    label: string;
    sectionId: string;
    order?: number;
}

export interface Project {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    order?: number;
}

export interface Offer {
    _id: string;
    title: string;
    description: string;
    price: number;
    details: string[];
    ideals: string[];
    cta: string;
    order?: number;
}

export interface TrustItem {
    _id: string;
    value: number;
    label: string;
    subtext: string;
    order?: number;
}

export interface ProblemItem {
    _id: string;
    title: string;
    description: string;
    order?: number;
}

export interface SolutionItem {
    _id: string;
    title: string;
    icon: string;
    description: string;
    order?: number;
}

export interface ProcessStep {
    _id: string;
    title: string;
    description: string;
    order?: number;
}

export interface StaticTexts {
    // Hero
    heroTitle?: string;
    heroSubtitle?: string;
    heroDescription?: string;
    heroCtaPrimary?: string;
    heroCtaSecondary?: string;
    heroAvailabilityText?: string;
    
    // Trust
    trustProjectsLabel?: string;
    trustProjectsSubtext?: string;
    trustExperiencesLabel?: string;
    trustExperiencesSubtext?: string;
    trustClientsLabel?: string;
    trustClientsSubtext?: string;
    
    // Problèmes
    problemesTitle?: string;
    problemesDescription?: string;
    
    // Solutions
    solutionsTitle?: string;
    solutionsDescription?: string;
    solutionsCta?: string;
    
    // Offers
    offersTitle?: string;
    offersDescription?: string;
    offersTtcLabel?: string;
    offersIdealForLabel?: string;
    offersOnQuoteLabel?: string;
    
    // Projects
    projectsTitle?: string;
    projectsDescription?: string;
    projectsUnavailableText?: string;
    projectsViewText?: string;
    
    // Process
    processTitle?: string;
    processDescription?: string;
    processCta?: string;
    
    // FAQ
    faqTitle?: string;
    faqDescription?: string;
    
    // Contact
    contactTitle?: string;
    contactDescription?: string;
    contactLinkedinTitle?: string;
    contactLinkedLink?: string;
    contactLinkedinSubtext?: string;
    contactLinkedinCta?: string;
    contactEmailTitle?: string;
    contactEmail?: string;
    contactEmailSubtext?: string;
    contactPhoneTitle?: string;
    contactPhone?: string;
    contactPhoneSubtext?: string;
    contactPhoneButtonText?: string;
    contactLocationDescription?: string;
    contactAvailabilityLabel?: string;
    contactLocation?: string;
    availabilityDays?: string;
    availabilityHours?: string;
    contactBadge1?: string;
    contactBadge2?: string;
    contactBadge3?: string;
    
    // Header
    headerLogoText?: string;
    headerLogoTextMobile?: string;
    headerCtaButton?: string;
    
    // Footer
    footerTitle?: string;
    footerDescription1?: string;
    footerDescription2?: string;
    footerLegalTitle?: string;
    footerCguLabel?: string;
    footerPrivacyLabel?: string;
    footerCgvLabel?: string;
    footerCopyright?: string;
}

export async function getTrustItems(): Promise<TrustItem[]> {
    try {
        return await sanityClient.fetch(trustItemsQuery);
    } catch (error) {
        console.error("Error fetching trust items:", error);
        return [];
    }
}

export async function getProblemItems(): Promise<ProblemItem[]> {
    try {
        return await sanityClient.fetch(problemItemsQuery);
    } catch (error) {
        console.error("Error fetching problem items:", error);
        return [];
    }
}

export async function getSolutionItems(): Promise<SolutionItem[]> {
    try {
        return await sanityClient.fetch(solutionItemsQuery);
    } catch (error) {
        console.error("Error fetching solution items:", error);
        return [];
    }
}

export async function getProcessSteps(): Promise<ProcessStep[]> {
    try {
        return await sanityClient.fetch(processStepsQuery);
    } catch (error) {
        console.error("Error fetching process steps:", error);
        return [];
    }
}

export async function getStaticTexts(): Promise<StaticTexts | null> {
    try {
        return await sanityClient.fetch(staticTextsQuery);
    } catch (error) {
        console.error("Error fetching static texts:", error);
        return null;
    }
}

export async function getFAQs(): Promise<FAQ[]> {
    try {
        return await sanityClient.fetch(faqQuery);
    } catch (error) {
        console.error("Error fetching FAQs:", error);
        return [];
    }
}

export async function getNavItems(): Promise<NavItem[]> {
    try {
        return await sanityClient.fetch(navItemsQuery);
    } catch (error) {
        console.error("Error fetching nav items:", error);
        return [];
    }
}

export async function getProjects(): Promise<Project[]> {
    try {
        return await sanityClient.fetch(projectsQuery);
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
}

export async function getOffers(): Promise<Offer[]> {
    try {
        return await sanityClient.fetch(offersQuery);
    } catch (error) {
        console.error("Error fetching offers:", error);
        return [];
    }
}
