import '../App.css';
import { ScrollRestoration, useRouteError } from "react-router-dom";
import { useEffect } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { onLoad } from '../router';

export default function ErrorRoute({ status, statusText, message }: { status?: number, statusText?: string, message?: JSX.Element }) {
    useEffect(onLoad, []);
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Header />

            <div className='content' id='content'>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: '70vh', textAlign: 'center' }}>
                    <h1>A 3D Error has occured.</h1>
                    <h2>{status || error.status || 500} - {statusText || error.statusText}</h2>
                    <p style={{ fontSize: '18px'}}>{message || error.data || error.message}</p>
                </div>
            </div>

            <ScrollRestoration />
            <Footer />
        </>
    )
};