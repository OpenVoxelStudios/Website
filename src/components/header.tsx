import './header.css';
import IconList from '/icons/List.svg';
import IconDiscord from '/icons/Discord.svg';
import Icon from '/logo.png';
import { useState } from 'react';
import { links } from '../data.ts';
import PinardoImage from '/images/pinardo.png'

const Header = ({ localRedirect }: { localRedirect: Function }) => {
    const [menu, setMenu] = useState(false);
    const [pinardo, setPinardo] = useState(0);

    document.onkeydown = (ev) => {
        if (menu && ev.key == "Escape") setMenu(false)
    };

    document.onmousedown = () => {
        if (menu) setMenu(false);
    };

    return (
        <>
            <header className="header" id='header'>
                <img className='coolclick notextselection icon' src={IconList} onMouseDown={(ev) => { ev.stopPropagation(); ev.preventDefault() }} onClick={() => {
                    setMenu(!menu);
                    if (!menu) setPinardo((pinardo + 1) % 14);
                }} />

                <div className='brand'>
                    <img className='coolclick notextselection logo' src={Icon} onClick={() => localRedirect('/', 'main', undefined, true)} />
                    <a className='title'>OpenVoxel Studios</a>
                </div>

                <img onClick={() => (window.open(links.discord, '_blank') as Window).focus()} className='coolclick notextselection icon' src={IconDiscord} />
            </header>

            <nav className="notextselection menu" style={{ left: menu ? "0" : "-100%" }} onMouseDown={(ev) => { ev.stopPropagation(); ev.preventDefault() }}>
                <div className='submenu'>
                    <div>
                        <h1><a className='yestextselection coolclick' onClick={(e) => { localRedirect('/', 'main', undefined, true); setMenu(false); e.preventDefault(); e.stopPropagation() }}>Home</a></h1>
                        <h1><a className='yestextselection coolclick' onClick={(e) => { localRedirect('/games/', 'games', undefined, true); setMenu(false); e.preventDefault(); e.stopPropagation() }}>Games</a></h1>
                        <h1><a className='yestextselection coolclick' onClick={() => { setMenu(false); location.href = links.launcher }}>Launcher</a></h1>
                    </div>

                    <div>
                        <h1><a className='yestextselection coolclick' href="#" onClick={() => { setMenu(false); (window.open(links.youtube, '_blank') as Window).focus() }}>Our YouTube</a></h1>
                        <h1><a className='yestextselection coolclick' href="#" onClick={() => { setMenu(false); (window.open(links.discord, '_blank') as Window).focus() }}>Our Discord</a></h1>
                        {pinardo == 13 &&
                            <h1 style={{ width: "100%", marginBottom: "0", display: "flex" }}>
                                <img src={PinardoImage} style={{ width: "40%" }} />
                            </h1>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header