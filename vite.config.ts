import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    base: env.VITE_UI_BASE_PATH || "./",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
      },
    },
    build: {
      outDir: "./build",
    },
  };
});
