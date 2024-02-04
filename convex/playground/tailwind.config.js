const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [
        nextui({
            prefix: "nextui", // prefix for themes variables
            addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
            defaultTheme: "light", // default theme from the themes object
            defaultExtendTheme: "light", // default theme to extend on custom themes
        }),
    ],
};