import './App.css';
import Footer from './components/footer';
import GamePage from './components/gamePage';
import Games from './components/games';
import Header from './components/header';
import MainPage from './components/main';

function App({ page, game_id }: { page: string, game_id?: string }) {
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
      </div>

      <Footer />
    </>
  )
}

export default App
