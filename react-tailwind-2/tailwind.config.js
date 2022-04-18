const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            ...fontFamily,
            sans: ["Sora", "sans-serif"],
            inter: ["Inter", "sans-serif"],
        },
        container: {
            center: true,
            padding: "0.9375rem",
            screens: {
                "2xl": "88.875rem",
            },
        },
        extend: {
            colors: {
                dark1: "#060714",
                dark2: "#262840",
                dark3: "#7780A1",
                light1: "#DDE0E8",
                light2: "#F1F1F6",
                light3: "#F2F3F6",
                "dark-blue": "#2A27C9",
                "light-blue": "#514CFF",
                green: "#76DECC",
                pink: "#EA6CBC",
                red: "#FB4539",
            },
            // backgroundImage: {},
            // backgroundColor: {},
            // padding: {},
            // borderRadius: {},
            // container: {},
        },
    },
    plugins: [],
};
