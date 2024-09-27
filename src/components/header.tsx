import './header.css';
import IconList from '/icons/List.svg';
import IconDiscord from '/icons/Discord.svg';
import IconGithub from '/icons/Github.svg';
import IconYoutube from '/icons/Youtube.svg';
import Icon from '/logo.png';
import { useState } from 'react';
import { links } from '../data.ts';
import PinardoImage from '/images/pinardo.png'
import { Link } from 'react-router-dom';
import { scrollTop } from '../router.tsx';

export default function Header() {
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
                <div>
                    <img className='coolclick notextselection icon' src={IconList} onMouseDown={(ev) => { ev.stopPropagation(); }} onClick={() => {
                        setMenu(!menu);
                        if (!menu) setPinardo((pinardo + 1) % 14);
                    }} />
                </div>

                <div className='brand'>
                    <Link to='/' onClick={scrollTop}>
                        <img className='coolclick notextselection logo' id='headerlogo' src={Icon} />
                    </Link>
                    <a className='title' id='headertitle'>OpenVoxel Studios</a>
                </div>

                <Link to={links.discord as string} target='_blank'>
                    <img className='coolclick notextselection icon' src={IconDiscord} />
                </Link>
            </header>

            <nav className="notextselection menu" style={{ left: menu ? "0" : "-100%" }} onMouseDown={(ev) => { ev.stopPropagation(); ev.preventDefault() }}>
                <div className='submenu'>
                    <div>
                        <Link to='/' onClick={() => { setMenu(false); scrollTop() }} className='yestextselection coolclick'>
                            <h1><p className='yestextselection coolclick'>Home</p></h1>
                        </Link>

                        <Link to='/games/' onClick={() => { setMenu(false); scrollTop() }} className='yestextselection coolclick'>
                            <h1><p className='yestextselection coolclick'>Games</p></h1>
                        </Link>

                        <Link to='/launcher/' onClick={() => { setMenu(false); scrollTop() }} className='yestextselection coolclick'>
                            <h1><p className='yestextselection coolclick'>Launcher</p></h1>
                        </Link>
                    </div>

                    <div>
                        <div className='icon-row'>
                            <Link to={links.discord as string} target='_blank' className='coolclick'>
                                <img src={IconDiscord} />
                            </Link>
                            <Link to={links.youtube as string} target='_blank' className='coolclick'>
                                <img src={IconYoutube} />
                            </Link>
                            <Link to={links.github as string} target='_blank' className='coolclick'>
                                <img src={IconGithub} />
                            </Link>
                        </div>

                        {pinardo == 13 &&
                            <h1 style={{ width: "100%", marginBottom: "0", display: "flex" }}>
                                <img src={PinardoImage} style={{ width: "40%" }} loading='lazy' />
                            </h1>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
};