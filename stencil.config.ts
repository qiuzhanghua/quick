import { Config } from "@stencil/core";
import tailwind, { tailwindHMR } from "stencil-tailwind-plugin";

export const config: Config = {
  namespace: "quick-components",
  plugins: [tailwind(), tailwindHMR()],
  outputTargets: [
    {
      type: "dist",
    },
    {
      type: "dist-custom-elements",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
};
