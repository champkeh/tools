import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import svgLoader from "vite-svg-loader"
import { join } from "path"

function resolve(dir: string) {
    return join(__dirname, dir)
}

export default defineConfig(({ command, mode }) => {
    return {
        base: command === "build" ? "/build/" : "/",
        resolve: {
            alias: {
                "@": resolve("src"),
            },
        },
        plugins: [
            vue(),
            svgLoader({
                defaultImport: "component",
            }),
        ],
        build: {
            outDir: "build",
        },
    }
})
