const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            ...fontFamily,
            sans: ["Roboto", "sans-serif"],
        },
        container: {
            center: true,
            padding: "1rem",
            screens: {
                "2xl": "102.556rem",
            },
        },
        extend: {
            colors: {
                primary: "#272D4E",
                text: "#94A2B3",
                text2: "#299EF3",
            },
            backgroundImage: {
                header: "linear-gradient(180deg, #E5EFFF 0%, rgba(229, 239, 255, 0.262661) 83.7%, rgba(229, 239, 255, 0) 100%);",
                test: "linear-gradient(180deg, rgba(236, 240, 253, 0) 0%, rgba(236, 240, 253, 0.53) 14.32%, #ECF0FD 45.83%, rgba(236, 240, 253, 0.43) 84.33%, rgba(236, 240, 253, 0) 100%);",
            },
            backgroundColor: {
                blue: "#7854F7",
                green: "#70C217",
                darkBlue: "#5F37EF",
            },
            padding: {
                pd1: "26px 63px 25px 62px",
                pd2: "22px 26px 21px",
                pd3: "26px 46px 25px",
            },
            borderRadius: {
                60: "60px",
            },
            container: {},
        },
    },
    plugins: [],
};
