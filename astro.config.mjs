// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com", // TODO: 実際のドメインに変更
	integrations: [sitemap()],
});
