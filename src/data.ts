/* 
 * Each of this link is a page on the website that will redirect as well as a variable to use
*/
export const links = {
    discord: "https://discord.com/invite/Xhvb2wujVh",
    launcher: "https://launcher.openvoxel.studio/",
    youtube: "https://www.youtube.com/@OpenVoxel",
}

export type CreatorList = "CMANIF" | "ChoosingBerry" | "Kubik" | "Monster Art" | "S0FL" | "Sammy" | "Stevelocks";

export const CreatorDetailList: Record<CreatorList, {
    minecraft: string;
    youtube: string;
    description: string;
}> = {
    "CMANIF": {
        minecraft: "786e1712-c2a2-405b-8b78-3cc58bd953f9",
        youtube: "@CMANIF",
        description: "Hi ! I am CMANIF ! A french guy who loves building things on Minecraft. (I'm not a dev). I'm participating in the Open Voxel project and I hope to see this project grow one day! (Although it's already happening) :)"
            + "\n\n# My Socials"
            + "\n\n**Youtube**: [@CMANIF](https://youtube.com/@CMANIF)"
            + "\n\n**Discord**: [cmanif](https://discordapp.com/users/728545314507849748)"
            + "\n\n**Minecraft**: CMANIF",
    },
    "ChoosingBerry": {
        minecraft: "82aa54c4-c65a-4a66-8ef8-39388a612480",
        youtube: "@ChoosingBerry29",
        description: "Hi I'm **ChoosingBerry**! I am a Youtuber who is making models for this amazing dev group don't ask how I got here it just sort of happened when I was in Stevelocks's Server"
            + "\n\n# My Socials"
            + "\n\n**Youtube**: [@ChoosingBerry29](https://www.youtube.com/@ChoosingBerry29)"
            + "\n\n**Discord**: [choosingberry29](https://discordapp.com/users/724906882380202006)"
            + "\n\n**Minecraft**: ChoosingBerry29",
    },
    "Kubik": {
        minecraft: "f26a09dd-c01d-4885-91e3-32110c8fab38",
        youtube: "@KodeurKubik",
        description: "Hi! I'm **Kubik** (_aka Kodeur_Kubik_) and I really enjoy programming! When I joined this team, I was so bad in Minecraft command blocks but now, I am a lot better with that stuff!"
            + "\n\n"
            + "I also like programming in [Node.JS](https://nodejs.org/). I've also done the Launcher, this Website and I usually program Discord Bots."
            + "\n\n"
            + "`I'm not crazy. (i think)`"
            + "\n\n# My Socials"
            + "\n\n**Youtube**: [@KodeurKubik](https://www.youtube.com/@KodeurKubik)"
            + "\n\n**Discord**: [kodeurkubik](https://discordapp.com/users/685739284287848458)"
            + "\n\n**Minecraft**: Kodeur_Kubik"
            + "\n\n**Business Email**: kubik@openvoxel.studio",
    },
    "Monster Art": {
        minecraft: "f31cfecd-0045-4c92-858f-326cc89ef9c4",
        youtube: "@Monster_Art",
        description: "Hi ! I'm **Monster Art** (_aka Meca Monster Art_) and I like to make minecraft custom stuffs with nice people."
            + "\n\n"
            + "About me, I have a personnal universe that (almost) no one will never understand but it's okay, don't ask about that and by the way I like leeks and oranges. LLLLLLLLLLEEEEEEK"
            + "\n\n# My Socials"
            + "\n\n**Youtube**: [@Monster_Art](https://www.youtube.com/@Monster_Art)"
            + "\n\n**Discord**: [monsterart](https://discordapp.com/users/655453962874388482)"
            + "\n\n**Minecraft**: Monster_Art",
    },
    "S0FL": {
        minecraft: "68c5c95f-80e9-499e-9128-d4d597633afc",
        youtube: "@s0fl813",
        description: "Hey, I'm S0FL, the most (highly) inactive dev on the team. I only know programming and math. Nothing else."
            + "\n\nAlso I'm Brazilian (suddenlycaralho)."
            + "\n\n"
            + "I originally created a discord server to make Roblox Doors alongside Stevelocks but I went away because of school, and when I got back it turned into OpenVoxel Studios! (Sick)"
            + "\n\n"
            + "Always looking forward to whatever the awesome people at the team will do."
            + "\n\n"
            + "God bless you 🙏"
            + "\n\n"
            + "👽seek ZWSPs"
            + "\n\n# My Socials"
            + "\n\n**Discord**: [s0fl](https://discordapp.com/users/249993006705278986)"
            + "\n\n**Minecraft**: S0FL",
    },
    "Sammy": {
        minecraft: "d0c31c74-f1b0-4c27-a988-db9a6d95bb70",
        youtube: "@Sammy3D",
        description: "idk im not good at this stuff"
        + "\n\n# My Socials"
        + "\n\n**Youtube**: [@Sammy3D](https://youtube.com/@Sammy3D)"
        + "\n\n**Discord**: [sammy2d](https://discordapp.com/users/552465226583506945)"
        + "\n\n**Minecraft**: Sammy2D",
    },
    "Stevelocks": {
        minecraft: "0849bc57-4d67-414b-a371-b71c45e02a14",
        youtube: "@Stevelocks100",
        description: "Heyo I'm Stevelocks! I am a Canadian who likes to code stuff, but can also model and animate. I've worked make a few maps, and I hope to continue making more with Openvoxel Studios!"
            + "\n\n# My Socials"
            + "\n\n**Youtube**: [@Stevelocks100](https://youtube.com/@stevelocks100)"
            + "\n\n**Discord**: [stevelocks](https://discordapp.com/users/709164804144758814)"
            + "\n\n**Minecraft**: Stevelocks100"
            + "\n\n**Business Email**: stevelocks@openvoxel.studio",
    },
};

