import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // "/api": "http://localhost:3000",
      "/api": "http://15.165.77.161:3000",
    },
  },
});
