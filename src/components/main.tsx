import './main.css';
import IconDownload from '/icons/Download.svg';
import OVChestOpen from '/ov_chest_open.mp4';

function MainPage() {

    function scrollSetFrame() {
        setTimeout(() => {
            let vid = document.getElementById('v0') as HTMLVideoElement;

            vid.currentTime = ((-vid.getBoundingClientRect().top + 150) / vid.getBoundingClientRect().bottom / 3 * 2) * vid.duration;

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
                    <div className='coolclick glass maps' onClick={() => location.href = "/games/"}>
                        <img src={IconDownload} />
                        View Maps
                    </div>

                    <video id="v0">
                        <source type="video/mp4;" src={OVChestOpen}></source>
                    </video>
                </div>
            </div>

            <div className='arg'>
                <div className='text'>
                    <h1>Some title haha</h1>
                    <p>No stop it Dani- Haha subtitle go BRRR</p>
                </div>

                <div className='glass img'>
                    <img src={IconDownload} />
                </div>
            </div>

            <div className='arg'>
                <div className='glass img'>
                    <img src={IconDownload} />
                </div>

                <div className='text'>
                    <h1>No Mods Required.</h1>
                    <p>100% vanilla. haha yes</p>
                </div>
            </div>
        </>
    )
}

export default MainPage;