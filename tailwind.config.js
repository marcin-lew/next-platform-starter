const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': "linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
            },
            colors: {
                neutral: colors.neutral,
                white: '#FFFFFF',
                lightGrey1: '#EFF0F3',
                lightGrey2: '#E4E5E9',
                grey: '#C0C0C0',
                darkGrey: '#9A9494',
                black: '#2B2C34',
                blue: '#6246EA',
                background: '#E5E5E5', // Dodajemy kolor tła
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                h1: '64px',
                h2: '24px',
                h3: '20px',
                p1: '20px',
                p2: '18px',
                p3: '16px',
                p4: '14px',
            },
            fontWeight: {
                regular: '400',
                semibold: '600',
                bold: '700',
            },
            backgroundColor: {
                default: '#E5E5E5', // Kolor tła jako domyślny
            },
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#2bdcd2',
                    'primary-content': '#171717',
                    secondary: '#016968',
                    info: '#2bdcd2',
                    'info-content': '#171717',
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
