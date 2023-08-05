import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        eslintPlugin({
          include: [
            'src/**/*.js',
            'src/**/*.vue',
            'src/*.js',
            'src/*.vue',
            'src/**/*.tsx',
          ],
        }),
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
})
