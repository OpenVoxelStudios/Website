import { cpSync } from 'fs';
import { resolve } from 'path';
import { root, outDir } from '../config.ts';

console.time(`Copied Download Shortcuts`);
cpSync(resolve(root, 'download'), resolve(outDir, 'download'), { recursive: true });
console.timeEnd(`Copied Download Shortcuts`);