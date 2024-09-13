import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer';
import GamePage from './components/gamePage';
import Games from './components/games';
import Header from './components/header';
import MainPage from './components/main';
import DataStuff from './components/datastuff';
import Launcher from './components/launcher';
import Bread from './components/bread';
import HallOfFame from './components/halloffame';

type overridesType = {
  noheader?: boolean,
  nofooter?: boolean,
};

export default function App({ page, game_id, overrides }: { page: string, game_id?: string, overrides?: overridesType }) {
  const [PAGE, setPAGE] = useState(page);
  const [GAME_ID, setGAME_ID] = useState(game_id);
  const [hidden, sethidden] = useState(true);
  const [overs, setOvers] = useState(overrides);
  const [showBreadLeaderboard, setShowBreadLeaderboard] = useState(false);

  function localRedirect(PATH: string, newPage?: string, newGame_id?: string, replace?: boolean, overrides: overridesType = { nofooter: false, noheader: false }) {
    (document.getElementById('root') as HTMLDivElement).scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    if (newPage == PAGE && (!newGame_id || (newGame_id && newGame_id == GAME_ID))) return;

    sethidden(true);

    if (newPage) setPAGE(newPage);
    if (newGame_id) setGAME_ID(newGame_id);
    setOvers(overrides);

    window.history[replace ? 'replaceState' : 'pushState']({ "page": PAGE, "game_id": GAME_ID, "overrides": overrides }, document.title, PATH);
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        setPAGE(event.state.page);
        setGAME_ID(event.state.game_id);
        setOvers(event.state.overrides);
      };
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [page, game_id]);

  useEffect(() => {
    // Updates current state
    window.history.replaceState({ "page": PAGE, "game_id": GAME_ID, "overrides": overs }, document.title, location.href);
  }, [PAGE, GAME_ID, overs]);

  return (
    <>
      {!overs?.noheader &&
        <Header localRedirect={localRedirect} PAGE={PAGE} showLeaderboard={showBreadLeaderboard} setShowLeaderboard={setShowBreadLeaderboard} />
      }
      <DataStuff hidden={hidden} sethidden={sethidden} />

      <div className='content' id='content' hidden={hidden}>
        {PAGE == "main" &&
          <MainPage localRedirect={localRedirect} />
        }

        {PAGE == "games" &&
          <Games localRedirect={localRedirect} />
        }

        {PAGE == "game" &&
          <GamePage game={GAME_ID as string} localRedirect={localRedirect} />
        }

        {PAGE == "launcher" &&
          <Launcher />
        }

        {PAGE == "halloffame" &&
          <HallOfFame />
        }

        {/* We will never know what that is */}
        {PAGE == 'bakingbread' &&
          <>
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
          </>
        }
      </div>

      {!overs?.nofooter &&
        <Footer />
      }
    </>
  )
};