export const gameList: {
    name: string,
    description: string,
    extended_description?: string,
    fulldetails?: string,
    creators: CreatorList[],
    link: string | {
        game_id: string,
    },
    date: Date | null,
    image: string,
    icon: string,
    downloads: number | null,
    tags: string[],
    active?: boolean,
    versions: {
        name: string,
        date: Date,
        changes: string,
        type: "alpha" | "beta" | "release",
        download: string,
        supports: string,
    }[],
}[] = [
        {
            name: "Oak House Murder",
            description: "Residence Massacre in Minecraft!",
            extended_description: "Pressing the start button of the map, you didn't expect to receive a message from the government. Even less did you expect having to defend your home from a bloodthirsty creature...",
            creators: ["Stevelocks"],
            link: { game_id: "oak-house-murder" },
            date: new Date(1699311600000),
            image: "/games/banners/oak-house-murder.png",
            icon: "/games/icons/oak-house-murder.png",
            downloads: 206,
            tags: ["oak", "house", "murder", "resident", "masacre", "horror"],
            versions: [
                {
                    changes: "Urjent on Youtube changed some things in the resource pack to make it funny!\n* changed a bunch of sounds\n* changed the anomaly's texture\nGo watch the video [here](https://www.youtube.com/watch?v=MUS4bP2kgNM)",
                    date: new Date(1708124400000),
                    download: "https://github.com/OpenVoxelStudios/Maps/releases/download/v1.3-KNARF/oak-house-murder.zip",
                    name: "Version 1.3.KNARF",
                    supports: "1.20.2-1.20.4",
                    type: "alpha",
                },
                {
                    changes: "yes more things surprisingly!\n\n* Fixed bug where generator has a max of 19 fuel (sometimes happens, unpredictable). This could mean more bugs appear, but this is probably going to stay\n* Nerfed the Anomaly when the player is outside, or when fuel is low",
                    date: new Date(1707519600000),
                    download: "https://github.com/OpenVoxelStudios/Maps/releases/download/v1.3/oakhousemurder.zip",
                    name: "Version 1.3",
                    supports: "1.20.2-1.20.4",
                    type: "release",
                },
                {
                    changes: "Fixed some more bugs!\n\n* removed obtainable cosmetics because it caused too many problems\n* supposedly fixed a bug where the anomaly could get stuck on the ladder, but I couldn't replicate this\n* Fixed the somewhat buggy animations of the creature when the animations change\n* this map now works on 1.20.3 and beyond! names no longer appear at the door and the wires :)\n* fixed a visual bug with the fuel",
                    date: new Date(1704236400000),
                    download: "https://github.com/OpenVoxelStudios/Maps/releases/download/v1.2/oakhousemurder.zip",
                    name: "Version 1.2",
                    supports: "1.20.2-1.20.4",
                    type: "release",
                },
                {
                    changes: "Just fixed a few bugs!\nalso when you beat the game you get access to cosmetics :)\n* You could climb part of the house\n* The trapdoor near the computer could be opened\n* Walking on the bed teleports the player downwards\n* Fuel was very large when holding it\n* Ladder vanishes when holding an item in your main hand\n* You keep items when \"combat logging\"\n* You could get more than 19 fuel by keeping it in a different slot.",
                    date: new Date(1733353200000),
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
            description: "Lethal Company on a budget!",
            extended_description: "Introducing Lethal Budget, a budget version of lethal company for Minecraft that I made without actually playing the game!",
            creators: ["Stevelocks"],
            link: { game_id: "lethal-budget" },
            date: new Date(1703199600000),
            image: "/games/banners/lethal-budget.png",
            icon: "/games/icons/lethal-budget.png",
            downloads: 2529,
            tags: ["lethal", "budget", "company", "horror"],
            fulldetails: "![](/images/lc_banner.png)\n\n\n\nIntroducing Lethal Budget, a budget version of lethal company for Minecraft that I made without actually playing the game! Below were the mods used in the video to enhance the immersion, but they aren't required.\n\nMods:\n* [Sodium](https://modrinth.com/mod/sodium/versions)\n* [Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat/versions)\n* [Darkness](https://drive.google.com/drive/folders/1qxa6EVQv7TZo8AZOO1gmSXUtNWAyErpY) (in google drive, since i had to modify them to work in newer versions)\nIt's for fabric btw\n\nI keep on forgetting to mention this\nTHIS MAP IS COMPATIBLE WITH 1.20.3 AND ANYTHING ABOVE\n\nDo not use left handed to play the map, as it makes the items in your hand invisible.\nIf the rain is too laggy, use /trigger rain_trigger to disable it.\nIf something goes wrong, use /function lethal:game/start to restart the game.\n\nOh boy! i sure hope stepping on the pressure plate actually starts the game! that would be great :D",
            versions: [
                {
                    changes: "oh boy it's an update :D\n\n* The map will now give you 5 seconds to load the facility instead of 2 before bringing you back.\n* Map size is 13 instead of 20 for faster loading and easier navigation\n* Monsters have been buffed and now spawn much faster.\n* The door now brings you back into the facility faster after the first entry (half a second)\n* You can now use /trigger rain_trigger to disable the rain if it is too laggy. This feature already existed, but I forgot to mention it lol",
                    date: new Date(1673910000000),
                    download: "https://github.com/OpenVoxelStudios/Maps/releases/download/v1.0/lethal-budget.zip",
                    name: "Update #1",
                    supports: "1.20.3-1.20.4",
                    type: "release",
                }
            ],
        },
        {
            name: "Lethal Infestation",
            description: "Lethal Company monsters in the overworld!",
            extended_description: "A Datapack where I put some of Lethal Company's monsters in Minecraft. Currently features 3 mobs: Jester, Hoarding Bug and Snare Flea",
            creators: ["Stevelocks"],
            link: { game_id: "lethal-infestation" },
            date: new Date(1709679600000),
            image: "/games/banners/lethal-infestation.png",
            icon: "/games/icons/lethal-infestation.png",
            downloads: 183,
            tags: ["lethal", "budget", "company", "horror", "entities", "monsters", "jester", "hoarding", "bug", "snare", "flea"],
            fulldetails: "# Welcome to Lethal Infestation\n\n## A Datapack where I put some of Lethal Company's monsters in Minecraft.\n\n\nCurrently features 3 mobs:\n\n### Jester\n> Yup! Little buddy that you can find while mining deepslate diamond ore.\n\n### Hoarding Bug\n> Cute, yet rare fellas that also appear in caves.\n> Use \"/function hb:give_spawn_egg\" to obtain a spawn egg\n\n### Snare Flea\n> I hate these. Also appears in caves\n> Use \"/function snareflea:give_spawn_egg\" to obtain a spawn egg",
            versions: [
                {
                    changes: "Initial release!\n* Jester\n* Hoarding Bug\n* Snare Flea",
                    date: new Date(1709679600000),
                    download: "https://github.com/OpenVoxelStudios/Maps/releases/download/v1.0/lethal-infestation.zip",
                    name: "Version 1.0",
                    supports: "1.20+",
                    type: "release",
                }
            ],
        },
        {
            name: "More Maps Soon!",
            description: "We are actively coding new maps for the best of the community!",
            creators: ["CMANIF", "ChoosingBerry", "Kubik", "Monster Art", "S0FL", "Sammy", "Stevelocks"],
            link: links.discord,
            date: null,
            image: "/banner.png",
            icon: "/logo.png",
            downloads: null,
            tags: [],
            active: false,
            versions: [],
        },
    ];