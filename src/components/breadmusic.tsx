import { useEffect, useRef, useState } from 'react';
// import { Client, Room } from 'colyseus.js';
// import { MyRoomState } from '../../../server/Room';
// import discordSdk from '../functions/discordSDK';

const musicList: {
    name: string;
    redirect: string;
    url: string;
}[] = [
        {
            name: 'Bread by Lukrembo',
            redirect: 'https://freetouse.com/music/lukrembo/bread',
            url: '/bakingbread/musics/bread.mp3',
        },
        {
            name: 'Moonsong',
            redirect: 'https://www.youtube.com/watch?v=MtkECyiRExE',
            url: '/bakingbread/musics/moonsong.mp3',
        },
        {
            name: 'Can\'t it be true by Zris',
            redirect: 'https://www.youtube.com/watch?v=iai-gZ1IonE',
            url: '/bakingbread/musics/cant-it-be-true.mp3',
        },
        {
            name: 'Time (Aviators Remix)',
            redirect: 'https://www.youtube.com/watch?v=kfMQcUTtzKg',
            url: '/bakingbread/musics/time.mp3',
        },
        {
            name: 'without form and void by uamee',
            redirect: 'https://www.youtube.com/watch?v=9n7wW95rmPI',
            url: '/bakingbread/musics/without-form-and-void.mp3',
        },
        {
            name: 'Biscuit by Lukrembo',
            redirect: 'https://freetouse.com/music/lukrembo/biscuit',
            url: '/bakingbread/musics/biscuit.mp3',
        },
        {
            name: 'Salomon\'s Theme - BF3',
            redirect: 'https://www.youtube.com/watch?v=bps8tOTMWEk',
            url: '/bakingbread/musics/salomon.mp3'
        },
        {
            name: 'This Is For You by Lukrembo',
            redirect: 'https://freetouse.com/music/lukrembo/this-is-for-you',
            url: '/bakingbread/musics/this-is-for-you.mp3'
        },
        {
            name: 'Lofi Of Bread by oh wowie!427',
            redirect: 'https://soundcloud.com/cookie-kinsun/lofi-of-bread',
            url: '/bakingbread/musics/lofi-bread.mp3'
        }
    ];



