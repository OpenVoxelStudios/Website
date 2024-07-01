import { Fragment, useEffect, useState } from 'react';
import './bakingbread.css';
import BreadIcon from '/bread/logo.png';
import BreadHead from '/bread/head.png';
import BreadBuilding, { building } from './breadbuilding';
import BreadQuest from './breadquest';
import formatNumber from '../functions/formatNumber';
import BreadMusic from './breadmusic';
import AntiAutoClick from '../functions/autoclick';
import { BACKEND } from '../functions/config';

const initialBuildings: building[] = [
    {
        name: 'Auto Clicker',
        price: 15,
        clicks_every: 10,
        gives: 1,
        price_up: 1 + 26 / 100,

        quantity: 0,
        last_clicked: 1,
        icon: '/bread/cursor.svg',
    },
    {
        name: 'Chef',
        price: 50,
        clicks_every: 5,
        gives: 3,
        price_up: 1 + 27 / 100,

        last_clicked: 1,
        quantity: 0,
        icon: '/bread/cookie.svg',
    },
    {
        name: 'Bread Bakery',
        price: 100,
        clicks_every: 5,
        gives: 8,
        price_up: 1 + 28 / 100,

        last_clicked: 1,
        quantity: 0,
        icon: '/bread/flask.svg',
    },
    {
        name: 'Bread Bank',
        price: 850,
        clicks_every: 6,
        gives: 20,
        price_up: 1 + 32 / 100,

        last_clicked: 1,
        quantity: 0,
        icon: '/bread/bank.svg',
    },
    {
        name: 'Bread Factory',
        price: 1300,
        clicks_every: 7,
        gives: 50,
        price_up: 1 + 33 / 100,

        last_clicked: 1,
        quantity: 0,
        icon: '/bread/factory.svg',
    },
    {
        name: 'Bread Paradise',
        price: 2000,
        clicks_every: 7,
        gives: 120,
        price_up: 1 + 35 / 100,

        last_clicked: 1,
        quantity: 0,
        icon: '/bread/airplane.svg',

        showCondition() {
            return parseInt(localStorage.getItem('bread:questIndexBackup') || '1') > 11
        },
    },
    {
        name: 'Loafly Way',
        price: 10000,
        clicks_every: 5,
        gives: 350,
        price_up: 1 + 40 / 100,

        last_clicked: 1,
        quantity: 0,
        icon: '/bread/stars.svg',

        showCondition() {
            return parseInt(localStorage.getItem('bread:questIndexBackup') || '1') > 23
        },
    },
    {
        name: 'Universal Bakery',
        price: 20000,
        clicks_every: 6,
        gives: 800,
        price_up: 1 + 40 / 100,

        last_clicked: 1,
        quantity: 0,
        icon: '/bread/globe.svg',

        showCondition() {
            return parseInt(localStorage.getItem('bread:questIndexBackup') || '1') > 29 && parseInt(localStorage.getItem('bread:rebirth') || '0') >= 1
        },
    },
    {
        name: 'Bread Tornado',
        price: 24000,
        clicks_every: 6,
        gives: 1100,
        price_up: 1 + 40 / 100,

        last_clicked: 1,
        quantity: 0,
        icon: '/bread/tornado.svg',

        showCondition() {
            return parseInt(localStorage.getItem('bread:questIndexBackup') || '1') > 53 && parseInt(localStorage.getItem('bread:rebirth') || '0') >= 2
        },
    },
];

