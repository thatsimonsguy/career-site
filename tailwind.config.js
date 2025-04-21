/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                power: "#440B0A",
                ink: "#000508",
                steel: "#6C6F7D",
                parchment: "#CEBCA1",
                mist: "#CCC9E7",
            },
        },
    },
    plugins: [],
}
