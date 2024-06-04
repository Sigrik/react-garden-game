/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "grass-texture": "url('/src/assets/grass-texture.png')",
        "mud-texture": "url('/src/assets/mud-texture.png')",
        "player-model": "url('/src/assets/player.png')",
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
