/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
        InterBlack: ["Inter-Black", "inter"],
        InterBold: ["Inter-Bold", "inter"],
        InterExtraBold: ["Inter-ExtraBold", "inter"],
        InterExtraLight: ["Inter-ExtraLight", "inter"],
        InterLight: ["Inter-Light", "inter"],
        InterMedium: ["Inter-Medium", "inter"],
        InterRegular: ["Inter-Regular", "inter"],
        InterSemiBold: ["Inter-SemiBold", "inter"],
        InterThin: ["Inter-Thin", "inter"],
    },
    extend: {},
  },
  plugins: [],
}

