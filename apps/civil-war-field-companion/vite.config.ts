import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';

export default defineConfig({
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [vinext({
    nextConfig: {
      output: 'export',
      assetPrefix: '/projects/civil-war-field-companion',
      images: { unoptimized: true },
    },
  })],
});
