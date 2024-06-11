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
        "player-model": "url('/src/assets/player.png')",
        "game-logo": "url('/src/assets/logo.png')",
        "cog-icon": "url('/src/assets/cog-icon.png')",
        "arrow-icon": "url('/src/assets/arrow-icon.png')",
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
      },
      animation: {
        tileTransitionGrass: "tileTransitionGrass 0.4s ease-in-out forwards",
        tileTransitionMud: "tileTransitionMud 0.4s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
