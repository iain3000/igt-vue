import createVuePlugin from '@vitejs/plugin-vue'

const path = require("path");

export default {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      }
    },
    plugins: [ createVuePlugin() ],
    test: {
      globals: true, // required
      setupFiles: ['vitest-localstorage-mock'],
      mockReset: false,
      environment: 'happy-dom'
    }
  }