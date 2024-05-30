import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // "/api": "http://localhost:3000",
      "/api": "http://172.31.6.51:3000",
    },
  },
});
