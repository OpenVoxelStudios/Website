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

type overridesType = {
  noheader?: boolean,
  nofooter?: boolean,
};

function App({ page, game_id, redirect_to, overrides }: { page: string, game_id?: string, redirect_to?: string, overrides?: overridesType }) {
  const [PAGE, setPAGE] = useState(page);
  const [GAME_ID, setGAME_ID] = useState(game_id);
  const [hidden, sethidden] = useState(true);
  const [overs, setOvers] = useState(overrides);
  const [showBreadLeaderboard, setShowBreadLeaderboard] = useState(false);

  function localRedirect(PATH: string, newPage?: string, newGame_id?: string, replace?: boolean, overrides: overridesType = { nofooter: false, noheader: false }) {
    location.hash = "";
    requestAnimationFrame(() => {
      location.hash = "content";
    });

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

        {PAGE == "redirect" &&
          <a href={redirect_to}><h1>Redirecting to {redirect_to}... (click here if nothing happend)</h1></a>
          && (location.href = redirect_to as string)
        }

        {/* We will never know what that is */}
        {PAGE == 'bakingbread' &&
          <Bread showLeaderboard={showBreadLeaderboard} />
        }
      </div>

      {!overs?.nofooter &&
        <Footer localRedirect={localRedirect} />
      }
    </>
  )
}

export default App;