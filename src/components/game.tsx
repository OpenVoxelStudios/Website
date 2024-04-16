import './game.css';
import IconDownload from '/icons/Download.svg';

function Game({ localRedirect, name, date, downloads, description, image, link }: { localRedirect: Function, name: string, date: Date | null, downloads: number | null, description: string, image: string, link: string | { game_id: string; } }) {
    return (
        <div className='coolclick game glass' onClick={() => {
            if (typeof link == 'string') {
                location.href = link;
            } else {
                localRedirect(`/game/${link.game_id}/`, 'game', link.game_id, true)
            }
        }}>
            <p className='glass title'>{name}</p>

            <div className='details'>
                <img className='thumbnail' src={image} />
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