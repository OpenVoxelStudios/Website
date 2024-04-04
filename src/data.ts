/* 
 * Each of this link is a page on the website that will redirect as well as a variable to use
*/
export const links = {
    discord: "https://discord.com/invite/Xhvb2wujVh",
    launcher: "https://launcher.openvoxel.studio/",
    youtube: "https://www.youtube.com/@OpenVoxel",
}

export const CreatorDetailList = {
    "CMANIF": {
        minecraft: "786e1712-c2a2-405b-8b78-3cc58bd953f9",
        youtube: "@CMANIF",
    },
    "ChoosingBerry": {
        minecraft: "82aa54c4-c65a-4a66-8ef8-39388a612480",
        youtube: "@ChoosingBerry29",
    },
    "Kubik": {
        minecraft: "f26a09dd-c01d-4885-91e3-32110c8fab38",
        youtube: "@KodeurKubik",
    },
    "Monster Art": {
        minecraft: "f31cfecd-0045-4c92-858f-326cc89ef9c4",
        youtube: "@Monster_Art",
    },
    "S0FL": {
        minecraft: "68c5c95f-80e9-499e-9128-d4d597633afc",
        youtube: "@s0fl813"
    },
    "Sammy": {
        minecraft: "d0c31c74-f1b0-4c27-a988-db9a6d95bb70",
        youtube: "@Sammy3D",
    },
    "Stevelocks": {
        minecraft: "0849bc57-4d67-414b-a371-b71c45e02a14",
        youtube: "@Stevelocks100",
    },
};

export type CreatorList = keyof typeof CreatorDetailList;

