import { Link } from 'react-router-dom';
import './halloffame.css';

export default function HallOfFame() {
    document.title = "Hall of Fame - OpenVoxel Studios";

    return (
        <div className="halloffame">
            <div className="container">
                <h1>Hall of Fame</h1>
                <div className="timeline">
                    {([
                        {
                            title: "Yahiamice Escape Room 2",
                            date: "September 4th, 2024",
                            description: <>
                                We participated and almost won (top 3) in Yahiamice's Map Contest! Warning: this is very silly!!
                                <br /><br />
                                <a href='https://www.youtube.com/watch?v=I2bOFSabiNk&t=10159s' target='_blank'>Watch Yahi's Stream by clicking here</a>
                            </>,
                            // image: "/halloffame/yer2.jpg",
                            link: 'https://www.youtube.com/watch?v=I2bOFSabiNk&t=10159s',
                        },
                        {
                            title: "The Mewoster",
                            date: "August 3rd, 2024",
                            description: <>
                                We participated and won the first Mysticat Silly Redstone Challenge! All of this was made in 3 days!!
                                <br /><br />
                                <a href='https://www.youtube.com/watch?v=f3B0o8uBadc' target='_blank'>Watch Mysti's Stream by clicking here</a>
                            </>,
                            image: '/halloffame/mewoster.jpg',
                            link: 'https://www.youtube.com/watch?v=g7jRjRDhZIM',
                        },
                    ] as {
                        title: string;
                        date: string;
                        description: JSX.Element;
                        image?: string;
                        link: string;
                    }[]).map((event, index) => (
                        <div key={index} className="event">
                            <div className="event-content">
                                <div className="event-details">
                                    <a href={event.link} target='_blank' className="event-title">{event.title}</a>
                                    <p className="event-date">{event.date}</p>
                                </div>
                                <div className="event-marker" />
                                <div className="event-description">{event.description}</div>
                            </div>
                            {event.image &&
                                <div className="illustration-container">
                                    <Link to={event.link} target='_blank' className="illustration">
                                        <img src={event.image} alt={event.title} />
                                    </Link>
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};