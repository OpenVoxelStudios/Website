import { Link } from 'react-router-dom';
import './game.css';
import IconDownload from '/icons/Download.svg';
import { scrollTop } from '../../router';

export default function Game({ name, date, downloads, description, image, link }: { name: string, date: Date | null, downloads: number | null, description: string, image: string, link: string | { game_id: string; } }) {
    return (
        <Link to={typeof link == "string" ? link : `/game/${link.game_id}/`} className='coolclick game glass' target={typeof link == "string" ? '_blank' : undefined} onClick={(e) => {
            if (name === "More Maps Soon!") {
                if (Math.round(Math.random() * 6) == 0) ((e.currentTarget.querySelector('.details') as HTMLDivElement).querySelector('img') as HTMLImageElement).src = '/rick.gif';
            }
            else if (typeof link !== 'string') {
                scrollTop();
            }
        }}>
            <p className='yestextselection glass title'>{name}</p>

            <div className='details'>
                <img className='notextselection thumbnail' src={image} loading='lazy' decoding='async' />
                {date !== null &&
                    <p className='yestextselection date'>{date.toLocaleDateString()}</p>
                }
                {downloads !== null &&
                    <p className='yestextselection downloads'>
                        <img className='notextselection downloadicon' src={IconDownload} />
                        {downloads}
                    </p>
                }
            </div>

            <p className='yestextselection glass description'>{description}</p>
        </Link>
    )
};