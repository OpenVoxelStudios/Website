import { createBrowserRouter } from 'react-router-dom';
import RootRoute from './routes/root.tsx';
import ErrorRoute from './routes/error.tsx';
import GamesRoute from './routes/games.tsx';
import LauncherRoute from './routes/launcher.tsx';
import BakingBreadRoute from './routes/bakingBread.tsx';
import HallOfFameRoute from './routes/hallOfFame.tsx';
import GameSpecificRoute from './routes/gameSpecific.tsx';

export const scrollTop = () => {
    ; (document.getElementById('root') as HTMLDivElement).scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

export const onLoad = () => {
    const onPageLoad = () => {
        ; (document.querySelector('meta[name="theme-color"]') as HTMLMetaElement)?.setAttribute('content', '#3e4152');
    };

    if (document.readyState === 'complete') {
        onPageLoad();
    } else {
        window.addEventListener('load', onPageLoad, false);
        return () => window.removeEventListener('load', onPageLoad);
    };
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootRoute />,
        errorElement: <ErrorRoute />,
    },
    {
        path: '/games',
        element: <GamesRoute />
    },
    {
        path: '/game/:game_id',
        element: <GameSpecificRoute />
    },
    {
        path: '/launcher',
        element: <LauncherRoute />
    },
    {
        path: '/bakingbread',
        element: <BakingBreadRoute />
    },
    {
        path: '/halloffame',
        element: <HallOfFameRoute />
    },
    {
        path: '/404',
        element: <ErrorRoute status={404} statusText='Not Found' message={<>Seems like you tried to go so far that we can't find anything for you!<br />Maybe you should check out our Discord if you think this is a mistake?</>} />,
    }
]);