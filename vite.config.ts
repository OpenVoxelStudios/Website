import { BuildOptions, UserConfig, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { gameList } from './src/data.ts';
import type { RollupOptions } from './node_modules/rollup/dist/rollup.d.ts';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { root, outDir } from './config.ts';

var config: UserConfig = {
  root,
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        games: resolve(root, 'games', 'index.html'),
        launcher: resolve(root, 'launcher', 'index.html'),
        bakingbread: resolve(root, 'bakingbread', 'index.html'),
        halloffame: resolve(root, 'halloffame', 'index.html'),
        // when2cook: resolve(root, 'when2cook', 'index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          return 'assets/' + assetInfo.name as string;
        },
        entryFileNames: (chunkInfo) => {
          return 'assets/' + chunkInfo.name + '.js';
        },
        chunkFileNames: `assets/App.js`,
      }
    },
  },
};

// Game specific pages + Download shortcuts
gameList.filter(g => g.active !== false && typeof g.link != "string").forEach(game => {
  const game_id = (game.link as { game_id: string }).game_id;
  const game_root = resolve(root, 'game', game_id);
  const shortcut_root = resolve(root, 'download', game_id);

  if (!existsSync(game_root)) mkdirSync(game_root, { recursive: true });
  if (!existsSync(shortcut_root)) mkdirSync(shortcut_root, { recursive: true });

  // Game page
  writeFileSync(resolve(game_root, 'index.html'), readFileSync(resolve(root, 'gamelist', 'index.html'), { encoding: 'utf-8' }).replace(/\$GAME_NAME\$/g, game.name).replace(/\$GAME_ID\$/g, game_id));
  writeFileSync(resolve(game_root, 'game.tsx'), readFileSync(resolve(root, 'gamelist', 'game.tsx'), { encoding: 'utf-8' }).replace(/\$GAME_NAME\$/g, game.name).replace(/\$GAME_ID\$/g, game_id));

  // Shortcut
  writeFileSync(resolve(shortcut_root, 'index.php'), readFileSync(resolve(root, 'download.php'), { encoding: 'utf-8' }).replace(/{{GAME_URL}}/g, game.versions.filter(a => a.type == 'release')[0].download || `https://openvoxel.studio/game/${game_id}`));
  game.versions.forEach(v => {
    writeFileSync(resolve(shortcut_root, `${v.id}.php`), readFileSync(resolve(root, 'download.php'), { encoding: 'utf-8' }).replace(/{{GAME_URL}}/g, v.download));
  });

  // Router
  ; (((config.build as BuildOptions).rollupOptions as RollupOptions).input as { [entryAlias: string]: string; })[game_id] = resolve(game_root, 'index.html');
});

export default defineConfig(config);