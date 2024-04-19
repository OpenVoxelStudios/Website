import './main.css';
import BannerTeam from '/banner-team.png';
import IconDownload from '/icons/Download.svg';
import LauncherImage from '/images/launcher.png';
import OVChestOpen from '/ov_chest_open.mp4';

const MainPage = ({ localRedirect }: { localRedirect: Function }) => {
    document.title = "OpenVoxel Studios";

    function scrollSetFrame() {
        let vid = document.getElementById('v0') as HTMLVideoElement;
        setTimeout(() => {
            if (vid && vid.getBoundingClientRect().bottom > 0) vid.currentTime = ((-vid.getBoundingClientRect().top + 150) / vid.getBoundingClientRect().bottom / 3 * 2) * vid.duration;

            requestAnimationFrame(scrollSetFrame);
        }, 1000 / 30)
    };

    requestAnimationFrame(scrollSetFrame);


    return (
        <>
            <div className='mainpage'>
                <div className='main'>
                    <h1>Minecraft Maps,</h1>
                    <h1>Without Mods.</h1>
                    <div className='coolclick glass maps' onClick={() => localRedirect("/games/", 'games', undefined, true)}>
                        <img src={IconDownload} />
                        View Maps
                    </div>

                    <video id="v0" autoPlay={true} muted={true} playsInline={true} onPlay={(e) => e.currentTarget.pause()}>
                        <source type="video/mp4;" src={OVChestOpen}></source>
                    </video>
                </div>
            </div>

            <div className='arg'>
                <div className='text'>
                    <h1>No Mods Required.</h1>
                    <p><b>All maps are 100% vanilla and require no mods at all to work!</b> Thanks to Datapacks and Resource packs.<br />* Some Maps may use Mods to enhance the experience, but are not required!</p>
                </div>

                <div className='glass img'>
                    <img src={BannerTeam} />
                </div>
            </div>

            <div className='arg'>
                <div className='glass img'>
                    <img src={LauncherImage} />
                </div>

                <div className='text'>
                    <h1>Custom Launcher.</h1>
                    <p><b>Play all our games effortlessly in one place!</b><br />Click on a game to download it and play. The Launcher also comes with optimization Mods to even work on slower computers.</p>
                </div>
            </div>
        </>
    )
}

export default MainPage;