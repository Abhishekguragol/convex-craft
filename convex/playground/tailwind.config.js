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
            prefix: "nextui",
            addCommonColors: false,
            defaultTheme: "light",
            defaultExtendTheme: "light",
        }),
    ],
};
