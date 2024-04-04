import './game.css';
import IconDownload from '/icons/Download.svg';

function Game({ name, date, downloads, description, image, link }: { name: string, date: string, downloads: number, description: string, image: string, link: string }) {
    return (
        <div className='coolclick game glass' onClick={() => location.href = link + '/'}>
            <p className='glass title'>{name}</p>

            <div className='details'>
                <img className='thumbnail' src={image} />
                <p className='date'>{date}</p>
                <p className='downloads'>
                    <img className='downloadicon' src={IconDownload} />
                    {downloads}+
                </p>
            </div>

            <p className='glass description'>{description}</p>
        </div>
    )
}

export default Game