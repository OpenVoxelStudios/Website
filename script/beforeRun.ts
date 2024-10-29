import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { CreatorDetailList } from '../src/data.ts';
import { resolve } from 'path';
import sharp from 'sharp';
import chalk from 'chalk';
import { Octokit } from 'octokit';
import { root } from '../config.ts';
const octokit = new Octokit({ auth: process.env.GH_KEY });

async function updateHeads() {
    const headsFolder = resolve(root, 'public', 'heads');
    mkdirSync(headsFolder, { recursive: true });
    await Promise.all(Object.values(CreatorDetailList).map((v) => {
        return new Promise(async (prResolve) => {
            let outName = resolve(headsFolder, `${v.minecraft}.png`);
            if (existsSync(outName)) rmSync(outName);
            let first = await (await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${v.minecraft}`)).json();
            let second = JSON.parse(atob(first.properties.find((v: { name: string; }) => v.name == "textures").value));

            let imageurl = await (await fetch(second.textures.SKIN.url)).arrayBuffer();

            sharp(imageurl)
                .extract({ left: 8, top: 8, width: 8, height: 8 })
                .composite([{
                    input: await sharp(imageurl).extract({ left: 40, top: 8, width: 8, height: 8 }).toBuffer()
                }])
                .toFile(outName, function (err) {
                    if (err) console.error(`\nError while getting "${v.minecraft}"'s head`, err, "\n\n");
                    prResolve(true);
                })
        })
    }));
};

async function updateDownloadCounter(releaseList: string[]) {
    let rawList = await Promise.all(releaseList.map(async tag => {
        let answ = await octokit.request('GET /repos/{owner}/{repo}/releases/tags/{tag}', {
            owner: 'OpenVoxelStudios', repo: 'Maps', tag: tag,
            headers: { 'X-GitHub-Api-Version': '2022-11-28' }
        });

        return answ.data.assets.filter(asset => !asset.name.endsWith('.sha256'));
    }));

    let list: { [gameName: string]: { Downloads: number } } = {};

    rawList.forEach(tag => {
        tag.forEach(game => {
            game.name = game.name.replace('.zip', '');
            if (!list[game.name]) list[game.name] = { Downloads: 0 };
            list[game.name].Downloads += game.download_count;
        });
    });

    writeFileSync(resolve(root, 'downloadcounts.json'), JSON.stringify(Object.keys(list).reduce((acc, key) => ({ ...acc, [key]: list[key].Downloads }), {}), null, 4), { encoding: 'utf-8' });
    return () => console.table(list, ['Downloads']);
};




async function doMagic(progressText: string, endText: string, func: { (...args: any): any }, ...funcArgs: any) {
    console.time(endText);
    process.stdout.write(`[🗿] ${progressText}`);
    let output = await func(...funcArgs);
    if (process.stdout?.clearLine) process.stdout.clearLine(0);
    if (process.stdout?.cursorTo) process.stdout.cursorTo(0);
    console.timeEnd(endText);

    if (typeof output == 'function') output()
    else if (output) console.log(output);
};

await doMagic('Updating heads...', `${chalk.green(Object.keys(CreatorDetailList).length)} heads updated.`, updateHeads);


let downloadTagList = (await octokit.request('GET /repos/{owner}/{repo}/tags', {
    owner: 'OpenVoxelStudios', repo: 'Maps',
    per_page: 50,
})).data.map(d => d.name);
await doMagic('Updating Download Counter...', `${chalk.green(downloadTagList.length)} tags counted.`, updateDownloadCounter, downloadTagList);