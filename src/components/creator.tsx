import { useState } from 'react';
import { CreatorDetailList } from '../data.ts';

function Creator({ creatorName }: { creatorName: keyof typeof CreatorDetailList }) {
    const [stevegg, setStevegg] = useState(false);

    var audio = new Audio('/stevegg.mp3');
    if (creatorName === 'Stevelocks') audio.load();

    return (
        <div className='coolclick glass creator' onClick={() => (window.open(`https://youtube.com/${CreatorDetailList[creatorName].youtube}`, '_blank') as Window).focus()}
            onMouseEnter={(e) => {
                if (creatorName !== 'Stevelocks' || stevegg || Math.round(Math.random() * 20) !== 0) return;
                setStevegg(true);

                audio.play();
                e.currentTarget.classList.add('stevegg');

                setTimeout(() => {
                    location.href = '/games/';
                }, 19000);
            }}
        >
            <img className='head' src={'/heads/' + CreatorDetailList[creatorName].minecraft + '.png'} />
            <a className='name'>{creatorName}</a>
        </div>
    )
}

export default Creator;