export const gameList: {
    name: string,
    description: string,
    fulldetails?: string,
    creators: CreatorList[],
    link: string,
    date: string,
    image: string,
    icon: string,
    downloads: number,
    tags: string[],
    active?: boolean,
    versions: {
        name: string,
        date: string,
        changes: string,
        type: "alpha" | "beta" | "release",
        download: string,
        supports: string,
    }[],
}[] = [
        {
            name: "Oak House Murder",
            description: "Pressing the start button of the map, you didn't expect to receive a message from the government. Even less did you expect having to defend your home from a bloodthirsty creature...",
            creators: ["Stevelocks"],
            link: "/game/oak-house-murder",
            date: "Nov 7, 2023",
            image: "/games/banners/oak-house-murder.jpg",
            icon: "/games/icons/oak-house-murder.png",
            downloads: 201,
            tags: ["oak", "house", "murder", "resident", "masacre", "horror"],
            versions: [
                {
                    changes: "Urjent on Youtube changed some things in the resource pack to make it funny!\n* changed a bunch of sounds\n* changed the anomaly's texture\nGo watch the video [here](https://www.youtube.com/watch?v=MUS4bP2kgNM)",
                    date: "Feb 17, 2024",
                    download: "https://github.com/OpenVoxelStudios/Maps/releases/download/v1.3-KNARF/oak-house-murder.zip",
                    name: "Version 1.3.KNARF",
                    supports: "1.20.2-1.20.4",
                    type: "alpha",
                },
                {
                    changes: "yes more things surprisingly!\n\n* Fixed bug where generator has a max of 19 fuel (sometimes happens, unpredictable). This could mean more bugs appear, but this is probably going to stay\n* Nerfed the Anomaly when the player is outside, or when fuel is low",
                    date: "Feb 10, 2024",
                    download: "https://github.com/OpenVoxelStudios/Maps/releases/download/v1.3/oakhousemurder.zip",
                    name: "Version 1.3",
                    supports: "1.20.2-1.20.4",
                    type: "release",
                },
                {
                    changes: "Fixed some more bugs!\n\n* removed obtainable cosmetics because it caused too many problems\n* supposedly fixed a bug where the anomaly could get stuck on the ladder, but I couldn't replicate this\n* Fixed the somewhat buggy animations of the creature when the animations change\n* this map now works on 1.20.3 and beyond! names no longer appear at the door and the wires :)\n* fixed a visual bug with the fuel",
                    date: "Jan 3, 2024",
                    download: "https://github.com/OpenVoxelStudios/Maps/releases/download/v1.2/oakhousemurder.zip",
                    name: "Version 1.2",
                    supports: "1.20.2-1.20.4",
                    type: "release",
                },
                {
                    changes: "Just fixed a few bugs!\nalso when you beat the game you get access to cosmetics :)\n* You could climb part of the house\n* The trapdoor near the computer could be opened\n* Walking on the bed teleports the player downwards\n* Fuel was very large when holding it\n* Ladder vanishes when holding an item in your main hand\n* You keep items when \"combat logging\"\n* You could get more than 19 fuel by keeping it in a different slot.",
                    date: "Dec 5, 2024",
                    download: "https://github.com/OpenVoxelStudios/Maps/releases/download/v1.1/oakhousemurder.zip",
                    name: "Version 1.1",
                    supports: "1.20.2-1.20.4",
                    type: "release",
                },
            ],
            fulldetails: "![](/images/ohm_banner.png)\n\n\n\nWelcome to the Oak House Murder! This is a recreation of the Roblox game [Residence Massacre](https://www.roblox.com/games/14437001043/Residence-Massacre) made in 7 days.\n\nThis is best played with a group of 2-3 people.\nPlease use moody brightness, as it makes things a bit scarier.\nThis map can only be played on 1.20.2, no version before works.\n\n\n## Mechanics:\n### Cameras\n> While preparing for the night, you can find a ladder beside the generator outside. This is used to add cameras around the place to keep a watchful eye on the surroundings. This will not make you safe from the monster btw lol\n\n\n### Oxygen\n> For some reason, the ventilation in the house is poor, and hence it requires energy to keep air flowing through the house. Note that the generator doesn't have infinite fuel. You will need to go out every so often to refuel the generator to keep the air flowing.\n\n\n### Loot\n> Your house has some limited supplies that you can use to aid your survival of the night. These mainly include:\n> \n> Torch:\n> Use the torch to light up your surroundings.\n> \n> \n> Coal:\n> Coal doesn't do much by itself, but it can be used to extend the duration of the torch's light.\n> \n> \n> Stew:\n> This provides some extra energy when consumed, allowing you to sprint faster, and for a longer time.\n> \n> \n> Wrench:\n> This tool is used to fix the power in case you overload the system.\n\n\n### Lights\n> There are many lights around the house. These are used both for you to see your house during the night, and for scaring off the anomaly if it appears. Be careful about using the lights too much, as you could overload the system, forcing you to have to go outside and fix it with the wrench to prevent certain death.\n\n\n### Boards\n> Upstairs there is a pile of boards, which can be used to board up windows. This gives you extra time if the anomaly decides to pay you a visit. You cannot place boards on windows that have already been broken.\n> There also may or may not be enough boards to cover up all the windows.\n> \n> 2x2 windows cannot be boarded. The anomaly can't appear in them either. These are just used to make the house brighter during the day.\n\n\n\n### FOR THOSE USING A SERVER:\nYou will not be able to use the resource pack unless you modify the server.properties file and put a link to the resource pack.\nIf you don't feel like putting the resource pack file on something like dropbox, you can copy and paste the link below.\n\nhttps://www.dropbox.com/scl/fi/5jhp3rfu1jk2p9ilotd8c/ohmresourcepack.zip?rlkey=h4lre53o0xxsnn4r7bj161od2&dl=1\n\nFound a bug? Report it here:\nhttps://discord.gg/KcUX7EFAmp\n\n\n\n### __*WARNING: THIS MAP CONTAINS JUMPSCARES AND LOUD NOISES.*__",
        },
        {
            name: "Lethal Budget",
            description: "Introducing Lethal Budget, a budget version of lethal company for Minecraft that I made without actually playing the game!",
            creators: ["Stevelocks"],
            link: "/game/lethal-budget",
            date: "Dec 22, 2023",
            image: "/games/banners/lethal-budget.jpg",
            icon: "/games/icons/lethal-budget.png",
            downloads: 2476,
            tags: ["lethal", "budget", "company", "horror"],
            fulldetails: "![](/images/lc_banner.png)\n\n\n\nIntroducing Lethal Budget, a budget version of lethal company for Minecraft that I made without actually playing the game! Below were the mods used in the video to enhance the immersion, but they aren't required.\n\nMods:\n* [Sodium](https://modrinth.com/mod/sodium/versions)\n* [Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat/versions)\n* [Darkness](https://drive.google.com/drive/folders/1qxa6EVQv7TZo8AZOO1gmSXUtNWAyErpY) (in google drive, since i had to modify them to work in newer versions)\nIt's for fabric btw\n\nI keep on forgetting to mention this\nTHIS MAP IS COMPATIBLE WITH 1.20.3 AND ANYTHING ABOVE\n\nDo not use left handed to play the map, as it makes the items in your hand invisible.\nIf the rain is too laggy, use /trigger rain_trigger to disable it.\nIf something goes wrong, use /function lethal:game/start to restart the game.\n\nOh boy! i sure hope stepping on the pressure plate actually starts the game! that would be great :D",
            versions: [
                {
                    changes: "oh boy it's an update :D\n\n* The map will now give you 5 seconds to load the facility instead of 2 before bringing you back.\n* Map size is 13 instead of 20 for faster loading and easier navigation\n* Monsters have been buffed and now spawn much faster.\n* The door now brings you back into the facility faster after the first entry (half a second)\n* You can now use /trigger rain_trigger to disable the rain if it is too laggy. This feature already existed, but I forgot to mention it lol",
                    date: "Jan 17th, 2023",
                    download: "https://github.com/OpenVoxelStudios/Maps/releases/download/v1.0/lethal-budget.zip",
                    name: "Update #1",
                    supports: "1.20.3-1.20.4",
                    type: "release",
                }
            ],
        },
        {
            name: "Lethal Infestion",
            description: "A Datapack where I put some of Lethal Company's monsters in Minecraft. Currently features 3 mobs: Jester, Hoarding Bug and Snare Flea",
            creators: ["Stevelocks"],
            link: "/game/lethal-infestation",
            date: "Mar 6, 2024",
            image: "/games/banners/lethal-infestion.jpg",
            icon: "/games/icons/lethal-infestion.png",
            downloads: 165,
            tags: ["lethal", "budget", "company", "horror", "entities", "monsters", "jester", "hoarding", "bug", "snare", "flea"],
            fulldetails: "# Welcome to Lethal Infestation\n\n## A Datapack where I put some of Lethal Company's monsters in Minecraft.\n\n\nCurrently features 3 mobs:\n\n### Jester\n> Yup! Little buddy that you can find while mining deepslate diamond ore.\n\n### Hoarding Bug\n> Cute, yet rare fellas that also appear in caves.\n> Use \"/function hb:give_spawn_egg\" to obtain a spawn egg\n\n### Snare Flea\n> I hate these. Also appears in caves\n> Use \"/function snareflea:give_spawn_egg\" to obtain a spawn egg",
            versions: [
                {
                    changes: "Initial release!\n* Jester\n* Hoarding Bug\n* Snare Flea",
                    date: "Mar 6, 2024",
                    download: "https://github.com/OpenVoxelStudios/Maps/releases/download/v1.0/lethal-infestion.zip",
                    name: "Version 1.0",
                    supports: "1.20+",
                    type: "release",
                }
            ],
        },
        {
            name: "More Maps!",
            description: "More Maps Soon! We are actively coding new maps for the best of the community!",
            creators: ["CMANIF", "ChoosingBerry", "Kubik", "Monster Art", "S0FL", "Sammy", "Stevelocks"],
            link: "https://discord.gg/Xhvb2wujVh",
            date: "Jan 1, 1970",
            image: "/banner.png",
            icon: "/logo.png",
            downloads: -Infinity,
            tags: [],
            active: false,
            versions: [],
        },
    ];