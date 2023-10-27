import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    minify: true,
    lib: {
      // Também poderia ser um diretório ou
      // arranjo de vários pontos de entrada
      entry: resolve(__dirname, "src/main.tsx"),
      name: "DS",
      fileName: "my-ds",
      formats: ["es"],
    },
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      external: ["react", "antd", "react-dom", "jhon-test-utils"],
    },
  },
});
