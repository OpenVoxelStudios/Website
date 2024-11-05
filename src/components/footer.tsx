import { useState } from 'react';
import './footer.css';
import Icon from '/logo.webp';
import { Link } from 'react-router-dom';
import { links } from '@/data';

export default function Footer() {
    const [BREADMAN, _] = useState(Math.round(Math.random() * 20) == 1);

    return (
        <>
            <div className="glass footer">
                <div className='top'>
                    <div className={'main' + (BREADMAN ? ' coolclick' : '')} onClick={(ev) => {
                        if (BREADMAN) {
                            ev.preventDefault();
                            ev.stopPropagation();

                            location.href = '/bakingbread/';
                        }
                    }} style={{ justifyContent: 'start' }}>
                        <img className='notextselection logo' src={!BREADMAN ? Icon : '/bakingbread/breadman.png'} alt='OpenVoxel Studios Logo' />
                        <p className='title'>{!BREADMAN ? 'OpenVoxel Studios' : 'BreadVoxel??'}</p>
                    </div>

                    <p className='subtitle' style={{ textAlign: 'end' }}>
                        Minecraft Maps, without Mods.
                        <br />
                        <Link to={links.kofi as string} target='_blank' className='subtitle smalltitle' style={{ textDecoration: 'underline', paddingTop: '15px' }}>
                            Support Us on Ko-fi!
                        </Link>
                    </p>
                </div>
                <div className='notextselection small'>
                    <div className='notextselection coolclick glass backtotop' id='scrollToTopBtn' onClick={(ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();

                        (document.getElementById('root') as HTMLDivElement).scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}></div>

                    <br />
                    <p className='yestextselection actuallybigger'>Copyright © OpenVoxel Studios 2024</p>
                    <br />
                    <Link to='mailto:contact@openvoxel.studio' className='yestextselection contactmail' style={{
                        textDecoration: 'underline',
                    }}>contact@openvoxel.studio
                    </Link>
                    <br />
                    <br />
                    <p className='yestextselection'>NOT AN OFFICIAL MINECRAFT SERVICE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</p>
                </div>
            </div>
        </>
    )
};