import { useEffect, useRef, useState } from 'react';
import BakingBread from './bakingbread';
import { authType, authTypeNOTNULL } from '../types';
import { BACKEND, CODEREDIRECT, INSTANTINIT } from '../functions/config';
import discordSdk, { CLIENT_ID } from '../functions/discordSDK';
import Leaderboard from './breadleaderboard';



function Bread({ showLeaderboard }: { showLeaderboard: boolean }) {
    const [auth, setAuth] = useState<authType>(JSON.parse(localStorage.getItem('authinging') as string) as authType);
    const [isAuthing, setIsAuthing] = useState(false);
    const hasInitialized = useRef(INSTANTINIT);
    const lastCheck = useRef(0);

    async function hasValidSession() {
        return await (await fetch(BACKEND + "/api/validate", {
            mode: 'cors',
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': localStorage.getItem('authkey') as string
            },
        })).text();
    };

    async function setupDiscordSdk() {
        console.warn('Trying to login');
        if (isAuthing) return;
        setIsAuthing(true);

        await discordSdk.ready();
        console.warn('DISCORD SDK READY!');

        // Authorize with Discord Client
        const { code } = await discordSdk.commands.authorize({
            client_id: CLIENT_ID,
            response_type: "code",
            state: "",
            prompt: "none",
            // More info on scopes here: https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
            scope: [
                // Activities will launch through app commands and interactions of user-installable apps.
                // https://discord.com/developers/docs/tutorials/developing-a-user-installable-app#configuring-default-install-settings-adding-default-install-settings
                // 'applications.commands',

                // "applications.builds.upload",
                // "applications.builds.read",
                // "applications.store.update",
                // "applications.entitlements",
                // "bot",
                'identify',
                // "connections",
                // "email",
                // "gdm.join",
                // 'guilds',
                // "guilds.join",
                // 'guilds.members.read',
                // "messages.read",
                // "relationships.read",
                // 'rpc.activities.write',
                // "rpc.notifications.read",
                // "rpc.voice.write",
                // 'rpc.voice.read',
                // "webhook.incoming",
            ],
        });

        if (!code) return;
        else console.log('Got Discord login code.');

        // Retrieve an access_token from your activity's server
        const response = await fetch(BACKEND + "/api/token", {
            mode: 'cors',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                code,
                redirect_uri: CODEREDIRECT,
            }),
        });

        const { access_token, publicProfile, authkey } = await response.json();
        localStorage.setItem('authkey', authkey);


        // Authenticate with Discord client (using the access_token)
        let authing = (await discordSdk.commands.authenticate({
            access_token,
        }) as authTypeNOTNULL);

        authing.publicProfile = publicProfile as boolean;
        authing.user.avatarURL = (authing.user.avatar ? `https://cdn.discordapp.com/avatars/${authing.user.id}/${authing.user.avatar}.png?size=256` : `https://cdn.discordapp.com/embed/avatars/${(BigInt(authing.user.id) >> 22n) % 6n}.png`);

        localStorage.setItem('user:avatar', authing.user.avatarURL);
        localStorage.setItem('user:name', authing.user.username);

        console.log(`Discord logged in as @${authing.user.username}`);

        setAuth(authing);
        localStorage.setItem('authinging', JSON.stringify(authing));
        console.warn('AUTHED SUCCESSFULLY.');
        setIsAuthing(false);
        lastCheck.current = Date.now();
    }

    async function openLink(url: string) {
        console.warn('Trying to open URL', url);
        if (!auth) return console.error('Not authed');
        return await discordSdk.commands.openExternalLink({ url });
    };

    useEffect(() => {
        if (!hasInitialized.current) {
            setupDiscordSdk();
            hasInitialized.current = true;
        }
    }, []);

    useEffect(() => {
        if (!showLeaderboard || Date.now() - lastCheck.current < 10 * 60 * 1000) return;

        new Promise(async () => {
            let isValid = await hasValidSession()


            if (!isValid) setupDiscordSdk();
            else lastCheck.current = Date.now();
        })
    }, [showLeaderboard])

    return (
        <>
            <BakingBread hidden={showLeaderboard} openLink={openLink} />
            <Leaderboard hidden={!showLeaderboard} auth={auth} setAuth={setAuth} />
        </>
    )
}

export default Bread;