import '../App.css';
import { ScrollRestoration, useRouteError } from "react-router-dom";
import { useEffect } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { onLoad } from '../router';

export default function ErrorRoute() {
    useEffect(onLoad, []);
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Header />

            <div className='content' id='content'>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: '70vh' }}>
                    <h1>A 3D Error has occured.</h1>
                    <h3>{error.status || 500} - {error.statusText}</h3>
                    <p>{error.data || error.message}</p>
                </div>
            </div>

            <ScrollRestoration />
            <Footer />
        </>
    )
};