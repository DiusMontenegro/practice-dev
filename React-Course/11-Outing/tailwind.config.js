const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                main: "url('./src/assets/bg.jpg')",
            },
        },
        container: {
            center: true,
            padding: '1rem',
            screens: {
                lg: '960px',
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
};
