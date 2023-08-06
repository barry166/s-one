import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      sass: {
        // additionalData: `@import "@/src/styles/mixins.scss";` // 这里引入你的 Mixin 文件路径
      }
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        eslintPlugin({
          include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue', 'src/**/*.tsx']
        }),
        AntDesignVueResolver({
          importStyle: false // css in js
        })
      ]
    })
  ]
})
