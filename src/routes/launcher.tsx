import '../App.css';
import { useEffect } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { onLoad } from '../router';
import { ScrollRestoration } from 'react-router-dom';
import Launcher from '../components/launcher';


export default function LauncherRoute() {
  useEffect(onLoad, []);

  return (
    <>
      <Header />

      <div className='content' id='content'>
        <Launcher />
      </div>

      <ScrollRestoration />
      <Footer />
    </>
  )
};