import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import { vanillaExtractPlugin} from '@vanilla-extract/vite-plugin'
import { solidStart } from "@solidjs/start/config";

export default defineConfig({
  plugins: [solidStart(),
    nitro(),
    vanillaExtractPlugin()
  ]
});
