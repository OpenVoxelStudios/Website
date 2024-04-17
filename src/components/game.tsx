import { useState } from 'react';
import './game.css';
import IconDownload from '/icons/Download.svg';

function Game({ localRedirect, name, date, downloads, description, image, link }: { localRedirect: Function, name: string, date: Date | null, downloads: number | null, description: string, image: string, link: string | { game_id: string; } }) {
    const [frImage, setFrImage] = useState(image);

    return (
        <div className='coolclick game glass' onClick={() => {
            if (name === "More Maps Soon!") {
                if (Math.round(Math.random() * 10) == 0) setFrImage('/rick.gif');
            }
            else if (typeof link == 'string') {
                (window.open(link, '_blank') as Window).focus();
            } else {
                localRedirect(`/game/${link.game_id}/`, 'game', link.game_id, true)
            }
        }}>
            <p className='glass title'>{name}</p>

            <div className='details'>
                <img className='notextselection thumbnail' src={frImage} />
                {date !== null &&
                    <p className='date'>{date.toLocaleDateString()}</p>
                }
                {downloads !== null &&
                    <p className='downloads'>
                        <img className='downloadicon' src={IconDownload} />
                        {downloads}
                    </p>
                }
            </div>

            <p className='glass description'>{description}</p>
        </div>
    )
}

export default Game