export default function BreadMusic({ openLink }: { openLink(url: string): void }) {
    const [volume, setVolume] = useState(parseFloat(localStorage.getItem('bread:music/volume') == null ? '0.2' : localStorage.getItem('bread:music/volume') as unknown as string));
    const [musicEnabled, setMusicEnabled] = useState(false);
    const [currentMusic, setCurrentMusic] = useState(musicList[Math.round(Math.random() * (musicList.length - 1))]);
    const [listenMode, setListenMode] = useState<'solo' | 'group'>('solo')//(localStorage.getItem('bread:music/listenmode') as 'solo' | 'group' || 'solo');
    const intentional = useRef(false);
    // const reconnectToken = useRef('');
    // const [room, setRoom] = useState<undefined | Room<MyRoomState>>(undefined);

    // async function joinRoom() {
    //     // Colyseus client
    //     if (room) return;
    //     const client = new Client(`wss://${location.host}/music`);

    //     if (reconnectToken.current) return client.reconnect(reconnectToken.current)
    //     else reconnectToken.current = 'pending';

    //     let roomy = await client.joinOrCreate<MyRoomState>('bakingbread', { roomName: discordSdk.instanceId as string });
    //     console.warn('Room joined or created.');

    //     reconnectToken.current = roomy.reconnectionToken;
    //     roomy.onLeave(() => {
    //         if (reconnectToken.current && reconnectToken.current != 'pending') client.reconnect(reconnectToken.current);
    //     });

    //     roomy.onMessage('forceupdate', (newstate) => updateStuff(newstate as MyRoomState));

    //     setRoom(room)
    // };

    // useEffect(() => {
    //     localStorage.setItem('bread:music/listenmode', listenMode);

    //     if (listenMode == 'group') {
    //         joinRoom();
    //     }

    //     else if (reconnectToken.current && listenMode == 'solo') {
    //         room?.leave(true)
    //             .then(() => {
    //                 reconnectToken.current = '';
    //             })
    //     };
    // }, [listenMode])


    // useEffect(() => {
    //     if (room && room.state) updateStuff(room.state);

    //     if (room) {
    //         room?.onStateChange((state) => updateStuff(state));
    //     }
    // }, [room]);

    // function updateStuff(state: MyRoomState) {
    //     console.error('Updating From Room State', state);

    //     if (state?.playState !== undefined && state?.playState != musicEnabled) setMusicEnabled(state.playState);
    //     console.error('Setting music to', state.music);
    //     if (state?.music !== undefined && state?.music != currentMusic.url) {
    //         intentional.current = false;
    //         setCurrentMusic(musicList.filter(a => a.url == state.music)[0]);
    //     }

    //     if (state.musicStartedAt) {
    //         let shouldBe = (state.musicStartedAt <= 1000) ? state.musicStartedAt : Math.round(Date.now() / 1000) - state.musicStartedAt;
    //         console.error('musicstartedat', state?.musicStartedAt, shouldBe);

    //         let element = (document.getElementById('music') as HTMLAudioElement);
    //         console.log(element.currentTime);
    //         element.currentTime = shouldBe;
    //         console.log(element.currentTime);
    //     }
    // };

    useEffect(() => {
        (document.getElementById('music') as HTMLAudioElement).volume = volume;
        localStorage.setItem('bread:music/volume', String(volume));
    }, [volume]);

    useEffect(() => {
        let element = (document.getElementById('music') as HTMLAudioElement);
        localStorage.setItem('bread:music/enabled', String(musicEnabled));

        if (element.paused && musicEnabled) element.play();
        else if (!element.paused && !musicEnabled) element.pause();
    }, [musicEnabled]);

    function songEnded() {
        intentional.current = true;
        let picked = musicList.filter(a => a.url != currentMusic.url)[Math.round(Math.random() * (musicList.filter(a => a.url != currentMusic.url).length - 1))];
        setCurrentMusic(picked)

        // room?.send('music', picked.url);
    };

    return (
        <div className='music unbreading'>
            <audio className='unbreading' id='music' src={currentMusic?.url} loop={false} autoPlay={(localStorage.getItem('bread:music/enabled') == null ? 'true' : localStorage.getItem('bread:music/enabled')) == 'true'} controls={false} onEnded={songEnded} onPlay={() => {
                // if (room?.state.musicStartedAt) {
                //     if (intentional.current) return intentional.current = false;
                //     let shouldBe = (room?.state.musicStartedAt <= 1000) ? room?.state.musicStartedAt : Math.round(Date.now() / 1000) - room?.state.musicStartedAt;


                //     let element = (document.getElementById('music') as HTMLAudioElement);

                //     if (Math.abs(element.currentTime - shouldBe) > 1) element.currentTime = shouldBe;
                // }
            }} />

            <div className='musiccontrol unbreading'>
                <a className='unbreading coolclick' id="listenmode" onClick={(ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();

                    // setListenMode(v => v == 'solo' ? 'group' : 'solo');
                    setListenMode('solo');
                }} style={{ backgroundImage: `url("/bakingbread/${listenMode == 'solo' ? 'person' : 'persons'}.svg")` }}></a>

                <a className='unbreading coolclick' id="play" onClick={(ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();

                    let isPaused = (document.getElementById('music') as HTMLAudioElement);

                    // room?.send('playstate', { state: isPaused.paused ? 'play' : 'pause', offset: isPaused.currentTime });

                    if (isPaused.paused) setMusicEnabled(true)
                    else setMusicEnabled(false);
                }} style={{ backgroundImage: `url("/bakingbread/${musicEnabled ? 'pause' : 'play'}.svg")` }}></a>

                <a className='unbreading coolclick' id="skip" onClick={(ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();

                    songEnded();
                }} style={{ backgroundImage: `url("/bakingbread/skip.svg")` }}></a>
            </div>

            <input className='unbreading' type="range" min="0" max="1" defaultValue={parseFloat(localStorage.getItem('bread:music/volume') || '0.2')} step="0.01" id="music-volume" onInput={(ev) => {
                ev.preventDefault();
                ev.stopPropagation();

                setVolume(parseFloat(ev.currentTarget.value));
            }} />

            <a className='unbreading coolclick copyright' style={{ cursor: 'pointer' }} onClick={(ev) => {
                ev.preventDefault();
                ev.stopPropagation();

                openLink(currentMusic.redirect);
            }}>Music: <span style={{ textDecoration: 'underline', marginLeft: '5px' }}>{currentMusic.name}</span></a>
        </div>
    )
};