import { mkdirSync } from 'fs';
import { CreatorDetailList } from './src/data.ts';
import { resolve } from 'path';
import sharp from 'sharp';

async function updateHeads() {
    const headsFolder = resolve(__dirname, 'src', 'public', 'heads');
    mkdirSync(headsFolder, { recursive: true });
    await Promise.all(Object.values(CreatorDetailList).map((v) => {
        return new Promise(async (prResolve) => {
            let first = await (await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${v.minecraft}`)).json();
            let second = JSON.parse(atob(first.properties.find(v => v.name == "textures").value));

            let imageurl = await (await fetch(second.textures.SKIN.url)).arrayBuffer();

            sharp(imageurl)
                .extract({ left: 8, top: 8, width: 8, height: 8 })
                .composite([{
                    input: await sharp(imageurl).extract({ left: 40, top: 8, width: 8, height: 8 }).toBuffer()
                }])
                .toFile(resolve(headsFolder, `${v.minecraft}.png`), function (err) {
                    if (err) console.log(err);
                    prResolve(true);
                })
        })
    }));
}

await updateHeads();