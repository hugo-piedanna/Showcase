import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: "h29ua7in",
    dataset: "production",
    apiVersion: "2025-01-17",
    useCdn: true,
});
