import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true, // Enables PWA in development mode
      },
      strategies: "injectManifest",
      srcDir: "src/custom-sw",
      filename: "my-sw.ts",
      manifest: {
        name: "Student Affairs",
        short_name: "SAS",
        description:
          "A hub for keeping with the latest information in students activities", icons: [
            {
              src: "/icons/icon-48x48.webp",
              sizes: "48x48",
              type: "image/webp",
            },
            {
              src: "/icons/icon-72x72.webp",
              sizes: "72x72",
              type: "image/webp",
            },
            {
              src: "/icons/icon-96x96.webp",
              sizes: "96x96",
              type: "image/webp",
            },
            {
              src: "/icons/icon-128x128.webp",
              sizes: "128x128",
              type: "image/webp",
            },
            {
              src: "/icons/icon-144x144.webp",
              sizes: "144x144",
              type: "image/webp",
            },
            {
              src: "/icons/icon-192x192.webp",
              sizes: "192x192",
              type: "image/webp",
            },
            {
              src: "/icons/icon-512x512.webp",
              sizes: "512x512",
              type: "image/webp",
            },
          ],
        screenshots: [
          {
            src: "/screenshot.webp", // Path to your wide screenshot image
            sizes: "1280x720", // Width x Height of the screenshot
            type: "image/webp",
            form_factor: "wide", // Specify the form factor
          },
        ],
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
      },
    }),
  ],
  build: {
    outDir: "dist",
  },
  server: {
    proxy: {
      "/backend": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },

});
