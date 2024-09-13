# OpenVoxel Studio Website
A cool website yay. Check it out here: https://openvoxel.studio


## How to run?
### Run from release
Download the latest release [here](https://github.com/OpenVoxelStudios/Website/releases/latest/download/openvoxel.studio.zip) and serve it with `bunx serve`, apache or what ever server you want. (it's static HTML so very practical :p)

### Run from code
There are some scripts in the `package.json` file that you can run. I recommend using [bun](https://bun.sh) (scripts are using bun so you really need it...).

Don't forget to install all the dependencies with `bun i` (`i` stands for `install`).

### Dev run
`bunx run dev`

### Build
`bunx run build`

### Preview Build
> (To run after the build to preview what got built)
`bunx run preview`

### Clean Up Build
> To remove output builds
`bunx run cleanup`

### Build for production
> Will create a folder `openvoxel.studio` with the static HTML, JS, CSS and assets and 2 zips `openvoxel.studio.zip` and `openvoxel.studio-nomusic.zip` (no-music will exclude the music from Baking Bread).

Oh also, this project uses Minecraft heads for some pages so there is a script to download them all. To run that script you can either run `bun ./script/beforeRun.ts` or run `bun run update-all`.


> Copyright © 2024 OpenVoxel Studios