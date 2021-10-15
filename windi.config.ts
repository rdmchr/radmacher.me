import {defineConfig} from 'windicss/helpers';

export default defineConfig({
    darkMode: 'class',
    safelist: '',
    theme: {
        extend: {
            fontFamily: {
                title: ['Lora', 'serif'],
            }
        }
    },
    plugins: [],
})
