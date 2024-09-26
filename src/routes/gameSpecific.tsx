import '../App.css';
import { useEffect } from 'react';
import Footer from '../components/footer';
import GamePage from '../components/gamePage';
import Header from '../components/header';
import { onLoad } from '../router';
import { ScrollRestoration, useParams } from 'react-router-dom';

export default function GameSpecificRoute() {
  let params = useParams();
  console.log(params.game_id);

  useEffect(onLoad, []);

  return (
    <>
      <Header />

      <div className='content' id='content'>
        <GamePage game={params.game_id as string} />
      </div>

      <ScrollRestoration />
      <Footer />
    </>
  )
};