import { useState } from 'react';
import './games.css';
import Game from './game';
import { gameList } from '../data.ts';

function Games() {
    const filters = [
        "Downloads", "No Downloads",
        "Recent", "Old",
        "ABC", "ZYX"
    ];

    const [filter, setFilter] = useState(filters[0]);
    const [search, setSearch] = useState("");

    return (
        <div className='games'>
            <div className='subheader'>
                <div className='search glass'>
                    <img className='icon' src='/icons/Search.svg' />
                    <input className='input' placeholder='Search a Map...' type="search" onChange={(e) => setSearch(e.target.value)} />
                </div>

                <div className='coolclick sort glass notextselection' onClick={() => setFilter(filters.indexOf(filter) + 1 > filters.length - 1 ? filters[0] : filters[filters.indexOf(filter) + 1])}>
                    <img className='icon' src='/icons/Sort.svg' />
                    <a className='sortby'>{filter}</a>
                </div>

                <div className='gamelist'>
                    <div className='sub'>
                        {gameList
                            .sort((a, b) => {
                                if (filter == 'Downloads') {
                                    return b.downloads - a.downloads
                                } else if (filter == 'No Downloads') {
                                    return a.downloads - b.downloads
                                } else if (filter == 'Recent') {
                                    return new Date(b.date).getTime() - new Date(a.date).getTime()
                                } else if (filter == 'Old') {
                                    return new Date(a.date).getTime() - new Date(b.date).getTime()
                                } else if (filter == 'ABC') {
                                    return a.name.localeCompare(b.name)
                                } else if (filter == 'ZYX') {
                                    return b.name.localeCompare(a.name)
                                }

                                return b.downloads - a.downloads;
                            })
                            .filter((a) => a.name.toLowerCase().includes(search.toLowerCase()) || search.split(' ').every(v => a.tags.some(v2 => v2.includes(v))))
                            .map((v, index) => {
                                return <Game date={v.date} description={v.description} downloads={v.downloads} image={v.image} name={v.name} link={v.link} key={index} />
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Games