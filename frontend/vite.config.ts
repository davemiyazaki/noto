import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid"
import { vanillaExtractPlugin} from '@vanilla-extract/vite-plugin'

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    solidPlugin(),
  ],
  server: {
    port:3000,
    hmr:true
  }
});
