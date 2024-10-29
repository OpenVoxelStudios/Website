import { useState } from 'react';
import { CreatorDetailList } from '../../data.ts';
import { Link } from 'react-router-dom';

export default function Creator({ creatorName }: { creatorName: keyof typeof CreatorDetailList }) {
    const [stevegg, setStevegg] = useState(false);

    var audio = new Audio('/stevegg.mp3');
    if (creatorName === 'Stevelocks') audio.load();

    return (
        <Link className='coolclick glass creator' to={`https://youtube.com/${CreatorDetailList[creatorName].youtube}`} target="_blank"
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
            <img className='head' src={'/heads/' + CreatorDetailList[creatorName].minecraft + '.png'} alt={'Head of ' + creatorName} />
            <p className='yestextselection name'>{creatorName}</p>
        </Link>
    )
};