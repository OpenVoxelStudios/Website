import { useEffect, useState } from 'react';
import { CreatorDetailList, CreatorList } from '../data';
import './main.css';
import BannerTeam from '/banner-team.png';
import IconDownload from '/icons/Download.svg';
import LauncherImage from '/images/launcher.png';
import OVChestOpen from '/ov_chest_open.mp4';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import { scrollTop } from '../router';
import { motion } from 'framer-motion';
import useIsDesktop from '@/hooks/useIsDesktop';
import SceneAnimations from './3d/SceneAnimations';

export default function MainPage() {
    document.title = "OpenVoxel Studios";
    const isDesktop = useIsDesktop();

    function scrollSetFrame() {
        setTimeout(() => {
            let vid = document.getElementById('v0') as HTMLVideoElement;
            let box = vid?.getBoundingClientRect();
            if (box) {
                let val = ((-box.top + 200) / box.bottom / 3 * 2) * vid.duration;
                if (vid && box.bottom > 0) vid.currentTime = (isNaN(val) || val < 0) ? 0 : val;
            };

            requestAnimationFrame(scrollSetFrame);
        }, 1000 / 30)
    };

    useEffect(() => {
        requestAnimationFrame(scrollSetFrame);
    }, []);

    const [profile, setProfile] = useState(Object.keys(CreatorDetailList)[Math.floor(Math.random() * Object.keys(CreatorDetailList).length)])

    return (
        <>
            <motion.div className='mainpage'
                initial={{ opacity: 0.7, scale: 0.8, y: '5%' }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 2, type: 'spring', bounce: 0.3 }}
            >
                <div className='main'>
                    <h1>Minecraft Maps,</h1>
                    <h1>Without Mods.</h1>
                    <Link to='/games/' onClick={scrollTop} className='coolclick glass maps'>
                        <img className='notextselection' src={IconDownload} />
                        View Maps
                    </Link>

                    <video className='notextselection' id="v0" autoPlay={true} muted={true} playsInline={true} onPlay={(e) => e.currentTarget.pause()} controls={false}>
                        <source className='notextselection' type="video/mp4;" src={OVChestOpen}></source>
                    </video>
                </div>
            </motion.div>

            <div className='arg'>
                <div className='notextselection glass img'>
                    <img src={BannerTeam} loading='lazy' decoding='async' />
                </div>

                <div className='text'>
                    <h1>No Mods Required.</h1>
                    <p><b>All maps are 100% vanilla</b> and require no mods, thanks to Datapacks and Resource packs!<br />* Some Maps may use Mods to enhance the experience, but are not required!</p>
                </div>
            </div>

            {/* <div className='arg'>
                <div className='notextselection glass img'>
                    <img src={BannerTeam} />
                </div>

                <div className='text'>
                    <h1>Hall of Fame.</h1>
                    <p>Check out our <b>Hall of Fame</b> and see every contest we've taken part in and won!</p>
                    <Link to='/halloffame/' onClick={scrollTop}>
                        Click here to check it out!
                    </Link>
                </div>
            </div> */}

            <div className='arg'>
                <div className='text'>
                    <h1>Fancy Animations.</h1>
                    <p>We brought <b>amazing animations</b> into vanilla Minecraft using <a href='https://animated-java.dev' target='_blank'>Animated Java</a> and <a href='https://www.blockbench.net' target='_blank'>Blockbench</a>!<br />An <b>exhibition room</b> is in the works! You will be able to see the models in 3D and download some of them!</p>
                </div>

                <div className='notextselection glass img' style={{ animation: isDesktop ? '' : 'float 6s ease-in-out infinite', minHeight: isDesktop ? '400px' : undefined }}>
                    {isDesktop &&
                        <SceneAnimations />
                    }
                    {!isDesktop &&
                        <img src='/banner-team.png' loading='lazy' decoding='async' />
                    }
                </div>
            </div>

            <div className='arg'>
                <div className='notextselection glass img'>
                    <img src={LauncherImage} loading='lazy' decoding='async' />
                </div>

                <div className='text'>
                    <h1>Custom Launcher.</h1>
                    <p><b>Play all our games effortlessly in one place!</b><br />The Launcher also comes with optimization Mods to even work on slower computers.</p>
                </div>
            </div>

            <div className='team' id='team'>
                <div className='notextselection glass heads'>
                    {Object.keys(CreatorDetailList).map((creator, index) =>
                        <motion.div className={(profile == creator ? 'glass ' : '') + 'head'} key={index} onClick={() => setProfile(creator)}
                            initial={{ scale: 0.6, opacity: 0.6 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                        >
                            <img src={`/heads/${CreatorDetailList[creator as CreatorList].minecraft}.png`} loading='lazy' decoding='async' />
                        </motion.div>
                    )}
                </div>

                <div className='glass notextselection description'>
                    <div className='notextselection top'>
                        <img className='notextselection' src={`/heads/${CreatorDetailList[profile as CreatorList].minecraft}.png`} loading='lazy' decoding='async' />
                        <h1 className='yestextselection'>{profile}</h1>
                    </div>
                    <div className='nottop'>
                        <Markdown remarkPlugins={[remarkGfm]}>{CreatorDetailList[profile as CreatorList].description || "Bro forgot to write something about himself 💀💀"}</Markdown>
                    </div>
                </div>
            </div>
        </>
    )
};