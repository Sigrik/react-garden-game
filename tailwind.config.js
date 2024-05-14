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
    },
  },
  plugins: [],
};
