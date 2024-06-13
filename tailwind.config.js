/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      tiny5: ["Tiny5", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "grass-texture": "url('/src/assets/grass-texture.png')",
        "mud-texture": "url('/src/assets/mud-texture.png')",
        "game-logo": "url('/src/assets/logo.png')",
        "cog-icon": "url('/src/assets/cog-icon.png')",
        "arrow-icon": "url('/src/assets/arrow-icon.png')",
        "cloud-1": "url('/src/assets/cloud1.png')",
        "cloud-2": "url('/src/assets/cloud2.png')",
        "cloud-3": "url('/src/assets/cloud3.png')",
      },
      dropShadow: {
        "px-btn": "0px 6px 0px rgba(43,43,43, 1)",
      },
      keyframes: {
        tileTransitionGrass: {
          "0%": {
            backgroundImage: "url('/src/assets/mud-texture.png')",
            transform: "scale(1)",
          },
          "30%": {
            transform: "scale(1)",
          },
          "40%": {
            transform: "scale(1.1)",
          },
          "79%": {
            backgroundImage: "url('/src/assets/mud-texture.png')",
          },
          "80%": {
            backgroundImage: "url('/src/assets/grass-texture.png')",
            transform: "scale(0.95)",
          },
          "100%": {
            backgroundImage: "url('/src/assets/grass-texture.png')",
            transform: "scale(1)",
          },
        },
        tileTransitionMud: {
          "0%": {
            backgroundImage: "url('/src/assets/grass-texture.png')",
            transform: "scale(1)",
          },
          "30%": {
            transform: "scale(1)",
          },
          "40%": {
            transform: "scale(1.1)",
          },
          "79%": {
            backgroundImage: "url('/src/assets/grass-texture.png')",
          },
          "80%": {
            backgroundImage: "url('/src/assets/mud-texture.png')",
            transform: "scale(0.95)",
          },
          "100%": {
            backgroundImage: "url('/src/assets/mud-texture.png')",
            transform: "scale(1)",
          },
        },
        cloudTransition: {
          "0%": {
            marginLeft: "-30vw",
          },
          "100%": {
            marginLeft: "100vw",
          },
        },
        cloudTransitionLate: {
          "0%": {
            marginLeft: "-80vw",
          },
          "100%": {
            marginLeft: "100vw",
          },
        },
        popUp: {
          "0%": {
            opacity: 0,
            transform: "scale(0.6)",
          },
          "40%": {
            opacity: 1,
            transform: "scale(1.1)",
          },
          "80%": {
            transform: "scale(0.95)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        cloudTransitionFast: "cloudTransition 40s linear infinite",
        cloudTransitionMedium: "cloudTransition 60s linear infinite",
        cloudTransitionSlow: "cloudTransition 80s linear infinite",
        cloudTransitionVerySlow: "cloudTransition 100s linear infinite",
        cloudLateTransitionFast: "cloudTransitionLate 40s linear infinite",
        cloudLateTransitionMedium: "cloudTransitionLate 60s linear infinite",
        cloudLateTransitionSlow: "cloudTransitionLate 80s linear infinite",
        cloudLateTransitionVerySlow: "cloudTransitionLate 100s linear infinite",
        tileTransitionGrass: "tileTransitionGrass 0.4s ease-in-out forwards",
        tileTransitionMud: "tileTransitionMud 0.4s ease-in-out forwards",
        popUp: "popUp 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
