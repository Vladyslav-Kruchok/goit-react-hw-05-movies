//React
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
//API
import { tmdbMovieIdAPI } from 'api/tmdbAPI';
//Style
import { Link } from './MovieDetail.syled';
//Component export default
import MainInf from 'components/MainInf/MainInf.jsx';

const MovieDetail = ({ history }) => {
    const { movieId } = useParams();
    const [movieObj, setMovieObj] = useState(null);

    useEffect(() => {
        const movie = tmdbMovieIdAPI('movie', `${movieId}`);
        if (movie) {
            movie.then(value => {
                if (!value) return;
                setMovieObj(value.data);
            });
        };

    }, [movieId]);

    return (
        <main>
            <Link to={history}>Go Back</Link>
            {movieObj && <MainInf movieObj={movieObj} />}
            {/* to tranfer object into outlet comtonent */}
            {/* <Outlet context={[movieObj]} /> */}
            <Outlet/>
        </main>        
    );
};

export default MovieDetail;