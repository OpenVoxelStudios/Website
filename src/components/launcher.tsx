import './launcher.css';
import LauncherImage from '/images/launcher.png';

import LogoApple from '/images/apple.svg';
import LogoWindows from '/images/windows.svg';
import LogoLinux from '/images/linux.svg';
import { links } from '../data';

const Launcher = () => {
    document.title = "Launcher Download - OpenVoxel Studios";
    // Worst OS detection but hey it works lol
    // If you have better, consider doing a push request
    // Although, launcher not available for other OS soooo i kinda dont care right now
    // But lol you are watching the comments and i'm happy to know it...
    // How can i be happy if i don't know if you are reading it as i write
    // I mean... Right now you are reading this so i would be happy but
    // i don't know that you are reading it because i can't read your brain
    // Or can't I?
    let os: 'mac' | 'windows' = navigator.userAgent.toLowerCase().includes('mac') ? 'mac' : 'windows';

    let downloadPrefix = 'https://github.com/OpenVoxelStudios/OpenVoxelLauncher/releases/latest/download/';
    let quickDownload = `${downloadPrefix}${os == 'mac' ? 'OpenVoxel-Launcher-universal.dmg' : 'OpenVoxel-Launcher-Setup.exe'}`;
    let downloads = {
        portable: {
            mac_arm: 'OpenVoxel-Launcher-arm64-mac.zip',
            mac_x64: 'OpenVoxel-Launcher-mac.zip',
            windows: 'OpenVoxel-Launcher.exe',
            linux_x64: 'OpenVoxel-Launcher-x86_64.AppImage',
        },
        installer: {
            mac_arm: 'OpenVoxel-Launcher-arm64.dmg',
            mac_x64: 'OpenVoxel-Launcher-x64.dmg',
            windows: 'OpenVoxel-Launcher-Setup.exe',
        },
    };


    return (
        <>
            <div className='splash'>
                <div className='download-recommended'>
                    <h1>Download for<br /><i>{os == 'mac' ? 'Mac' : 'Windows'}!</i></h1>

                    <a className='download coolclick glass' href={quickDownload}><b>Download</b></a>
                </div>

                <img className='glass coolclick' src={LauncherImage} />
            </div>

            <h1 className='maintitle'>All Downloads</h1>

            <div className='downloader'>
                <div className='os glass'>
                    <div style={{ background: 'url(/images/lobby/morning.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='bg' />

                    <img src={LogoWindows} />
                    <h1>Windows</h1>

                    <a className='download coolclick glass' href={downloadPrefix + downloads.installer.windows}><b>Download</b></a>
                </div>

                <div className='os glass'>
                    <div style={{ background: 'url(/images/lobby/day.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='bg' />

                    <img src={LogoApple} />
                    <h1>Mac</h1>

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <a className='download coolclick glass half-left' href={downloadPrefix + downloads.installer.mac_x64}><b>Intel</b></a>
                        <a className='download coolclick glass half-right' href={downloadPrefix + downloads.installer.mac_arm}><b>Apple</b></a>
                    </div>
                </div>

                <div className='os glass'>
                    <div style={{ background: 'url(/images/lobby/night.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='bg' />

                    <img src={LogoLinux} />
                    <h1>Linux</h1>

                    <a style={{ width: '60%', fontSize: '24px', textAlign: 'center' }}>No installer on Linux for now... Check the Portable Download right below!</a>
                </div>
            </div>

            <h1 className='maintitle'>Need a portable version?</h1>

            <div className='downloader'>
                <div className='os glass'>
                    <h1>Windows</h1>

                    <a className='download coolclick glass' href={downloadPrefix + downloads.portable.windows}><b>Download</b></a>
                </div>

                <div className='os glass'>
                    <h1>Mac</h1>

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <a className='download coolclick glass half-left' href={downloadPrefix + downloads.portable.mac_x64}><b>Intel</b></a>
                        <a className='download coolclick glass half-right' href={downloadPrefix + downloads.portable.mac_arm}><b>Apple</b></a>
                    </div>
                </div>

                <div className='os glass'>
                    <h1>Linux</h1>

                    <a className='download coolclick glass' href={downloadPrefix + downloads.portable.linux_x64}><b>Download</b></a>
                </div>
            </div>

            <h1 className='maintitle'>Need help with the Launcher?</h1>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <a className='yaybutton coolclick glass' href={links.launcherwiki} target='_blank'><b>Check the Documentation</b></a>
            </div>
        </>
    )
}

export default Launcher;