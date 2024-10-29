import '../App.css';
import { Link, ScrollRestoration, useRouteError } from "react-router-dom";
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
                    <p style={{ fontSize: '18px' }}>{message || error.data || error.message}</p>

                    <Link to='/' className='coolclick glass' style={{ padding: '15px', fontSize: '20px', fontWeight: 'bold', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                        <img src='/logo.png' style={{ width: '50px', height: '50px' }} alt='OpenVoxel Studios Logo' />
                        Return Home
                    </Link>
                </div>
            </div>

            <ScrollRestoration />
            <Footer />
        </>
    )
};