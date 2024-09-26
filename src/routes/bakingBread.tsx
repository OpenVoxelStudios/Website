import '../App.css';
import { useEffect, useState } from 'react';
import Bread from '../components/bread';
import Header from '../components/breadheader';
import { onLoad } from '../router';
import { ScrollRestoration } from 'react-router-dom';

export default function BakingBreadRoute() {
  useEffect(onLoad, []);
  const [showBreadLeaderboard, setShowBreadLeaderboard] = useState(false);

  return (
    <>
      <Header showLeaderboard={showBreadLeaderboard} setShowLeaderboard={setShowBreadLeaderboard} />

      <div className='content' id='content'>
        <style>{`
              * {
                -webkit-user-select: none;
                -ms-user-select: none;
                user-select: none;

                -webkit-user-drag: none;
                -khtml-user-drag: none;
                -moz-user-drag: none;
                -o-user-drag: none;
                user-drag: none;

                -webkit-tap-highlight-color: transparent;
                touch-action: manipulation;
                -webkit-touch-callout: none;
              }

              #root {
                zoom: 1;

                overflow-x: hidden;
                overflow-y: hidden;
              }
            `}</style>

        <Bread showLeaderboard={showBreadLeaderboard} />
      </div>

      <ScrollRestoration />
    </>
  )
};