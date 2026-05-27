import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        apply: resolve(root, "apply.html"),
        california: resolve(root, "california.html"),
        florida: resolve(root, "florida.html"),
        idaho: resolve(root, "idaho.html"),
        partners: resolve(root, "partners.html"),
        tools: resolve(root, "tools.html"),
      },
    },
  },
});
