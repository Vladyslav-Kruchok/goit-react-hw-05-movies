//React
import { useState, useEffect, lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';

//API
import { tmdbMovieAPI } from 'api/tmdbAPI';
//Pages static import
import Snippet from 'components/Snippet/Snippet.jsx';
// import Layout from 'pages/Layout/Layout.jsx';
// import Home from 'pages/Home/Home.jsx';
// import Movies from 'pages/Movies/Movies.jsx';
// import MovieDetail from 'pages/MovieDetail/MovieDetail.jsx';
// import Cast from './Cast/Cast.jsx';
// import Reviews from './Reviews/Reviews.jsx';
// import { NotFound } from 'pages/NotFound';

//Pages dynamic import, necessarily cover a <Component> into <Suspense>, 
//<Suspense fallback={<div>Loading...from...Layout</div>}>  <Component> </Suspense>
//export of function is only Default export 
const Layout = lazy(() => import('pages/Layout/Layout.jsx' /* webpackChunkName: "Layout" */));
const Home = lazy(() => import('pages/Home/Home.jsx' /* webpackChunkName: "Home" */));
const Movies = lazy(() => import('pages/Movies/Movies.jsx' /* webpackChunkName: "Movies" */));
const MovieDetail = lazy(() => import('pages/MovieDetail/MovieDetail.jsx' /* webpackChunkName: "MovieDetail" */));
const Cast = lazy(() => import('./Cast/Cast.jsx' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx' /* webpackChunkName: "Reviews" */));
const NotFound = lazy(() => import('pages/NotFound/NotFound.jsx' /* webpackChunkName: "NotFound" */));

const TEXT_DEFAULT = 'Loading...';

export const App = () => {
  const [movArr, setMovArr] = useState(null);
  const [history, setHistory] = useState("/");
  
  useEffect(() => {
    const topRes = tmdbMovieAPI('trending/all/day', 1);
    topRes.then(value => {
      setMovArr(value.movData);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <Suspense fallback={<Snippet text={TEXT_DEFAULT} />}>
          <Layout />
        </Suspense>
        }>
        <Route index element={
          <Suspense fallback={<Snippet text={TEXT_DEFAULT} />}>
            <Home arr={movArr} setHistory={setHistory} />
          </Suspense>
        } />
        <Route path="movies" element={
          <Suspense fallback={<Snippet text={TEXT_DEFAULT} />}>
            <Movies setHistory={setHistory} />
          </Suspense>
        } />
        <Route path="movies/:movieId" exact element={
          <Suspense fallback={<Snippet text={TEXT_DEFAULT} />}>
            <MovieDetail history={history} />
          </Suspense>
        } >
          <Route path="cast" exact element={
            <Suspense fallback={<Snippet text={TEXT_DEFAULT} />}>
              <Cast />
            </Suspense>
          } />
          <Route path="reviews" exact element={
            <Suspense fallback={<Snippet text={TEXT_DEFAULT} />}>
              <Reviews />
            </Suspense>
          } />
        </Route>
        <Route path="*" element={
          <Suspense fallback={<Snippet text={TEXT_DEFAULT} />}>
            <NotFound />
          </Suspense>
        } />
      </Route>
    </Routes>
  );
};
