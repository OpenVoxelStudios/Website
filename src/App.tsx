import { useEffect, useState } from 'react';
import './App.css';
import Banner from '/banner.png';
import Footer from './components/footer';
import GamePage from './components/gamePage';
import Games from './components/games';
import Header from './components/header';
import MainPage from './components/main';
import DataStuff from './components/datastuff';
import { FormList, FormData } from './forms/forms.ts';

/* Forms Imports */
import FormBetaTest from './forms/beta-test/form.tsx';

function App({ page, game_id, redirect_to, form }: { page: string, game_id?: string, redirect_to?: string, form?: typeof FormList[number] }) {
  const [PAGE, setPAGE] = useState(page);
  const [GAME_ID, setGAME_ID] = useState(game_id);
  const [hidden, sethidden] = useState(true);

  function localRedirect(PATH: string, newPage?: string, newGame_id?: string, replace?: boolean) {
    location.hash = "";
    location.hash = "content";

    sethidden(true);

    if (newPage) setPAGE(newPage);
    if (newGame_id) setGAME_ID(newGame_id);

    window.history[replace ? 'replaceState' : 'pushState']({ "page": PAGE, "game_id": GAME_ID }, document.title, PATH);
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        setPAGE(event.state.page);
        setGAME_ID(event.state.game_id);
      };
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
      <DataStuff hidden={hidden} sethidden={sethidden} />

      <div className='content' id='content' hidden={hidden}>
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

        {PAGE == 'form' && form != undefined &&
          <div className='formRoot'>

            <div className='glass formHeader'>
              <img className='formThumbnail' src={Banner} />

              <h1>{FormData[form].title}</h1>
              <p>{FormData[form].description}</p>

            </div>

            {form == "beta-test" &&
              <FormBetaTest />
            }
          </div>
        }
      </div>

      <Footer />
    </>
  )
}

export default App
