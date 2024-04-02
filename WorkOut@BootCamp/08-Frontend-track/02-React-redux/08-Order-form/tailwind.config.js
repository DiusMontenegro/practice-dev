const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        screens: {
            xl: { max: '1200px' },
            lg: { max: '991px' },
            md: { max: '767px' },
            sm: { max: '550px' },
            xsm: { max: '425px' },
        },
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
};
