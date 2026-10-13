import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function syncUserImagesPlugin() {
  return {
    name: 'sync-user-images',
    buildStart() {
      try {
        const srcFavicon = 'C:/Users/ASUS/.gemini/antigravity/brain/6659e7bd-cd78-4574-b91b-800149437dc9/.user_uploaded/media_1791825352790_41d1468b.jpg'
        const srcHero = 'C:/Users/ASUS/.gemini/antigravity/brain/6659e7bd-cd78-4574-b91b-800149437dc9/.user_uploaded/media_1791825502204_c2d499c8.jpg'

        const pubDir = path.resolve(__dirname, 'public')
        const assetDir = path.resolve(__dirname, 'src/assets')

        if (fs.existsSync(srcFavicon)) {
          fs.copyFileSync(srcFavicon, path.join(pubDir, 'favicon.jpg'))
          fs.copyFileSync(srcFavicon, path.join(pubDir, 'favicon.ico'))
          fs.copyFileSync(srcFavicon, path.join(assetDir, 'avatar.jpg'))
        }

        if (fs.existsSync(srcHero)) {
          fs.copyFileSync(srcHero, path.join(pubDir, 'profile_hero.jpg'))
          fs.copyFileSync(srcHero, path.join(assetDir, 'profile_hero.jpg'))
        }
        console.log('[sync-user-images] User images synced into public & src/assets successfully!')
      } catch (err) {
        console.error('[sync-user-images] Error copying images:', err)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), syncUserImagesPlugin()],
})
