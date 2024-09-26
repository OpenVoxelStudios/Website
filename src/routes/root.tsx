import '../App.css';
import { useEffect } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import MainPage from '../components/main';
import { onLoad } from '../router';
import { ScrollRestoration } from 'react-router-dom';

export default function RootRoute() {
    useEffect(onLoad, []);

    return (
        <>
            <Header />

            <div className='content' id='content'>
                <MainPage />
            </div>

            <ScrollRestoration />
            <Footer />
        </>
    )
};