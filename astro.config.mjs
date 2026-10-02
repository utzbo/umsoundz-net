import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const publicDir = fileURLToPath(new URL('./public', import.meta.url));

// 開発サーバーでも public/ 内のフォルダURL（例: /releases/UMSZ-002/）で index.html を返す
// ※本番（GitHub Pages）とビルド後のプレビューでは元から動作する
const publicDirIndex = {
  name: 'public-dir-index',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const [path, query] = (req.url ?? '').split('?');
      const dir = decodeURIComponent(path).replace(/\/?$/, '/');
      if (dir !== '/' && existsSync(publicDir + dir + 'index.html')) {
        if (!path.endsWith('/')) {
          res.writeHead(301, { Location: dir + (query ? '?' + query : '') });
          return res.end();
        }
        req.url = path + 'index.html' + (query ? '?' + query : '');
      }
      next();
    });
  },
};

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://umsoundz.net',
  vite: {
    plugins: [publicDirIndex],
    server: {
      // 特設サイト等に置く大きなファイルはコピー中にロックされ、監視でエラーになるため除外
      watch: { ignored: ['**/*.zip'] },
    },
  },
});
