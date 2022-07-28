//React
import { Routes, Route } from 'react-router-dom';
//Pages
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
//Style
import { Container, Header, Link } from './App.styled';
//API
import { tmdbMovieAPI, tmdbImageAPI, tmdbMovieIdAPI } from 'api/tmdbAPI';
import { useState, useEffect } from 'react';

export const App = () => {
  const [movArr, setMovArr] = useState(() => []);

  useEffect(() => {
    if (movArr.length === 0) {
      const topRes = tmdbMovieAPI('trending/all/day', 1);
      topRes.then(value => setMovArr(value.movData));
    };
    //ok
    //const topRes = tmdbMovieAPI('trending/all/day', 1);
    //const searchByName = tmdbMovieAPI('search/movie', 1, 'king');
    //const searchById = tmdbMovieIdAPI('movie', '892527', 'credits');
    // const searchImageById = tmdbImageAPI('A65oYGOeBQDoxhwkeVLnBPNWItK.jpg', 'w500');
    // topRes.then(value => {
    //   console.log(value.movData);
    // });
    //searchByName.then(value => { console.log(value.movData, value.totalPagesData) })

    //searchById.then(value => { console.log(value); });

    //searchImageById.then(value => { console.log(value) });
    
  }, [movArr]);

  return (
    <>
      <Container>

        <Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>

        <Routes>
          <Route path="/" element={<Home arr={movArr}/>}/>
          <Route path="/movies" element={<Movies />} />
        </Routes>

      </Container>
    </>
  );
};
