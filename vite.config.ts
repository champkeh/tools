import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

console.log()
export default defineConfig({
    base: '/build/',
    plugins: [
        vue()
    ]
})
