const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1366px",
            xl2: "1440px",
        },
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
            backgroundImage: {
                joinNow:
                    "linear-gradient(266deg, rgba(242,243,246,0.7931547619047619) 16%, rgba(244,190,248,0) 99%)",
                joinNowDarkSie:
                    "linear-gradient(90deg, rgba(6,7,20,0) 0%, rgba(6,7,20,0.7343312324929971) 76%)",
                darkSide:
                    "linear-gradient(188.08deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 93.79%)",
            },
            // backgroundColor: {},
            // padding: {},
            // borderRadius: {},
            // container: {},
        },
    },
    plugins: [require("tailwindcss"), require("autoprefixer")],
};
