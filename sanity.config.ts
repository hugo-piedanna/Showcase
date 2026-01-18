import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { frFRLocale } from "@sanity/locale-fr-fr";

import { schemaTypes } from "./src/schemas";

export default defineConfig({
    name: "default",
    title: "Showcase CMS",
    projectId: "h29ua7in",
    dataset: "production",
    basePath: "/studio",
    plugins: [structureTool(), frFRLocale()],
    schema: {
        types: schemaTypes,
    },
});
