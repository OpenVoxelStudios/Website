import { useEffect } from 'react';
import './datastuff.css';
import LoadingImg from '/logo.gif';

const DataStuff = ({ hidden, sethidden }: { hidden: boolean, sethidden: Function }) => {
    useEffect(() => {
        const onPageLoad = () => {
            sethidden(false);
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
            <img src={LoadingImg} />
            <h1>Loading...</h1>
        </div>
    )
}

export default DataStuff;