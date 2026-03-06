/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#8b5cf6",
                secondary: "#a855f7",
                accent: "#d8b4fe",
                deep: "#050505",
            },
            backgroundImage: {
                'purple-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #d8b4fe 100%)',
            }
        },
    },
    plugins: [],
}
