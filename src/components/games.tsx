import { useState } from 'react';
import './games.css';
import Game from './game';
import { gameList } from '../data.ts';

const superSearches = {
    'i was crazy once': <>
        Oh you were crazy once too?!
        <br />
        {'Crazy? I was crazy once. they locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy! '.repeat(15)}
    </>,
}

const Games = ({ localRedirect }: { localRedirect: Function }) => {
    document.title = "Our Games - OpenVoxel Studios";
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
                <div className='notextselection search glass'>
                    <img className='notextselection icon' src='/icons/Search.svg' />
                    <input className='yestextselection input' placeholder='Search a Map...' type="search" onChange={(e) => setSearch(e.target.value)} />
                </div>

                <div className='notextselection coolclick sort glass notextselection' onClick={() => setFilter(filters.indexOf(filter) + 1 > filters.length - 1 ? filters[0] : filters[filters.indexOf(filter) + 1])}>
                    <img className='notextselection icon' src='/icons/Sort.svg' />
                    <a className='yestextselection sortby'>{filter}</a>
                </div>

                <div className='gamelist'>
                    <div className='notextselection sub'>
                        {!Object.keys(superSearches).includes(search.toLowerCase()) && gameList
                            .filter((a) => search.length == 0 || (!a.downloads || !a.date))
                            .sort((a, b) => {
                                if (!a.downloads || !a.date) return 1;
                                if (!b.downloads || !b.date) return -1;

                                if (filter == 'Downloads') {
                                    return (b.downloads as number) - (a.downloads as number)
                                } else if (filter == 'No Downloads') {
                                    return (a.downloads as number) - (b.downloads as number)
                                } else if (filter == 'Recent') {
                                    return (b.date as Date).getTime() - (a.date as Date).getTime()
                                } else if (filter == 'Old') {
                                    return (a.date as Date).getTime() - (b.date as Date).getTime()
                                } else if (filter == 'ABC') {
                                    return a.name.localeCompare(b.name)
                                } else if (filter == 'ZYX') {
                                    return b.name.localeCompare(a.name)
                                }

                                return (b.downloads as number) - (a.downloads as number);
                            })
                            .filter((a) => a.name.toLowerCase().includes(search.toLowerCase()) || search.split(' ').every(v => a.tags.some(v2 => v2.includes(v))))
                            .map((v, index) => {
                                return <Game localRedirect={localRedirect} date={v.date} description={v.description} downloads={v.downloads} image={v.image} name={v.name} link={v.link} key={index} />
                            })}

                        {Object.keys(superSearches).includes(search.toLowerCase()) &&
                            <p style={{ fontSize: '1.4vw' }}>{superSearches[search as keyof typeof superSearches]}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Games