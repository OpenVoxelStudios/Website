import { useState } from 'react';
import './footer.css';
import Icon from '/logo.png';

const Footer = ({ localRedirect }: { localRedirect: Function }) => {
    const [BREADMAN, _] = useState(Math.round(Math.random() * 20) == 1);

    return (
        <>
            <div className="glass footer">
                <div className='top'>
                    <div className={'main' + (BREADMAN ? ' coolclick' : '')} onClick={(ev) => {
                        if (BREADMAN) {
                            ev.preventDefault();
                            ev.stopPropagation();

                            localRedirect('/bakingbread/', 'bakingbread', undefined, true, { nofooter: true });
                        }
                    }}>
                        <img className='notextselection logo' src={!BREADMAN ? Icon : '/bread/breadman.png'} />
                        <a className='title'>{!BREADMAN ? 'OpenVoxel Studios' : 'BreadVoxel??'}</a>
                    </div>

                    <a className='subtitle'>Minecraft Maps, without Mods.</a>
                </div>
                <a className='notextselection small'>
                    <div className='notextselection coolclick glass backtotop' id='scrollToTopBtn' onClick={(ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();

                        location.hash = "";
                        requestAnimationFrame(() => {
                            location.hash = "content";
                        });
                    }}></div>

                    <br />
                    <p className='yestextselection actuallybigger'>Copyright © OpenVoxel Studios 2024</p>
                    <br />
                    <div className='yestextselection'>NOT AN OFFICIAL MINECRAFT SERVICE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</div>
                </a>
            </div>
        </>
    )
}

export default Footer