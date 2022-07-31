import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { tmdbMovieIdAPI } from 'api/tmdbAPI';

import { Link } from './MovieDetail.syled';

import { MainInf } from 'components/MainInf';

export const MovieDetail = () => {
    const { movieId } = useParams();
    const [movieObj, setMovieObj] = useState(null);

    useEffect(() => {
        const movie = tmdbMovieIdAPI('movie', `${movieId}`);
        if (movie) {
            movie.then(value => {
                if (!value)
                {
                    return;
                    }
                setMovieObj(value.data)
            });
        };

    }, [movieId]);

    return (
        <main>
            <Link to="/">Go Back</Link>
            {movieObj && <MainInf movieObj={movieObj} />}
            <Outlet context={[movieObj]}/>
        </main>        
    );
};