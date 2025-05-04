import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        background: { value: "#0d1117" },
        backgroundSecondary: { value: "#161b22" },
        textPrimary: { value: "#E6EDF3" },
        textSecondary: { value: "#8b949e" },
        blue: { value: "#58a6ff" },
        green: { value: "#3fb950" },
        red: { value: "#f85149" },
        border: { value: "#30363d" },
      },
      fonts: {
        body: { value: `'Fira Code', monospace` },
        heading: { value: `'Fira Code', monospace` },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
