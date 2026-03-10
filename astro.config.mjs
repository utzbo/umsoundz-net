import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // GitHub Pages用: リポジトリ名に合わせて変更してください
  // 例: base: '/circle-site'
  // カスタムドメインの場合は base を削除してください
  site: 'https://umsoundz.net',
});
