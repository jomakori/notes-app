import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Base path for deployment
  base: "/example-meeting-notes/",
  plugins: [react()],
  server: {
    port: 8181 // Set the frontend server port to 8181
  },
  define: {
    "process.env": process.env,
  },
});