const BakingBread = ({ hidden, openLink }: { hidden: boolean, openLink(url: string): void }) => {
    const [score, setScore] = useState(localStorage.getItem('bread:score') ? parseInt(localStorage.getItem('bread:score') as string) || 0 : 0);
    const [initialized, setInit] = useState(0);
    const [clickValue, setClickValue] = useState(localStorage.getItem('bread:clickvalue') ? parseInt(localStorage.getItem('bread:clickvalue') as string) || 1 : 1);
    const [AAC, _setAAC] = useState(new AntiAutoClick({
        clicksToSave: 60,
        detectNonhumanClick: true,
        detectClickInterval: {
            enabled: true,
            margin: 75
        }
    }));

    useEffect(() => {
        if (AAC.isCheating) fetch(BACKEND + '/api/iamcheating', {
            mode: 'cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': localStorage.getItem('authkey') as string
            },
            body: JSON.stringify({ forreal: true }),
        });
    }, [AAC.isCheating]);

    function clicked(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if ((ev.target as HTMLElement).classList.contains('unbreading')) return;
        ev.preventDefault();
        ev.stopPropagation();

        AAC.click(ev);

        let middle = (document.getElementById('breadmiddle') as HTMLDivElement);
        if (AAC.isCheating) return middle.classList.add('cheating');
        else if (middle.classList.contains('cheating')) middle.classList.remove('cheating');

        setScore(scor => scor + clickValue);
        localStorage.setItem('bread:totalscore', String(parseInt(localStorage.getItem('bread:totalscore') || '0') + clickValue));


        clickicon(clickValue);

        if (initialized == 0 && score >= 50) {
            (document.getElementById('headertitle') as HTMLAreaElement).innerText = 'BreadVoxel Studios';

            setInit(1);
        };
        if (initialized == 1 && score >= 100) {
            (document.getElementById('headerlogo') as HTMLImageElement).src = BreadHead;

            setInit(2);
        }
    };


    useEffect(() => {
        localStorage.setItem('bread:score', String(score));
    }, [score]);
    useEffect(() => {
        localStorage.setItem('bread:clickvalue', String(clickValue));
    }, [clickValue]);


    function clickicon(count: number, icon: string = BreadIcon) {
        let bread = document.getElementById('breadclicker') as HTMLAreaElement;

        let plus = document.createElement('div');
        plus.style.opacity = '1';
        plus.classList.add('plus');

        let plush3 = document.createElement('h3');
        plush3.innerText = `${formatNumber(count)}x`;

        let plusimg = document.createElement('img');
        plusimg.src = icon;

        plus.appendChild(plush3);
        plus.appendChild(plusimg);

        let bounding = bread.getBoundingClientRect();
        plus.style.top = bounding.top - 100 + 'px';

        if (window.innerWidth < 1000) {
            plus.style.left = (Math.random() * Math.floor(window.innerWidth)) + 'px';
        } else {
            plus.style.left = Math.round(bounding.left) + Math.random() * Math.floor(bounding.width) + 'px';
        }

        document.getElementById('breadmiddle')?.appendChild(plus);

        requestAnimationFrame(() => {
            plus.style.top = '0';
            plus.style.opacity = '0';
        })
        setTimeout(() => {
            plus.remove();
        }, 1200);
    }


    function rebirth() {
        let total = initialBuildings.map(b => `bread:buildings/${b.name}`)
            .concat('bread:modifiers/price', 'bread:modifiers/speed', 'bread:modifiers/efficiency')
            .concat('bread:questIndex', 'bread:clickvalue', 'bread:score', 'bread:canrebirth');

        total.forEach(got => localStorage.removeItem(got));

        localStorage.setItem('bread:rebirth', String(parseInt(localStorage.getItem('bread:rebirth') || '0') + 1));
    };

    return (
        <div className='bakingbread' style={{ display: hidden ? 'none' : 'flex' }}>
            <div className='breadreset' id='breadreset' onClick={(ev) => {
                if (ev.target == (document.getElementById('breadreset') as HTMLDivElement)) (document.getElementById('breadreset') as HTMLDivElement).style.display = 'none';
            }}>
                <div className='glass'>
                    <h1>Are you sure to Rebirth?</h1>
                    <a>You need to finish all Quests in order to Rebirth.<br />Clicking "REBIRTH" will :<br />- Delete: all your loafs, buildings and quests.<br />- Give you one Rebirth and you will gain access to more quests and skins.<br /><br />To cancel the action, click outside this pop-up.</a>

                    <div className='coolclick glass' style={{ background: (localStorage.getItem('bread:canrebirth') === 'true' ? 'rgba(177, 255, 94, 0.3)' : 'rgba(255, 94, 94, 0.3)'), cursor: (localStorage.getItem('bread:canrebirth') == 'true' ? 'pointer' : 'not-allowed') }} onClick={() => {
                        if (localStorage.getItem('bread:canrebirth') !== 'true') return;

                        // localStorage.setItem('bread:score', String(10));
                        // localStorage.setItem('bread:questIndex', String(59));
                        rebirth();

                        ; (document.getElementById('breadreset') as HTMLDivElement).style.display = 'none';
                        location.reload();
                    }}>
                        <a className='text'>REBIRTH</a>
                    </div>
                </div>
            </div>

            <div className='middle glass' id='breadmiddle' onClick={clicked} onContextMenu={clicked}>
                <h1>{AAC.isCheating ? 'You Are Cheating. Please stop.' : ((score == 0 && initialized == 0) ? 'Click the Bread' : formatNumber(score))}</h1>

                <a className={'bread ' + (AAC.isCheating ? 'trollface' : (
                    (parseInt(localStorage.getItem('bread:questIndexBackup') || '1') >= 59 ? 'logo50' :
                        (parseInt(localStorage.getItem('bread:questIndexBackup') || '1') >= 53 ? 'logo45' :
                            (parseInt(localStorage.getItem('bread:questIndexBackup') || '1') >= 47 ? 'logo40' :
                                (parseInt(localStorage.getItem('bread:questIndexBackup') || '1') >= 41 ? 'logo35' :
                                    (parseInt(localStorage.getItem('bread:questIndexBackup') || '1') >= 35 ? 'logo30' :
                                        (parseInt(localStorage.getItem('bread:questIndexBackup') || '1') >= 29 ? 'logo25' :
                                            (parseInt(localStorage.getItem('bread:questIndexBackup') || '1') >= 23 ? 'logo20' :
                                                (parseInt(localStorage.getItem('bread:questIndexBackup') || '1') >= 17 ? 'logo15' :
                                                    (parseInt(localStorage.getItem('bread:questIndexBackup') || '1') >= 11 ? 'logo10' :
                                                        (parseInt(localStorage.getItem('bread:questIndexBackup') || '1') >= 5 ? 'logo5' :
                                                            'logo'))))))))))))} id='breadclicker' />


                <BreadMusic openLink={openLink} />
            </div>

            <div className='right glass'>
                <h1>Baking Bread - Upgrades</h1>
                <a>Your score is saved automatically!</a>

                <div className='buildings'>
                    <BreadQuest setScore={[score, setScore]} setClickValue={setClickValue} />

                    {Object.values(initialBuildings).map((build, index) =>
                        <Fragment key={'building' + index} >
                            {(!build.showCondition || build.showCondition()) &&
                                <BreadBuilding buildData={build} setScore={[score, setScore]} clickicon={clickicon} />
                            }
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BakingBread;