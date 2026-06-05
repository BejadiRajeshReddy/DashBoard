import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import path from 'path'
import fs from 'fs'

// Vite plugin for Rollup/Vite dev, build, and dependency optimization (Rolldown)
const esToolkitVitePlugin = () => {
  const virtualPrefix = '\0es-toolkit/compat/';
  return {
    name: 'es-toolkit-vite-resolver',
    resolveId(source: string) {
      if (source.startsWith('es-toolkit/compat/')) {
        return virtualPrefix + source.replace('es-toolkit/compat/', '');
      }
      return null;
    },
    load(id: string) {
      if (id.startsWith(virtualPrefix)) {
        const name = id.replace(virtualPrefix, '');
        const categories = ['array', 'function', 'math', 'object', 'predicate', 'string', 'util'];
        for (const cat of categories) {
          const filePath = path.resolve(__dirname, `node_modules/es-toolkit/dist/compat/${cat}/${name}.mjs`);
          if (fs.existsSync(filePath)) {
            const relativePath = filePath.split(path.sep).join('/');
            return `export { ${name} as default } from '${relativePath}';`;
          }
        }
      }
      return null;
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    tailwindcss(),
    esToolkitVitePlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    rolldownOptions: {
      plugins: [
        esToolkitVitePlugin()
      ]
    }
  },
  server: {
    port: 5173
  }
})
