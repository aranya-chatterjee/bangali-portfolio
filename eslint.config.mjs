import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    // The 3D layer drives Three.js objects imperatively: useFrame mutates
    // camera/material/geometry state every frame and GSAP tweens those same
    // objects directly. That is the intended react-three-fiber model — the
    // objects live outside React's render output — so the compiler's
    // immutability rule does not apply to them.
    files: ["src/components/UniverseCanvas.tsx", "src/components/ConstellationSystem.tsx"],
    rules: {
      "react-hooks/immutability": "off",
      "react-hooks/preserve-manual-memoization": "off",
    },
  },
  {
    // These effects read browser-only state (matchMedia, sessionStorage,
    // Math.random) that must not differ between server and client render, so
    // syncing it in a mount effect is the hydration-safe pattern.
    files: ["src/app/page.tsx", "src/components/FallbackUniverse.tsx"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);

export default eslintConfig;
