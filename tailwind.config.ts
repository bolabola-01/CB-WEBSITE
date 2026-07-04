import type { Config } from "tailwindcss";

/**
 * DESIGN TOKENS — extracted from the CV Caltic Baru master catalogue.
 * Do not introduce new colors or fonts outside this system without
 * updating the catalogue reference first. See docs/DESIGN-SYSTEM.md.
 */
const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./sanity/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        // Core neutrals — warm paper tones from the catalogue backgrounds
        paper: {
          DEFAULT: "#F7F4EE", // primary warm-white background
          warm: "#F1ECE2", // secondary section background (About Us tone)
          dim: "#EDE8DE",
        },
        // Deep navy — headline type, panels, footer
        navy: {
          DEFAULT: "#12233F",
          50: "#EEF1F6",
          100: "#D3DAE6",
          200: "#A7B5CB",
          300: "#7A8FB1",
          400: "#4E6997",
          500: "#2C4570",
          600: "#1B3057",
          700: "#12233F", // primary
          800: "#0D192E",
          900: "#08111F",
        },
        // Terracotta — accent, underlines, stat figures, CTAs
        terracotta: {
          DEFAULT: "#C1663F",
          50: "#FBF1EC",
          100: "#F4DACB",
          200: "#E8B79B",
          300: "#DC9469",
          400: "#CC7A4F",
          500: "#C1663F", // primary
          600: "#A2532F",
          700: "#824227",
          800: "#62311D",
          900: "#432113",
        },
        ink: {
          DEFAULT: "#1E2530", // body copy
          soft: "#4B5563",
          faint: "#8B8478",
        },
        line: "#DDD5C7", // hairline dividers on paper backgrounds
      },
      fontFamily: {
        // Display serif — editorial headlines, italic treatment
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        // Small-caps label / eyebrow / wordmark typeface
        label: ["var(--font-cinzel)", "Georgia", "serif"],
        // Body sans — clean, geometric, warm (stand-in for Avenir/Garet)
        sans: ["var(--font-worksans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,35,63,0.04), 0 8px 24px -8px rgba(18,35,63,0.08)",
      },
      borderRadius: {
        sm: "2px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
