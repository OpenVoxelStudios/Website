import './gamePage.css';
import IconDownload from '/icons/Download.svg';
import IconOpen from '/icons/Open.svg';
import { gameList } from '../data.ts';
import { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Creator from './creator.tsx';

function GamePage({ game, localRedirect }: { game: string, localRedirect: Function }) {
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

                    <div className='coolclick glass downloadLatest' onClick={() => localRedirect('/launcher', 'launcher', undefined, true)}>
                        <img className='icon' src={IconDownload} />
                        <a className='yestextselection text'>Download Launcher</a>
                    </div>
                </div>
            </div>


            <div className='notextselection glass info'>
                <div className='name'>
                    <img src={GAME.icon} className='icon' />
                    <a className='yestextselection name'>{GAME.name}</a>
                </div>
                <p className='yestextselection description'>
                    {GAME.extended_description}
                </p>

                <div className='separator'></div>

                <div className='coolclick glass downloadLatest' onClick={() => {
                    let gameid = (GAME.link as { game_id: string }).game_id;
                    (document.getElementById('openlauncher') as HTMLDivElement).style.display = 'flex';

                    const iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    iframe.src = `openvoxel://game/${gameid}`;
                    console.log(gameid)

                    document.body.appendChild(iframe);
                }}>
                    <img className='icon' src={IconOpen} />
                    <a className='yestextselection text'>Open In Launcher</a>
                </div>

                <div className='coolclick glass downloadLatest' onClick={() => (window.open(GAME.versions.filter(v => v.type == "release")[0].download, '_blank') as Window).focus()}>
                    <img className='icon' src={IconDownload} />
                    <a className='yestextselection text'>Download Latest</a>
                </div>

                <div className='separator'></div>

                <div className='creators'>
                    <a className='yestextselection title'>Project Creators:</a>
                    {GAME.creators.map((creatorName, i) => {
                        return <Creator creatorName={creatorName} key={i} />
                    })}
                </div>
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
                                    <div className='coolclick glass title' onClick={() => (window.open(v.download, '_blank') as Window).focus()}>
                                        <img className='notextselection download' src={IconDownload}></img>
                                        <p className='name'>
                                            <a className='bold'>[{v.supports}] {v.name}</a>
                                            <a> (on {v.date.toLocaleDateString()})</a>
                                        </p>
                                    </div>
                                    <div className='description'><Markdown remarkPlugins={[remarkGfm]}>{v.changes || "No Additional Description Provided."}</Markdown></div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default GamePage;