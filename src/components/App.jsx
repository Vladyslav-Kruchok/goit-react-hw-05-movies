//React
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
//Pages
import { Layout } from 'pages/Layout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetail } from 'pages/MovieDetail';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
//API
import { tmdbMovieAPI } from 'api/tmdbAPI'; //, tmdbMovieIdAPI

export const App = () => {
  const [movArr, setMovArr] = useState(null);

  useEffect(() => {
    const topRes = tmdbMovieAPI('trending/all/day', 1);
    topRes.then(value => {
      setMovArr(value.movData);
    });
    //};
    //# region COMENTED #
    //ok
    //const searchByName = tmdbMovieAPI('search/movie', 1, 'king');
    //const searchById = tmdbMovieIdAPI('movie', '892527', 'credits');
    //searchByName.then(value => { console.log(value.movData, value.totalPagesData) })
    //searchById.then(value => { console.log(value); });
    //# endregion #
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home arr={movArr} />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" exact element={<MovieDetail />} >
          <Route path="cast" exact element={<Cast />} ></Route>
          <Route path="reviews" exact element={<Reviews />} ></Route>
        </Route>
      </Route>
    </Routes>
  );
};
