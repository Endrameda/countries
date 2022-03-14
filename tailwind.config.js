module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            'dark-blue': {
                dme: '#2b3945',
                dmb: '#202c37',
                lmt: '#111517',
            },
            'dark-gray': '#858585',
            'white-smoke': '#fafafa',
        },
        extend: {
            fontFamily: {
                'nunito': ['Nunito Sans', 'sans-serif']
            }
        },
    },
    plugins: [],
}
