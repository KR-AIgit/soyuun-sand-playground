import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/soyuun-sand-playground/', // 새로운 깃허브 저장소 이름으로 고정
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg'],
      manifest: {
        name: '시아의 모래놀이터',
        short_name: '시아의 모래놀이터',
        start_url: '/soyuun-sand-playground/',
        scope: '/soyuun-sand-playground/',
        description: '시아를 위한 재미있는 모바일 모래놀이터!',
        theme_color: '#2c2f33',
        background_color: '#2c2f33',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'icon.svg',
            sizes: 'any',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],
})
