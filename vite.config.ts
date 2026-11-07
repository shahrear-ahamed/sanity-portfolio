import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    astro: true,
    printWidth: 100,
    tabWidth: 2,
    useTabs: false,
    ignorePatterns: ["design/**"],
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
});
