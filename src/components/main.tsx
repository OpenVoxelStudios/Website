import { useState } from 'react';
import { CreatorDetailList, CreatorList } from '../data';
import './main.css';
import BannerTeam from '/banner-team.png';
import IconDownload from '/icons/Download.svg';
import LauncherImage from '/images/launcher.png';
import OVChestOpen from '/ov_chest_open.mp4';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MainPage = ({ localRedirect }: { localRedirect: Function }) => {
    document.title = "OpenVoxel Studios";

    function scrollSetFrame() {
        let vid = document.getElementById('v0') as HTMLVideoElement;
        setTimeout(() => {
            let val = ((-vid.getBoundingClientRect().top + 150) / vid.getBoundingClientRect().bottom / 3 * 2) * vid.duration;
            if (vid && vid.getBoundingClientRect().bottom > 0) vid.currentTime = isNaN(val) ? 0 : val;

            requestAnimationFrame(scrollSetFrame);
        }, 1000 / 30)
    };

    requestAnimationFrame(scrollSetFrame);

    const [profile, setProfile] = useState(Object.keys(CreatorDetailList)[Math.floor(Math.random() * Object.keys(CreatorDetailList).length)])

    return (
        <>
            <div className='mainpage'>
                <div className='main'>
                    <h1>Minecraft Maps,</h1>
                    <h1>Without Mods.</h1>
                    <div className='coolclick glass maps' onClick={() => localRedirect("/games/", 'games', undefined, true)}>
                        <img className='notextselection' src={IconDownload} />
                        View Maps
                    </div>

                    <video className='notextselection' id="v0" autoPlay={true} muted={true} playsInline={true} onPlay={(e) => e.currentTarget.pause()} controls={false}>
                        <source className='notextselection' type="video/mp4;" src={OVChestOpen}></source>
                    </video>
                </div>
            </div>

            <div className='arg'>
                <div className='text'>
                    <h1>No Mods Required.</h1>
                    <p><b>All maps are 100% vanilla</b> and require no mods, thanks to Datapacks and Resource packs!<br />* Some Maps may use Mods to enhance the experience, but are not required!</p>
                </div>

                <div className='notextselection glass img'>
                    <img src={BannerTeam} />
                </div>
            </div>

            <div className='arg'>
                <div className='notextselection glass img'>
                    <img src={LauncherImage} />
                </div>

                <div className='text'>
                    <h1>Custom Launcher.</h1>
                    <p><b>Play all our games effortlessly in one place!</b><br />The Launcher also comes with optimization Mods to even work on slower computers.</p>
                </div>
            </div>

            <div className='team'>
                <div className='notextselection glass heads'>
                    {Object.keys(CreatorDetailList).map((creator, index) =>
                        <div className={(profile == creator ? 'glass ' : '') + 'head'} key={index} onClick={() => setProfile(creator)}>
                            <img src={`/heads/${CreatorDetailList[creator as CreatorList].minecraft}.png`} />
                        </div>
                    )}
                </div>

                <div className='glass notextselection description'>
                    <div className='notextselection top'>
                        <img className='notextselection' src={`/heads/${CreatorDetailList[profile as CreatorList].minecraft}.png`} />
                        <h1 className='yestextselection'>{profile}</h1>
                    </div>
                    <div className='nottop'>
                        <Markdown remarkPlugins={[remarkGfm]}>{CreatorDetailList[profile as CreatorList].description || "Bro forgot to write something about himself 💀💀"}</Markdown>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;