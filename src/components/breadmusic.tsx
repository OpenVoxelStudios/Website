import { useEffect, useState } from 'react';

const musicList: {
    name: string;
    redirect: string;
    url: string;
}[] = [
        {
            name: 'Bread by Lukrembo',
            redirect: 'https://freetouse.com/music/lukrembo/bread',
            url: '/bread/musics/bread.mp3',
        },
        {
            name: 'Moonsong',
            redirect: 'https://www.youtube.com/watch?v=MtkECyiRExE',
            url: '/bread/musics/moonsong.mp3',
        },
        {
            name: 'Can\'t it be true by Zris',
            redirect: 'https://www.youtube.com/watch?v=iai-gZ1IonE',
            url: '/bread/musics/cant-it-be-true.mp3',
        },
        {
            name: 'Time (Aviators Remix)',
            redirect: 'https://www.youtube.com/watch?v=kfMQcUTtzKg',
            url: '/bread/musics/time.mp3',
        },
        {
            name: 'without form and void by uamee',
            redirect: 'https://www.youtube.com/watch?v=9n7wW95rmPI',
            url: '/bread/musics/without-form-and-void.mp3',
        },
        {
            name: 'Biscuit by Lukrembo',
            redirect: 'https://freetouse.com/music/lukrembo/biscuit',
            url: '/bread/musics/biscuit.mp3',
        },
    ]


const BreadMusic = ({ openLink }: { openLink(url: string): void }) => {
    const [isSafari, _setIsSafari] = useState(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification)))
    const [volume, setVolume] = useState(parseFloat(localStorage.getItem('bread:music/volume') || '0.2'));
    const [musicEnabled, setMusicEnabled] = useState(isSafari ? false : (localStorage.getItem('bread:music/enabled') == null ? 'true' : localStorage.getItem('bread:music/enabled')) == 'true');
    const [currentMusic, setCurrentMusic] = useState(musicList[Math.round(Math.random() * (musicList.length - 1))]);

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
        setCurrentMusic(musicList.filter(a => a.url != currentMusic.url)[Math.round(Math.random() * (musicList.filter(a => a.url != currentMusic.url).length - 1))]);
    };

    return (
        <div className='music unbreading'>
            <audio className='unbreading' id='music' src={currentMusic.url} loop={false} autoPlay={(localStorage.getItem('bread:music/enabled') == null ? 'true' : localStorage.getItem('bread:music/enabled')) == 'true'} controls={false} onEnded={songEnded} />

            <div className='musiccontrol unbreading'>
                <a className='unbreading coolclick' id="play" onClick={(ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();

                    if ((document.getElementById('music') as HTMLAudioElement).paused) setMusicEnabled(true)
                    else setMusicEnabled(false);
                }} style={{ backgroundImage: `url("/bread/${musicEnabled ? 'pause' : 'play'}.svg")` }}></a>

                <a className='unbreading coolclick' id="skip" onClick={(ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();

                    songEnded();
                }} style={{ backgroundImage: `url("/bread/skip.svg")` }}></a>
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
}

export default BreadMusic;