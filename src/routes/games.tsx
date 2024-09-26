import '../App.css';
import { useEffect } from 'react';
import Footer from '../components/footer';
import Games from '../components/games';
import Header from '../components/header';
import { onLoad } from '../router';
import { ScrollRestoration } from 'react-router-dom';

export default function GamesRoute() {
    useEffect(onLoad, []);

    return (
        <>
            <Header />

            <div className='content' id='content'>
                <Games />
            </div>

            <ScrollRestoration />
            <Footer />
        </>
    )
};