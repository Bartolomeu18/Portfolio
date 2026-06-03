import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        bg: "#020617",
        card: "#0F172A",
        border: "#1E293B",
        muted: "#64748B",
        text: "#F1F5F9",
        accent: "#3B82F6",
        accentDark: "#1E40AF",
      },

      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        display: ["Space Mono", "monospace"],
        mono: ["Space Mono", "monospace"],
      },

      boxShadow: {
        glow: "0 0 20px rgba(59, 130, 246, 0.35)",
        glowLg: "0 0 40px rgba(59, 130, 246, 0.5)",
        glowSm: "0 0 10px rgba(59, 130, 246, 0.2)",
      },

      backdropBlur: {
        xs: "2px",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        gradientShift: "gradientShift 3s ease infinite",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },

        pulseGlow: {
          "0%,100%": {
            boxShadow: "0 0 12px rgba(59, 130, 246, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.7)",
          },
        },
        shimmer: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.7",
          },
        },
        gradientShift: {
          "0%, 100%": {
            backgroundPosition: "0% center",
          },
          "50%": {
            backgroundPosition: "100% center",
          },
        },
      },
    },
  },

  plugins: [],
};