import { BuildOptions, UserConfig, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { gameList, links } from './src/data.ts';
import type { RollupOptions } from './node_modules/rollup/dist/rollup.d.ts';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';

const root = resolve(__dirname, 'src');

var config: UserConfig = {
  root,
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        games: resolve(root, 'games', 'index.html'),

      },
    },
  },
};

// Redirections
Object.keys(links).forEach(link => {
  ; (((config.build as BuildOptions).rollupOptions as RollupOptions).input as { [entryAlias: string]: string; })[`redirect_${link}`] = resolve(root, link, 'index.html');
})

// Game specific pages
gameList.filter(g => g.active !== false && g.link.startsWith('/')).forEach(game => {
  const game_id = game.link.split('/').reverse()[0];
  const game_root = resolve(root, 'game', game_id);

  if (!existsSync(game_root)) {
    mkdirSync(game_root, { recursive: true });
    writeFileSync(resolve(game_root, 'index.html'), readFileSync(resolve(root, 'gamelist', 'index.html'), { encoding: 'utf-8' }).replace(/\$GAME_NAME\$/g, game.name).replace(/\$GAME_ID\$/g, game_id));
    writeFileSync(resolve(game_root, 'game.tsx'), readFileSync(resolve(root, 'gamelist', 'game.tsx'), { encoding: 'utf-8' }).replace(/\$GAME_NAME\$/g, game.name).replace(/\$GAME_ID\$/g, game_id));
  };

  ; (((config.build as BuildOptions).rollupOptions as RollupOptions).input as { [entryAlias: string]: string; })[game.link.split('').filter((_, i) => i != 0).join('').replace(/\//g, '-')] = resolve(game_root, 'index.html');
})

export default defineConfig(config);