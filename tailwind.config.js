const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_primary: "#18191C",
        dark_secondary: "#F9E7BB",
        dark_white: "#EAEDF5",
        dark_side_panel: "#20222B",
        dark_text_pink: "#E484E6",
        dark_text_light_blue: "#00CFDC",
        dark_address_bar_bg: "#333439",
        dark_ui_bg: "#1F1F24",
        dark_2: "#222328",
        dark_1: "#4CD86B",
        light_primary: "#EAEDF5",
        light_secondary: "#3E9AA0",
        light_1: "#C9D1E8",
        light_2: "#828BA8",
        light_3: "#0F8289",
        light_4: "#4F71E9",
        light_5: "#E44444",
        light_6: "#9AA4BD",
      },
      fontFamily: {
        "code-font": ["'Roboto Mono'", "monospace"],
        "primary-font": ["'Source Sans 3'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
