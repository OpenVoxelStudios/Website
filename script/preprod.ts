import { $ } from 'bun';

console.time('Zipped openvoxel.studio.zip');
await $`zip -q -r openvoxel.studio.zip openvoxel.studio -x "openvoxel.studio/bakingbread/musics/*"`;
console.timeEnd('Zipped openvoxel.studio.zip');