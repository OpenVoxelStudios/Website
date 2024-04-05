import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer';
import GamePage from './components/gamePage';
import Games from './components/games';
import Header from './components/header';
import MainPage from './components/main';

function App({ page, game_id, redirect_to }: { page: string, game_id?: string, redirect_to?: string }) {
  const [PAGE, setPAGE] = useState(page);
  const [GAME_ID, setGAME_ID] = useState(game_id);

  function localRedirect(PATH: string, newPage?: string, newGame_id?: string) {
    if (newPage) setPAGE(newPage);
    if (newGame_id) setGAME_ID(newGame_id);

    window.history.replaceState({ "page": PAGE, "game_id": GAME_ID }, document.title, PATH);
    location.hash = "";
    location.hash = "content";
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      console.log('POPSTATE', event.state);
      if (event.state) {
        const { page: newPage, game_id: newGameId } = event.state;
        setPAGE(newPage || page);
        setGAME_ID(newGameId || game_id);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [page, game_id]);

  // Updates current state
  window.history.replaceState({ "page": PAGE, "game_id": GAME_ID }, document.title, location.href);
  

  return (
    <>
      <Header localRedirect={localRedirect} />

      <div className='content' id='content'>
        {PAGE == "main" &&
          <MainPage localRedirect={localRedirect} />
        }

        {PAGE == "games" &&
          <Games localRedirect={localRedirect} />
        }

        {PAGE == "game" &&
          <GamePage game={GAME_ID as string} />
        }

        {PAGE == "redirect" &&
          <a href={redirect_to}><h1>Redirecting to {redirect_to}... (click here if nothing happend)</h1></a>
          && (location.href = redirect_to as string)
        }
      </div>

      <Footer />
    </>
  )
}

export default App
