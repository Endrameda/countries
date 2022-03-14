module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'nunito': ['Nunito Sans', 'sans-serif']
            },
            colors: {
                'dark-blue': {
                    dme: '#2b3945',
                    dmb: '#202c37',
                    lmt: '#111517',
                },
                'dark-gray': '#858585',
                'white-smoke': '#fafafa',
            }
        },
    },
    plugins: [],
}
