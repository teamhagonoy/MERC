import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import viteImagemin from 'vite-plugin-imagemin';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const base = env.VITE_BASE_URL || '/';

  return {
    base,
    build: {
      outDir: 'dist',
      sourcemap: false,
      assetsInlineLimit: 4096,
      chunkSizeWarningLimit: 600
    },
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Mangrove Ecopark Resort Complex',
          short_name: 'Mangrove Ecopark',
          description: 'Experience nature like never before at Mangrove Ecopark Resort Complex.',
          start_url: './index.html',
          display: 'standalone',
          background_color: '#000000',
          theme_color: '#000000',
          icons: [
            { src: 'assets/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: 'assets/icon-512.png', sizes: '512x512', type: 'image/png' }
          ]
        }
      }),
      viteImagemin({
        gifsicle: { optimizationLevel: 7 },
        optipng: { optimizationLevel: 7 },
        mozjpeg: { quality: 75 },
        webp: { quality: 80 }
      }),
      viteCompression({
        verbose: true,
        threshold: 10240,
        algorithm: 'brotliCompress',
        ext: '.br'
      }),
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz'
      }),
    ]
  };
});
