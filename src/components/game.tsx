import './game.css';
import IconDownload from '/icons/Download.svg';

export default function Game({ localRedirect, name, date, downloads, description, image, link }: { localRedirect: Function, name: string, date: Date | null, downloads: number | null, description: string, image: string, link: string | { game_id: string; } }) {
    return (
        <div className='coolclick game glass' onClick={(e) => {
            if (name === "More Maps Soon!") {
                if (Math.round(Math.random() * 10) == 0) ((e.currentTarget.querySelector('.details') as HTMLDivElement).querySelector('img') as HTMLImageElement).src = '/rick.gif';
            }
            else if (typeof link == 'string') {
                (window.open(link, '_blank') as Window).focus();
            } else {
                localRedirect(`/game/${link.game_id}/`, 'game', link.game_id)
            }
        }}>
            <p className='yestextselection glass title'>{name}</p>

            <div className='details'>
                <img className='notextselection thumbnail' src={image} />
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
        </div>
    )
};