export const FormList = [
    "beta-test",
] as const;

export const FormData: {
    [k in typeof FormList[number]]: {
        title: string,
        description: string,
        needsDiscordVerification?: boolean,
    }
} = {
    "beta-test": {
        title: "Beta Testing Request - OpenVoxel Studios",
        description: "A cool beta testing form :)",
        needsDiscordVerification: true,
    }
};