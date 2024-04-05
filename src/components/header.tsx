import './header.css';
import IconList from '/icons/List.svg';
import IconDiscord from '/icons/Discord.svg';
import Icon from '/logo.png';
import { useState } from 'react';
import { links } from '../data.ts';

const Header = ({ localRedirect }: { localRedirect: Function }) => {
    const [menu, setMenu] = useState(false);

    document.onkeydown = (ev) => {
        if (menu && ev.key == "Escape") setMenu(false)
    };

    document.onmousedown = () => {
        if (menu) setMenu(false);
    };

    return (
        <>
            <header className="header" id='header'>
                <img className='coolclick icon' src={IconList} onMouseDown={(ev) => { ev.stopPropagation(); ev.preventDefault() }} onClick={() => setMenu(!menu)} />

                <div className='brand'>
                    <img className='coolclick logo' src={Icon} onClick={() => localRedirect('/', 'main')} />
                    <a className='title'>OpenVoxel Studios</a>
                </div>

                <img onClick={() => location.href = links.discord} className='coolclick icon' src={IconDiscord} />
            </header>

            <nav className="menu" style={{ left: menu ? "0" : "-100%" }} onMouseDown={(ev) => { ev.stopPropagation(); ev.preventDefault() }}>
                <h1><a className='coolclick' href="#" onClick={(e) => { localRedirect('/', 'main'); setMenu(false); e.preventDefault(); e.stopPropagation() }}>Home</a></h1>
                <h1><a className='coolclick' href="#" onClick={(e) => { localRedirect('/games/', 'games'); setMenu(false); e.preventDefault(); e.stopPropagation() }}>Games</a></h1>
                <h1><a className='coolclick' href="#" onClick={() => { setMenu(false); location.href = links.launcher }}>Launcher</a></h1>

                <div className='bottom'>
                    <h1><a className='coolclick' href="#" onClick={() => { setMenu(false); location.href = links.discord }}>Our Discord</a></h1>
                </div>
            </nav>
        </>
    )
}

export default Header