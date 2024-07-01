import { authTypeNOTNULL } from "../types";
import { CODEREDIRECT } from "./config";

export const CLIENT_ID = "1170963763340517466";

type codeResolver = { code: string | null };

class DiscordSDK {
    CLIENT_ID: string;
    commands: {
        openExternalLink: ({ url }: { url: string }) => void;
        authorize: ({ params }: { params: any }) => Promise<codeResolver>;
        authenticate: ({ access_token }: { access_token: string }) => Promise<authTypeNOTNULL>
    };

    constructor(CLIENT_ID: string) {
        this.CLIENT_ID = CLIENT_ID;
        this.commands = {
            openExternalLink({ url }: { url: string }) {
                (window.open(url, '_blank') as Window).focus();
            },

            authorize({ }) {
                return new Promise<codeResolver>((resolve) => {
                    const ref = window.open(`https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(CODEREDIRECT)}&scope=identify`, "_blank", 'scrollbars=1,menubar=0,resizable=1,width=570,height=850');
                    ref?.focus();

                    if (!ref) return resolve({ code: null });

                    let previousHref = ref?.location.href;
                    const hrefCheckInterval = setInterval(() => {
                        if (ref && !ref.closed) {
                            if (ref.location.href !== previousHref) {
                                previousHref = ref.location.href;
                            }
                        } next(hrefCheckInterval, previousHref, ref);


                        if (new URL(previousHref || 'localhost').pathname.replace(/\//g, '') == 'code') next(hrefCheckInterval, previousHref, ref);
                    }, 1000);

                    function next(interval: NodeJS.Timeout, href: string | undefined, ref: Window) {
                        ref.close();
                        clearInterval(interval);

                        let url = new URL(href || 'localhost');

                        return resolve({ code: url.searchParams.get('code') });
                    }
                })
            },

            authenticate({ access_token }) {
                return new Promise<authTypeNOTNULL>(async (resolve) => {
                    let json = await (await fetch("https://discord.com/api/v9/users/@me", {
                        method: 'GET',
                        mode: 'cors',
                        headers: { 'Authorization': `Bearer ${access_token}` }
                    })).json();

                    resolve({
                        access_token: access_token,
                        user: json,
                        scopes: ['identify']
                    } as unknown as authTypeNOTNULL);
                })
            },
        };
    };

    ready() {
        return true;
    };
}



const discordSdk = new DiscordSDK(CLIENT_ID);


export default discordSdk;