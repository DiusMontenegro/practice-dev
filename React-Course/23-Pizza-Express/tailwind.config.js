/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: 'Poppins, sans-serif',
        },
        extend: {
            height: {
                screen: '100dvh',
            },
        },
    },
    daisyui: {
        themes: ['light', 'dark', 'corporate'],
    },
    plugins: [require('daisyui')],
};
