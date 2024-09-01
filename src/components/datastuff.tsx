import { useEffect } from 'react';
import './datastuff.css';
import OVChestOpen from '/logo.mp4';

export default function DataStuff({ hidden, sethidden }: { hidden: boolean, sethidden: Function }) {
    useEffect(() => {
        const onPageLoad = () => {
            sethidden(false);
            (document.querySelector('meta[name="theme-color"]') as HTMLMetaElement)?.setAttribute('content', '#3e4152');
        };

        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            return () => window.removeEventListener('load', onPageLoad);
        };
    });

    return (
        <div className='datastuff' style={{ display: hidden ? "flex" : "none" }}>

            <video className='notextselection' autoPlay={true} muted={true} playsInline={true} loop={true}>
                <source className='notextselection' type="video/mp4;" src={OVChestOpen}></source>
            </video>

            <h1>Loading...</h1>
        </div>
    )
};