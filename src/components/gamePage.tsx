import './gamePage.css';
import IconDownload from '/icons/Download.svg';
import IconOpen from '/icons/Open.svg';
import { gameList } from '../data.ts';
import { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Creator from './sub/creator.tsx';
import { Link } from 'react-router-dom';
import { scrollTop } from '@/router.tsx';

export default function GamePage({ game }: { game: string }) {
    const GAME = gameList.find(l => typeof l.link === 'object' && l.link.game_id == game) as typeof gameList[0];
    const [description, setDescription] = useState(true);

    document.title = `${GAME.name} - OpenVoxel Studios`;

    return (
        <div className='gamepage'>
            <div className='openlauncher' id='openlauncher' onClick={(ev) => {
                if (ev.target == (document.getElementById('openlauncher') as HTMLDivElement)) (document.getElementById('openlauncher') as HTMLDivElement).style.display = 'none';
            }}>
                <div className='moreinfos info glass'>
                    <h1>You're Almost There!</h1>
                    <a>Allow this Website to open <b>OpenVoxel Launcher</b>.<br />Or if you don't have the Launcher, click below!</a>

                    <div className='coolclick glass downloadLatest'>
                        <Link to='/launcher' onClick={scrollTop}>
                            <img className='icon' src={IconDownload} alt='Download' />
                            Download Launcher
                        </Link>
                    </div>
                </div>
            </div>


            <div className='notextselection glass info'>
                <div className='name'>
                    <img src={GAME.icon} className='icon' alt={GAME.name} />
                    <a className='yestextselection name'>{GAME.name}</a>
                </div>
                <p className='yestextselection description'>
                    {GAME.extended_description}
                </p>

                <div className='separator'></div>

                {GAME.islauncher !== false &&
                    <div className='coolclick glass downloadLatest' onClick={() => {
                        let gameid = (GAME.link as { game_id: string }).game_id;
                        (document.getElementById('openlauncher') as HTMLDivElement).style.display = 'flex';

                        const iframe = document.createElement('iframe');
                        iframe.style.display = 'none';
                        iframe.src = `openvoxel://game/${gameid}`;

                        document.body.appendChild(iframe);
                    }}>
                        <img className='icon' src={IconOpen} alt='Open In Launcher' />
                        <a className='yestextselection text'>Open In Launcher</a>
                    </div>
                }

                <Link to={GAME.versions.filter(v => v.type == "release")[0].download} target='_blank' className='coolclick glass downloadLatest yestextselection text'>
                    <img className='icon' src={IconDownload} alt='Download Latest' />
                    Download Latest
                </Link>

                <div className='separator'></div>

                <div className='creators'>
                    <a className='yestextselection title'>Project Creators:</a>
                    {GAME.creators.map((creatorName, i) => {
                        return <Creator creatorName={creatorName} key={i} />
                    })}
                </div>

                {GAME.collaboration &&
                    <div className='creators'>
                        <a className='yestextselection title'>In Collaboration with:</a>

                        {GAME.collaboration.map((collab, i) => {

                            if (collab.url) {
                                return (
                                    <Link key={i} to={collab.url} target='_blank' className='yestextselection coolclick glass collabwith' style={{ textDecoration: 'underline' }}>
                                        {collab.name}
                                    </Link>
                                )
                            }

                            else return (
                                <a key={i} className='yestextselection coolclick glass collabwith'>
                                    {collab.name}
                                </a>
                            )
                        })}
                    </div>
                }
            </div>

            <div className='details'>
                <div className='glass selector'>
                    <a className={'coolclick description' + (description ? ' active' : '')} style={{ fontWeight: undefined, textDecorationLine: 'none' }} href='#' onClick={() => setDescription(true)}>Description</a>
                    <a className={'coolclick versions' + (description ? '' : ' active')} style={{ fontWeight: undefined, textDecorationLine: 'none' }} href='#' onClick={() => setDescription(false)}>Versions</a>
                </div>

                <div className={description ? 'glass moreinfos' : 'moreinfos moreinfos-changelog'}>
                    {description &&
                        <Markdown remarkPlugins={[remarkGfm]}>{GAME.fulldetails || "No Additional Description Provided."}</Markdown>
                    }
                    {!description &&
                        GAME.versions.map((v, index) => {
                            let typeColor = v.type == "release" ? "#1BFF4D" : (v.type == "beta" ? "#FFB21B" : "#FFE81B");
                            return <div className='glass changelog' key={index}>
                                <div className='arrow'>
                                    <div className='dot' style={{ backgroundColor: typeColor }}></div>
                                    <div className='dash' style={{ backgroundColor: typeColor }}></div>
                                </div>

                                <div className='text'>
                                    <Link to={v.download} target='_blank' className='coolclick glass title'>
                                        <img className='notextselection download' src={IconDownload} alt='Download' />
                                        <p className='bold'>[{v.supports}] {v.name}</p>
                                        <p>(on {v.date.toLocaleDateString()})</p>
                                    </Link>
                                    <div className='description'><Markdown remarkPlugins={[remarkGfm]}>{v.changes || "No Additional Description Provided."}</Markdown></div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
};