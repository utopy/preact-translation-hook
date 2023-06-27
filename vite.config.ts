import path from 'node:path'
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    sourcemap: true,
    lib: {
      entry: (() => {
        const p = path.resolve(__dirname, "index.ts")
        console.log(p)
        return p
      })(),
      name: "PreactTranslationHook",
      // formats: ["es", "cjs", "umd", "iife"],
      // fileName: format => `index.${format}.js`
      fileName: "preact-translation-hook"
    },
    rollupOptions: {
      external: ["preact"],
      output: {
        globals: {
          preact: "Preact",
        }
      }
    }
  }

})
