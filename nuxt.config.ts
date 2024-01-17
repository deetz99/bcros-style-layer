// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: [join(currentDir, "./assets/css/main.css")],
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
  ],
  ui: {
    icons: ["mdi"],
  },
  alias: {
    BCGovFonts: join(currentDir, "./public/fonts/BCSans"),
    BCGovLogoSmEn: join(
      currentDir,
      "./public/BCGovLogo/gov_bc_logo_vert_en.png"
    ),
    BCGovLogoSmFr: join(
      currentDir,
      "./public/BCGovLogo/gov_bc_logo_vert_fr.png"
    ),
    BCGovLogoLgEn: join(
      currentDir,
      "./public/BCGovLogo/gov_bc_logo_horiz_en.png"
    ),
    BCGovLogoLgFr: join(
      currentDir,
      "./public/BCGovLogo/gov_bc_logo_horiz_fr.png"
    ),
  },
});
