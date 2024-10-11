import { useState } from 'react';
import './footer.css';
import Icon from '/logo.png';
import { Link } from 'react-router-dom';

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
                    }}>
                        <img className='notextselection logo' src={!BREADMAN ? Icon : '/bakingbread/breadman.png'} />
                        <a className='title'>{!BREADMAN ? 'OpenVoxel Studios' : 'BreadVoxel??'}</a>
                    </div>

                    <a className='subtitle'>Minecraft Maps, without Mods.</a>
                </div>
                <div className='notextselection small'>
                    <div className='notextselection coolclick glass backtotop' id='scrollToTopBtn' onClick={(ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();

                        (document.getElementById('root') as HTMLDivElement).scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}></div>

                    <br />
                    <a className='yestextselection actuallybigger'>Copyright © OpenVoxel Studios 2024</a>
                    <br />
                    <Link to='mailto:contact@openvoxel.studio' className='yestextselection contactmail' style={{
                        textDecoration: 'underline',
                    }}>contact@openvoxel.studio
                    </Link>
                    <br />
                    <br />
                    <a className='yestextselection'>NOT AN OFFICIAL MINECRAFT SERVICE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</a>
                </div>
            </div>
        </>
    )
};