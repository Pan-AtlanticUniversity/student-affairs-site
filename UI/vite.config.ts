import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";

// Use path.resolve to create the correct path for the certs
const certsDir = path.resolve(__dirname, "certs");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.join(certsDir, "localhost+2-key.pem")),
      cert: fs.readFileSync(path.join(certsDir, "localhost+2.pem")),
    },
  },
});
