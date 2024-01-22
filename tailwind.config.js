/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.vue", "./index.html"],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'sans': ['DMSans-Medium'],
            'sans-bold': ['Inter-Bold'],
            'mono': [
                'ui-monospace',
                'SFMono-Regular',
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace',
              ],
        },
        extend: {
            colors: {
                'dark': '#020202',
            }
        }
    },
    plugins: [],
}
