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
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    lg: '1124px',
                    xl: '1124px',
                    '2xl': '1124px',
                },
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
};
