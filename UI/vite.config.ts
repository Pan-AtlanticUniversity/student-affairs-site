import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  // const backendHost = process.env.VITE_BACKEND_HOST || "https://student-affairs-site.onrender.com";
  return {
    // server: {
    //   proxy: {
    //     "/api/v1/**": {
    //       target: backendHost,
    //       changeOrigin: true,
    //       secure: false,
    //     },
    //   },
    // },

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
            "A hub for keeping with the latest information in students activities",
          icons: [
            {
              src: "/icons/icon-48x48.png",
              sizes: "48x48",
              type: "image/png",
            },
            {
              src: "/icons/icon-72x72.png",
              sizes: "72x72",
              type: "image/png",
            },
            {
              src: "/icons/icon-96x96.png",
              sizes: "96x96",
              type: "image/png",
            },
            {
              src: "/icons/icon-128x128.png",
              sizes: "128x128",
              type: "image/png",
            },
            {
              src: "/icons/icon-144x144.png",
              sizes: "144x144",
              type: "image/png",
            },
            {
              src: "/icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
          screenshots: [
            {
              src: "/screenshot.png", // Path to your wide screenshot image
              sizes: "1280x720", // Width x Height of the screenshot
              type: "image/png",
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
  };
});
