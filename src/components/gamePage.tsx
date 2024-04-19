import './gamePage.css';
import IconDownload from '/icons/Download.svg';
import { gameList } from '../data.ts';
import { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Creator from './creator.tsx';

function GamePage({ game }: { game: string }) {
    const GAME = gameList.find(l => typeof l.link === 'object' && l.link.game_id == game) as typeof gameList[0];
    const [description, setDescription] = useState(true);

    document.title = `${GAME.name} - OpenVoxel Studios`;

    return (
        <div className='gamepage'>
            <div className='glass info'>
                <div className='name'>
                    <img src={GAME.icon} className='icon' />
                    <a className='name'>{GAME.name}</a>
                </div>
                <p className='description'>
                    {GAME.extended_description}
                </p>

                <div className='separator'></div>

                <div className='coolclick glass downloadLatest' onClick={() => (window.open(GAME.versions.filter(v => v.type == "release")[0].download, '_blank') as Window).focus()}>
                    <img className='icon' src={IconDownload} />
                    <a className='text'>Download Latest</a>
                </div>

                <div className='separator'></div>

                <div className='creators'>
                    <a className='title'>Project Creators:</a>
                    {GAME.creators.map((creatorName, i) => {
                        return <Creator creatorName={creatorName} key={i} />
                    })}
                </div>
            </div>

            <div className='details'>
                <div className='glass selector'>
                    <a className={'coolclick description' + (description ? ' active' : '')} style={{ fontWeight: description ? 'bold' : undefined, textDecorationLine: description ? 'underline' : 'none' }} href='#' onClick={() => setDescription(true)}>Description</a>
                    <a className={'coolclick versions' + (description ? '' : ' active')} style={{ fontWeight: description ? undefined : 'bold', textDecorationLine: description ? 'none' : 'underline' }} href='#' onClick={() => setDescription(false)}>Versions</a>
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
                                        <img className='download' src={IconDownload}></img>
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