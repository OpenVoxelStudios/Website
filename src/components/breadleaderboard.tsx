import { useEffect, useState } from 'react';
import './breadleaderboard.css';
import { Player, authType, authTypeNOTNULL } from '../types';
import formatNumber from '../functions/formatNumber';
import { BACKEND } from '../functions/config';

const Leaderboard = ({ hidden, auth, setAuth }: { hidden: boolean, auth: authType, setAuth: React.Dispatch<React.SetStateAction<authType>> }) => {
    const [lb, setLb] = useState<Player[]>([]);
    const [rank, setRank] = useState(0);

    localStorage.removeItem('bread:authkey');
    localStorage.removeItem('bread:authing');

    async function updateRank() {
        let rank = await (await fetch(BACKEND + '/api/rank', {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('authkey') as string
            }
        })).json();

        setRank(rank.rank as number);
    };

    async function uploadScore() {
        console.warn('Trying to update score')
        if (localStorage.getItem('authkey')) fetch(BACKEND + '/api/score', {
            mode: 'cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': localStorage.getItem('authkey') as string
            },
            body: JSON.stringify({
                score: parseInt(localStorage.getItem('bread:totalscore') || '0'),
                rebirth: parseInt(localStorage.getItem('bread:rebirth') || '0'),
            })
        });
    };

    async function updateLeaderboard() {
        let lbUpdate = await (await fetch(BACKEND + '/api/leaderboard')).json();
        setLb(lbUpdate);
    };

    useEffect(() => {
        uploadScore();
        updateRank();

        const interval = setInterval(() => {
            uploadScore();
            updateRank();
            if (!hidden) updateLeaderboard();
        }, 1 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!hidden) updateLeaderboard();
    }, [hidden]);

    return (
        <div className='leaderboard' style={{ display: hidden ? 'none' : 'flex' }}>
            {/* <div className='consent'>
                <h3>Do you want to be part of the Leaderboard?<br />(This will show your Avatar, Username and In-Game Data)</h3>

                <div className={'coolclick glass' + (auth?.publicProfile ? ' no' : '')} onClick={() => {
                    if (auth?.publicProfile === undefined) return;
                    let newVal = !auth.publicProfile;

                    setAuth(a => {
                        (a as authTypeNOTNULL).publicProfile = newVal;
                        return a;
                    });

                    fetch(BACKEND + '/api/public', {
                        mode: 'cors',
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': localStorage.getItem('authkey') as string
                        },
                        body: JSON.stringify({ public: newVal })
                    }).then((r) => {
                        if (r.status == 200) {
                            (document.getElementById('profilethere') as HTMLAreaElement).innerText = newVal ? 'Remove my Profile' : 'Add my Profile';
                            updateLeaderboard();
                        }
                    })
                }}>
                    <a className='text' id='profilethere'>{auth?.publicProfile ? 'Remove my Profile' : 'Add my Profile'}</a>
                </div>
            </div>

            <div className='scores'>
                <div className='cloud'>
                    <h3 id='cloudbackuptext'>Cloud Backups</h3>

                    <div className='coolclick glass' onClick={() => {
                        ; (document.getElementById('uploadcloud') as HTMLAreaElement).innerText = 'Uploading...';

                        let filter = JSON.parse(JSON.stringify(localStorage));
                        let filtered: { [key: string]: any } = {};
                        Object.keys(filter).forEach(key => {
                            if (key.startsWith('bread:')) filtered[key] = filter[key];
                        });

                        fetch(BACKEND + '/api/cloud', {
                            mode: 'cors',
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json",
                                'Authorization': localStorage.getItem('authkey') as string
                            },
                            body: JSON.stringify({ backup: JSON.stringify(filtered) })
                        }).then((r) => {
                            if (r.status == 200) {
                                ; (document.getElementById('uploadcloud') as HTMLAreaElement).innerText = 'Uploaded!';
                            }
                        })
                    }}>
                        <a className='text' id='uploadcloud'>Upload</a>
                    </div>

                    <div className='coolclick glass' onClick={() => {
                        let self = (document.getElementById('restorecloud') as HTMLAreaElement);

                        if (self.dataset.backup) {
                            console.warn('Restoring from Backup...');
                            let backup = JSON.parse(self.dataset.backup);

                            Object.keys(backup).forEach(key => localStorage.setItem(key, backup[key]));
                            location.reload();

                            return;
                        };

                        self.innerText = 'Downloading Backup...';

                        fetch(BACKEND + '/api/cloud', {
                            mode: 'cors',
                            method: 'GET',
                            headers: {
                                'Authorization': localStorage.getItem('authkey') as string
                            },
                        }).then(async (r) => {
                            if (r.status == 200) {
                                let backup = await r.text();

                                if (!backup) return self.innerText = 'No Backup';
                                backup = JSON.parse(backup);

                                self.innerText = `Waiting for Confirmation`;

                                let title = (document.getElementById('cloudbackuptext') as HTMLHeadingElement);
                                title.innerHTML = `Cloud Backups<br />PLEASE PRESS AGAIN TO CONFIRM RESTORATION. This will erase your current progression and set it to the one in the backup. Your backup's total score is ${formatNumber(parseInt(backup['bread:totalscore'] || '0'))} and ${parseInt(backup['bread:rebirth'] || '0')} rebirths.`;

                                self.dataset.backup = JSON.stringify(backup);

                                setTimeout(() => {
                                    self.innerText = 'Restore';
                                    self.dataset.backup = '';
                                    title.innerHTML = 'Cloud Backups';
                                }, 30_000)
                            }
                        })
                    }}>
                        <a className='text' id='restorecloud'>Restore</a>
                    </div>
                </div>

                {lb.map((player, index) =>
                    <div key={index} className={'glass' + ((index == 0) ? ' first' : (index == 1 ? ' second' : (index == 2 ? ' third' : '')))}>
                        <img src={player.avatar} />
                        <div>
                            <h1>{player.name}</h1>
                            <h2>Score: {player.score || 0} - {formatNumber(player.rebirth || 0)} Rebirth{((player.rebirth || 0) <= 1) ? '' : 's'}</h2>
                        </div>
                        <h1>{index + 1}</h1>
                    </div>
                )}

                {rank !== 0 && rank > 3 &&
                    <>
                        <div className='glass' style={{ height: '50px' }}>
                            <h1 style={{ width: '100%', textAlign: 'center' }}>...</h1>
                        </div>

                        <div className='glass'>
                            <img src={localStorage.getItem('user:avatar') as string} />
                            <div>
                                <h1>{localStorage.getItem('user:name') as string}</h1>
                                <h2>Score: {formatNumber(parseInt(localStorage.getItem('bread:totalscore') || '0'), 2)} - {formatNumber(parseInt(localStorage.getItem('bread:rebirth') || '0'))} Rebirth{(parseInt(localStorage.getItem('bread:rebirth') || '0') <= 1) ? '' : 's'}</h2>
                            </div>
                            <h1>{rank}</h1>
                        </div>
                    </>
                }
            </div> */}
            <h1>Whoops! Leaderboard is not available yet!</h1>
            <h3>It's all ready to be there but it needs to be hosted on a server. Should be the case around end August or something :)</h3>
        </div>
    )
}

export default Leaderboard;