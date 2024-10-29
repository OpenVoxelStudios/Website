import { useEffect, useState } from 'react';
import { CreatorDetailList, CreatorList } from '../data';
import './main.css';
import OVChestOpen from '/ov_chest_open.mp4';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import { scrollTop } from '../router';
import { motion } from 'framer-motion';
import useIsDesktop from '@/hooks/useIsDesktop';

const DesktopScene = () => {
    const [SceneComponent, setSceneComponent] = useState<React.ComponentType | null>(null);

    useEffect(() => {
        // Dynamically import the Three.js component and its dependencies
        import('./3d/SceneAnimations').then((module) => {
            setSceneComponent(() => module.default);
        });
    }, []);

    if (!SceneComponent) {
        return <div className="loading">Loading 3D Scene...</div>;
    }

    return <SceneComponent />;
};


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
                        <img className='notextselection' src='/icons/Download.svg' />
                        View Maps
                    </Link>

                    <video className='notextselection' id="v0" autoPlay={true} muted={true} playsInline={true} onPlay={(e) => e.currentTarget.pause()} controls={false}>
                        <source className='notextselection' type="video/mp4;" src={OVChestOpen}></source>
                    </video>
                </div>
            </motion.div>


            <div className='arg'>
                <div className='notextselection glass img animatedarg'>
                    <img src='/banner-team.png' loading='lazy' decoding='async' />
                </div>

                <div className='text'>
                    <h1>No Mods Required.</h1>
                    <motion.p
                        initial={{ opacity: 0, y: '20px' }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.1, ease: 'easeIn', type: 'spring', bounce: 0.5 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <b>All maps are 100% vanilla</b> and require no mods, thanks to Datapacks and Resource packs!<br />* Some Maps may use Mods to enhance the experience, but are not required!
                    </motion.p>
                </div>
            </div>

            <div className='arg'>
                <div className='text'>
                    <h1>Fancy Animations.</h1>
                    <motion.p
                        initial={{ opacity: 0, y: '20px' }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.1, ease: 'easeIn', type: 'spring', bounce: 0.5 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        We brought <b>amazing animations</b> into vanilla Minecraft using <a href='https://animated-java.dev' target='_blank'>Animated Java</a> and <a href='https://www.blockbench.net' target='_blank'>Blockbench</a>!<br />An <b>exhibition room</b> is in the works! You will be able to see the models in 3D and download some of them!
                    </motion.p>
                </div>

                <div className={'notextselection glass img' + (isDesktop ? '' : ' animatedarg')} style={{ minHeight: isDesktop ? '400px' : undefined }}>
                    {isDesktop ? (
                        <DesktopScene />
                    ) : (
                        <img src='/games/banners/yer2.png' loading='lazy' decoding='async' />
                    )}
                </div>
            </div>

            <div className='arg'>
                <div className='notextselection glass img animatedarg'>
                    <img src='/halloffame/mewoster.png' />
                </div>

                <div className='text'>
                    <h1>Hall of Fame.</h1>
                    <motion.p
                        initial={{ opacity: 0, y: '20px' }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.1, ease: 'easeIn', type: 'spring', bounce: 0.5 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Check out our <b>Hall of Fame</b> and see every contest we've taken part in and won!
                    </motion.p>
                    <Link to='/halloffame/' onClick={scrollTop}>
                        Click here to check it out!
                    </Link>
                </div>
            </div>

            <div className='arg'>
                <div className='text'>
                    <h1>Custom Launcher.</h1>
                    <motion.p
                        initial={{ opacity: 0, y: '20px' }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.1, ease: 'easeIn', type: 'spring', bounce: 0.5 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <b>Play all our games effortlessly in one place!</b><br />The Launcher also comes with optimization Mods to even work on slower computers.
                    </motion.p>
                </div>

                <div className='notextselection glass img animatedarg'>
                    <img src='/images/launcher.png' loading='lazy' decoding='async' />
                </div>
            </div>

            <div className='team' id='team'>
                <motion.div
                    className='notextselection glass heads'
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {Object.keys(CreatorDetailList).map((creator, index) => (
                        <motion.div
                            className={(profile == creator ? 'glass ' : '') + 'head'}
                            key={index}
                            onClick={() => setProfile(creator)}
                            variants={{
                                hidden: { scale: 0.4, y: '20px' },
                                visible: { scale: 1, y: 0, transition: { duration: 0.3 } }
                            }}
                        >
                            <img src={`/heads/${CreatorDetailList[creator as CreatorList].minecraft}.png`} loading='lazy' decoding='async' />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className='glass notextselection description'
                    layout
                    transition={{ ease: "easeIn", duration: 0.2 }}
                >
                    <div className='notextselection top'>
                        <img
                            className='notextselection'
                            src={`/heads/${CreatorDetailList[profile as CreatorList].minecraft}.png`}
                            loading='lazy'
                            decoding='async'
                        />
                        <h1 className='yestextselection'>{profile}</h1>
                    </div>
                    <div className='nottop'>
                        <Markdown remarkPlugins={[remarkGfm]}>
                            {CreatorDetailList[profile as CreatorList].description || "Bro forgot to write something about himself 💀💀"}
                        </Markdown>
                    </div>
                </motion.div>

            </div>
        </>
    )
};