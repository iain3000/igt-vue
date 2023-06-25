import vue from '@vitejs/plugin-vue'
const path = require("path");

export default {
    resolve: {
      alias: {
        vue: '@vue/compat',
        "@": path.resolve(__dirname, "./src"),
      }
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
    ]
  }