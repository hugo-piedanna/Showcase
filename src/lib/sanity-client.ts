import { createClient } from "@sanity/client";
import type { SanityClient, ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "h29ua7in",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-17",
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN,
    // Configuration de timeout et retry
    timeout: 30000, // 30 secondes
    maxRetries: 3,
    retryDelay: (attempt: number) => attempt * 1000, // Backoff exponentiel
};

export const sanityClient: SanityClient = createClient(config);

/**
 * Fonction wrapper pour fetch avec retry logic et gestion d'erreurs améliorée
 */
export async function fetchWithRetry<T>(
    query: string,
    params?: Record<string, any>,
    options?: {
        tag?: string;
        cache?: RequestCache;
        next?: { revalidate?: number | false; tags?: string[] };
    }
): Promise<T> {
    try {
        const result = await sanityClient.fetch<T>(query, params, options);
        return result;
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error(`[Sanity Fetch Error] Query failed:`, {
            error: message,
            query: query.substring(0, 100), // Limiter la longueur du log
            params,
        });
        throw error;
    }
}

export default sanityClient;
