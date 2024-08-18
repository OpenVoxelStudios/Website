import { cpSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { root, outDir } from '../config.ts';
import { links } from '../src/data.ts';

console.time(`Copied Download Shortcuts`);
cpSync(resolve(root, 'download'), resolve(outDir, 'download'), { recursive: true });
console.timeEnd(`Copied Download Shortcuts`);


console.time(`Created Redirects`);
Object.keys(links).forEach(link => {
    writeFileSync(resolve(outDir, link + `.php`), readFileSync((resolve(root, 'download.php')), { encoding: 'utf-8' }).replace('{{GAME_URL}}', links[link] as string), { encoding: 'utf-8' })
});
console.timeEnd(`Created Redirects`);