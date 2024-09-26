import '../App.css';
import { useEffect } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import HallOfFame from '../components/halloffame';
import { onLoad } from '../router';
import { ScrollRestoration } from 'react-router-dom';

export default function HallOfFameRoute() {
    useEffect(onLoad, []);

    return (
        <>
            <Header />

            <div className='content' id='content'>
                <HallOfFame />
            </div>

            <ScrollRestoration />
            <Footer />
        </>
    )
};