import './halloffame.css';

const fames = [
    {
        title: "Yahiamice Escape Room 2",
        date: "September 4th, 2024",
        description: <>
            We participated and almost won (top 3) in <a href='https://www.youtube.com/watch?v=I2bOFSabiNk&t=10159s' target='_blank'>Yahiamice's Map Contest</a>! Warning: this is very silly
        </>,
        image: "/halloffame/yer2.png",
        link: 'https://www.youtube.com/watch?v=I2bOFSabiNk&t=10159s',
    },
    {
        title: "The Mewoster",
        date: "August 3rd, 2024",
        description: <>
            We participated and won the first <a href='https://www.youtube.com/watch?v=f3B0o8uBadc' target='_blank'>Mysticat Silly Redstone Challenge</a>! All of this was made in 3 days!!
        </>,
        image: "/halloffame/mewoster.png",
        link: 'https://www.youtube.com/watch?v=HvZa4lguVRE',
    },
]

export default function HallOfFame() {
    document.title = "Hall of Fame - OpenVoxel Studios";

    return (
        <div className="halloffame">
            <div className="container">
                <h1>Hall of Fame</h1>
                <div className="timeline">
                    {fames.map((event, index) => (
                        <div key={index} className="event">
                            <div className="event-content">
                                <div className="event-details">
                                    <a href={event.link} target='_blank' className="event-title">{event.title}</a>
                                    <p className="event-date">{event.date}</p>
                                </div>
                                <div className="event-marker" />
                                <div className="event-description">{event.description}</div>
                            </div>
                            <div className="illustration-container">
                                <div className="illustration" onClick={() => window.open(event.link, '_blank')}>
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};