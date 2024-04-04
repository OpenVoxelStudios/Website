import './App.css';
import Footer from './components/footer';
import GamePage from './components/gamePage';
import Games from './components/games';
import Header from './components/header';
import MainPage from './components/main';

function App({ page, game_id, redirect_to }: { page: string, game_id?: string, redirect_to?: string }) {
  return (
    <>
      <Header />

      <div className='content' id='content'>
        {page == "main" &&
          <MainPage />
        }

        {page == "games" &&
          <Games />
        }

        {page == "game" &&
          <GamePage game={game_id as string} />
        }

        {page == "redirect" &&
          <a href={redirect_to}><h1>Redirecting to {redirect_to}... (click here if nothing happend)</h1></a>
          && (location.href = redirect_to as string)
        }
      </div>

      <Footer />
    </>
  )
}

export default App
