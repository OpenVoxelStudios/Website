import './header.css';
import Icon from '/logo.png';
import { useState } from 'react';

export default function Header({ showLeaderboard, setShowLeaderboard }: { showLeaderboard: boolean, setShowLeaderboard: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [menu, setMenu] = useState(false);

    document.onkeydown = (ev) => {
        if (menu && ev.key == "Escape") setMenu(false)
    };

    document.onmousedown = () => {
        if (menu) setMenu(false);
    };

    return (
        <header className="header" id='header'>
            <div>
                <img className='coolclick notextselection icon' src='/bakingbread/rebirth.svg' onClick={(ev) => {
                    ev.stopPropagation(); ev.preventDefault()
                    setShowLeaderboard(false);
                    ; (document.getElementById('breadreset') as HTMLDivElement).style.display = 'flex';
                }} />
            </div>

            <div className='brand'>
                <img className='coolclick notextselection logo' id='headerlogo' src={Icon} />
                <a className='title' id='headertitle'>OpenVoxel Studios</a>
            </div>

            <img onClick={() => { setShowLeaderboard(lb => !lb) }} className='coolclick notextselection icon' src={showLeaderboard ? (localStorage.getItem('user:avatar') as string) : '/bakingbread/trophy.svg'} style={{ borderRadius: '16px' }} />
        </header>
    )
};