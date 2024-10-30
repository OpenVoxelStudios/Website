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

// This is really bad code but it works :)
console.time(`Edit sitemap.xml`);
const sitemap = resolve(outDir, 'sitemap.xml');
let splitter = '\r\n        </loc>';
let result = readFileSync(sitemap, { encoding: 'utf-8' });

result = result.split(splitter).map(a => a + (a.endsWith('/') ? '' : '/')).join(splitter);
result = result.slice(0, -1);

writeFileSync(sitemap, result, { encoding: 'utf-8' });
console.timeEnd(`Edit sitemap.xml`);